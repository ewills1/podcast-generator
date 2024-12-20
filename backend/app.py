from flask import Flask, send_file, jsonify
import os 

app = Flask(__name__)

@app.route('/api/podcast-feed', methods=['GET'])
def get_podcast_feed():
    feed_path = os.path.join(os.path.dirname(__file__), '../podcast-feed/podcast.xml')
    if os.path.exists(feed_path):
        return send_file(feed_path, mimetype='application/xml', as_attachment=False)
    else:
        return jsonify({"error": "Podcast feed not found"}), 404
    
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)