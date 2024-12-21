from flask import Flask, request, jsonify, render_template
import random

app = Flask(__name__)

# Sample destination and activity data
destinations = [
    {"name": "Paris", "budget": "high", "style": "culture", "activities": ["Eiffel Tower", "Louvre Museum"]},
    {"name": "Kyoto", "budget": "medium", "style": "culture", "activities": ["Kinkaku-ji", "Arashiyama Bamboo Grove"]},
    {"name": "Iceland", "budget": "medium", "style": "adventure", "activities": ["Golden Circle", "Blue Lagoon"]},
    {"name": "Maldives", "budget": "high", "style": "relaxation", "activities": ["Beach Resorts", "Snorkeling"]},
    {"name": "New York", "budget": "high", "style": "culture", "activities": ["Central Park", "Broadway Shows"]},
    {"name": "Swiss Alps", "budget": "high", "style": "adventure", "activities": ["Skiing", "Hiking"]},
]

@app.route('/')
def index():
    # This will render the 'index.html' template when the user visits the home page
    return render_template('index.html')

@app.route('/')
def recommend():
    user_preferences = request.json
    budget = user_preferences.get('budget')
    travel_style = user_preferences.get('travel_style')6
    previous_trips = user_preferences.get('previous_trips', "").split(",")

    # Simple recommendation logic based on user preferences
    recommended_destinations = []

    for destination in destinations:
        if destination['budget'] == budget and destination['style'] == travel_style:
            # If the user has visited a destination, avoid recommending it again
            if destination['name'].lower() not in [trip.strip().lower() for trip in previous_trips]:
                recommended_destinations.append({
                    "name": destination['name'],
                    "type": "Destination",
                    "description": f"Suggested activities: {', '.join(destination['activities'])}"
                })

    # Randomize if we have multiple suggestions
    if not recommended_destinations:
        recommended_destinations.append({
            "name": "No exact matches found",
            "type": "Suggestion",
            "description": "We couldn't find exact matches based on your preferences, but here are some ideas!"
        })

    return render_template('index.html', recommendations=recommended_destinations)

if __name__ == '_main_':
    app.run(debug=True)