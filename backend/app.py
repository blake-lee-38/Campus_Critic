from flask import Flask, jsonify, app, request
from flask_cors import CORS, cross_origin
import requests

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/api/get', methods=['POST'])
def get_restaurants():
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

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)
