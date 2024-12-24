from flask import Flask, jsonify
import xml.etree.ElementTree as ET
from flask_cors import CORS
import os

app = Flask(__name__)

CORS(app, origins=["http://localhost:3000", "http://frontend:3000"])  

PODCAST_XML_PATH = os.path.join(os.getcwd(), "podcast-feed", "podcast.xml")

@app.route("/")
def home():
    return {"message": "Backend is running!"}

# Route to serve the podcast XML feed
@app.route('/api/podcasts', methods=['GET'])
def get_podcasts():
    tree = ET.parse(PODCAST_XML_PATH)
    root = tree.getroot()

    podcasts = []
    for item in root.findall('./channel/item'):
        podcast = {
            'title': item.find('title').text,
            'description': item.find('description').text,
            'audioUrl': item.find('enclosure').attrib.get('url'),
            'published': item.find('pubDate').text
        }
        podcasts.append(podcast)

    return jsonify(podcasts)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)
