from flask import Flask, jsonify, app, request
import requests

location = "Norman,OK"
type = "restaurant"
MAPS_API_KEY = "AIzaSyAI5kG4qxfsry5Tnw09xQmmm5elqU3TKxk"

geoResponse = requests.get(f"https://maps.googleapis.com/maps/api/geocode/json?address={location}&key={MAPS_API_KEY}")

lat = geoResponse.json()['results'][0]['geometry']['location']['lat'].__str__()
lon = geoResponse.json()['results'][0]['geometry']['location']['lng'].__str__()

cords = lat + '%2C' + lon
print(cords)
response = requests.get(f"https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=2500&keyword={type}&key={MAPS_API_KEY}&location={cords}")
results = response.json()['results']

places = []
for result in results:
    places.append({'name': result['name'], 'rating': result['rating']})

