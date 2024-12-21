from flask import Flask, jsonify
import xml.etree.ElementTree as ET

app = Flask(__name__)
from flask_cors import CORS

CORS(app)

# Route to serve the podcast XML feed
@app.route('/api/podcasts', methods=['GET'])
def get_podcasts():
    tree = ET.parse('../../podcast-feed/podcast.xml')
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
    app.run(debug=True)
