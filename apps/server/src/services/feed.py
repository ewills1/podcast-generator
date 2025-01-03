import yaml
import xml.etree.ElementTree as xml_tree
import os
from flask_cors import CORS

def generate_podcast_feed(yaml_file, output_file):
    """Generates a podcast RSS XML feed from a YAML file."""

    with open(yaml_file, 'r') as file:
        yaml_data = yaml.safe_load(file)

        # Create the RSS root element
        rss_element = xml_tree.Element('rss', {'version': '2.0', 
                                               'xmlns:itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd',
                                               'xmlns:content': 'http://purl.org/rss/1.0/modules/content/'})
        channel_element = xml_tree.SubElement(rss_element, 'channel')

        link_prefix = yaml_data['link']

        # Add basic metadata to the channel
        xml_tree.SubElement(channel_element, 'title').text = yaml_data['title']
        xml_tree.SubElement(channel_element, 'format').text = yaml_data['format']
        xml_tree.SubElement(channel_element, 'subtitle').text = yaml_data['subtitle']
        xml_tree.SubElement(channel_element, 'itunes:author').text = yaml_data['author']
        xml_tree.SubElement(channel_element, 'description').text = yaml_data['description']
        xml_tree.SubElement(channel_element, 'itunes:image', {'href': link_prefix + yaml_data['image']})
        xml_tree.SubElement(channel_element, 'language').text = yaml_data['language']
        xml_tree.SubElement(channel_element, 'link').text = link_prefix

        # Add category for the podcast
        xml_tree.SubElement(channel_element, 'itunes:category', {'text': yaml_data['category']})

        # Add podcast episodes
        for item in yaml_data['item']:
            item_element = xml_tree.SubElement(channel_element, 'item')
            xml_tree.SubElement(item_element, 'title').text = item['title']
            xml_tree.SubElement(item_element, 'itunes:author').text = yaml_data['author']
            xml_tree.SubElement(item_element, 'description').text = item['description']
            xml_tree.SubElement(item_element, 'itunes:duration').text = item['duration']
            xml_tree.SubElement(item_element, 'pubDate').text = item['published']
            
            # Add the enclosure (audio file metadata)
            enclosure = xml_tree.SubElement(item_element, 'enclosure', {
                'url': link_prefix + item['file'],
                'type': 'audio/mpeg',
                'length': item['length']
            })

        # Generate the RSS XML and save to the output file
        output_tree = xml_tree.ElementTree(rss_element)
        output_tree.write(output_file, encoding='UTF-8', xml_declaration=True)
    print(f"Podcast feed successfully generated at {output_file}.")

yaml_file = '/app/podcast-feed/podcast.yaml'
output_file = '/app/podcast-feed/podcast.xml'
generate_podcast_feed(yaml_file, output_file)