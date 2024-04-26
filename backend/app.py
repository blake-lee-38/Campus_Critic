from flask import Flask, jsonify, app, request
from flask_cors import CORS, cross_origin
import requests

#from models import restaurants, reviews
# Use models with fields generated in a SQL database, requires Firebase update / functionality review

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/api/get_restaurants', methods=['POST'])
def get_restaurants(request):
    # Decode the request payload
    data = request.json
    location = data.get("city").__str__()
    type = data.get("type").__str__()
    
    geoResponse = requests.get(f"https://maps.googleapis.com/maps/api/geocode/json?address={location}&key={MAPS_API_KEY}")

    lat = geoResponse.json()['results'][0]['geometry']['location']['lat'].__str__()
    lon = geoResponse.json()['results'][0]['geometry']['location']['lng'].__str__()

    cords = lat + '%2C' + lon

    response = requests.get(f"https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=2500&keyword={type}&key={MAPS_API_KEY}&location={cords}")
    results = response.json()['results']
 
    places = []
    for result in results:
        places.append({'name': result['name'], 'rating': result['rating']})

    return jsonify({'places': places})

@app.route('/api/get_restaurant_info', methods=['POST'])
def get_restaurant_info(request, restaurantID):
    # Decode the request payload
    data = request.json
    restaurantID = data.get("restaurantID").__str__()

    # Find the Restaurant ID model on the SQL database
    # SQL Implementation, requires Firebase update / functionality review
    restaurantData = restaurants.objects.get(pk=restaurantID)

    restaurantName = restaurantData.name
    restaurantCuisineType = restaurantData.cuisine
    restaurantInfo = restaurantData.info
    restaurantRating = restaurantData.rating

    return [restaurantName, restaurantCuisineType, restaurantInfo, restaurantRating]

@app.route('/api/get_restaurant_reviews', methods=['POST'])
def get_restaurant_reviews(request, postID, pageNum):
    # Decode the request payload
    data = request.json
    postID = data.get("postID").__str__()

    # Find the Post ID model on the SQL database
    # SQL Implementation, requires Firebase update / functionality review
    restaurantData = restaurants.objects.get(pk=restaurantID)

    # Load 5 posts to display on this page
    numReviews = restaurantData.numReviews

    # PageNum starts at 1, reviews start at index 0
    reviewRangeStart = (pageNum * 5) - 5

    # Reviews Payload, Index 0 User Posted by, Index 1 User's Review, Index 2 User Posted by, Index 3 User's Review ... etc, to index 9
    reviewsPayload = []
    while reviewRangeStart < reviewRangeStart + 5:
        thisReview = reviews.objects.get(pk=reviewRangeStart)
        reviewsPayload.append(thisReview.postedBy)
        reviewsPayload.append(thisReview.post)
        reviewRangeStart += 1

    return reviewsPayload

def callAPI():
    import google.generativeai as genai

    genai.configure(api_key='AIzaSyDb9jb3yDjICQLaKLVxjZEIzl1YrPmt7Tw')
    model = genai.GenerativeModel('gemini-pro')
    response = model.generate_content("Someone likes panda express. Make a suggestion on one other restaurant they should "
                                  "try. You dont need to give me the why.")

    print(response.text)
    

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)

