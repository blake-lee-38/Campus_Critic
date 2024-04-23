import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from firebase_admin.firestore import FieldFilter

cred = credentials.Certificate(r"./firebase_key_campus_critic.json")
firebase_admin.initialize_app(cred)
db = firestore.client()


# Queries the database to get all of the reviews for a specific user
def getReviews(user_id):
    dbResults = db.collection('reviews').where(filter=FieldFilter('user_id', '==', user_id)).stream()
    reviews = []
    for review in dbResults:
        review = review.to_dict()
        formattedReview = {
            'place_id': review['place_id'],
            'rating': review['rating'],
            'review': review['body']
        }
        print(formattedReview)
        reviews.append(formattedReview)


getReviews("XXXX")