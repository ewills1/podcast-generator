from flask import Flask, send_file, render_template
import os
from feed import generate_podcast_feed  # Importing the function

app = Flask(__name__)

# Route to serve the podcast XML feed
@app.route('/podcast.xml')
def serve_podcast_xml():
    # Generate the podcast XML feed (if it's not generated yet)
    if not os.path.exists('podcast.xml'):
        generate_podcast_feed('podcast.yaml', output_file='podcast.xml')
    
    # Serve the generated XML file as a response
    return send_file('podcast.xml', mimetype='application/xml')

# Route to serve the frontend HTML page
@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
