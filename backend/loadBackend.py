import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import requests

# Initialize Google Maps API Key
MAPS_KEY = "AIzaSyAI5kG4qxfsry5Tnw09xQmmm5elqU3TKxk"

# Initialize Firestore DB

# Initialize Colleges to Search
colleges = {}
colleges['univ_of_oklahoma'] = { 'lat': 35.20916, 'lon': -97.44566}

# Initialize Types to Search - https://developers.google.com/maps/documentation/places/web-service/supported_types
types = ['restaurant', 'hair_care', 'car_repair']

# Get photos for each place
def getPhoto(place_id):
    response = requests.get(f"https://maps.googleapis.com/maps/api/place/details/json?place_id={place_id}&fields=photo&key={MAPS_KEY}")
    result = response.json()['result']
    if 'photos' not in result:
        return "N/A"
    photo_reference = result['photos'][0]['photo_reference']
    return photo_reference

def getReviews(place_id):
    response = requests.get(f"https://maps.googleapis.com/maps/api/place/details/json?place_id={place_id}&fields=reviews&key={MAPS_KEY}")
    result = response.json()['result']
    if 'reviews' not in result:
        return "N/A"
    review = result['reviews'][0]
    data = {
        'user_id': 'fake_user',
        'place_id': place_id,
        'rating': review['rating'],
        'body': review['text'],
        'user_name': review['author_name'],
    }
    doc_ref = db.collection('reviews').document()
    doc_ref.set(data)


# Make API Calls
for college in colleges:
    for type in types:
        cords = f"{colleges[college]['lat']}%2C{colleges[college]['lon']}"
        response = requests.get(f"https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=2500&type={type}&key={MAPS_KEY}&location={cords}")
        results = response.json()['results']

        for result in results:
            if 'rating' not in result:
                result['rating'] = 'N/A'
            if 'vicinity' not in result:
                result['vicinity'] = 'Not Found'
            if 'price_level' not in result:
                result['price_level'] = 'N/A'
            id = result['place_id']
            photo = getPhoto(id)
            getReviews(id)
            data = {
                'name': result['name'],
                'rating': result['rating'],
                'type': type,
                'address': result['vicinity'],
                'price_level': result['price_level'],
                'photo_ref': photo
            }

            doc_ref = db.collection('places').document(college).collection(type).document(id)
            doc_ref.set(data)


