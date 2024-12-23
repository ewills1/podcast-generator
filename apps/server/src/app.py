from flask import Flask, jsonify
import xml.etree.ElementTree as ET
from flask_cors import CORS

app = Flask(__name__)


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
    app.run(host="0.0.0.0", port=5000, debug=True)
