document.addEventListener("DOMContentLoaded", function () {
    // Fetch the podcast XML feed when the page is loaded
    fetch('/podcast.xml')
        .then(response => response.text())
        .then(xmlString => {
            // Parse the XML string using DOMParser
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlString, 'application/xml');
            
            // Get all the items (episodes) from the XML feed
            const items = xmlDoc.getElementsByTagName('item');
            const episodesContainer = document.getElementById('episodes');

            // Loop through each item and display it
            Array.from(items).forEach(item => {
                const title = item.getElementsByTagName('title')[0].textContent;
                const description = item.getElementsByTagName('description')[0].textContent;
                const pubDate = item.getElementsByTagName('pubDate')[0].textContent;
                const audioUrl = item.getElementsByTagName('enclosure')[0].getAttribute('url');

                // Create a new div for each episode
                const episodeDiv = document.createElement('div');
                episodeDiv.classList.add('episode');

                // Add the episode title
                const episodeTitle = document.createElement('h3');
                episodeTitle.textContent = title;
                episodeDiv.appendChild(episodeTitle);

                // Add the episode description
                const episodeDescription = document.createElement('p');
                episodeDescription.textContent = description;
                episodeDiv.appendChild(episodeDescription);

                // Add the episode publish date
                const episodeDate = document.createElement('p');
                episodeDate.textContent = `Published on: ${new Date(pubDate).toLocaleDateString()}`;
                episodeDiv.appendChild(episodeDate);

                // Add the audio player for the episode
                const audioPlayer = document.createElement('audio');
                audioPlayer.setAttribute('controls', 'true');
                const audioSource = document.createElement('source');
                audioSource.setAttribute('src', audioUrl);
                audioSource.setAttribute('type', 'audio/mpeg');
                audioPlayer.appendChild(audioSource);
                episodeDiv.appendChild(audioPlayer);

                // Append the episode to the episodes container
                episodesContainer.appendChild(episodeDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching or parsing the podcast feed:', error);
        });
});
