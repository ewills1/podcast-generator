#!/bin/bash

echo "========== Starting Feed Update =========="

# Navigate to the server directory
cd /app/server/src/services

# Set up git config
git config --global user.name "ewills1"

git config --global user.email "ewills1@sheffield.ac.uk"

git remote set-url origin https://"${{secrets.GH_TOKEN}}"@github.com/ewills1/podcast-generator.git

git config --global --add safe.directory /app

# Run feed.py
python3 feed.py

# Commit changes to the repo
git add /app/podcast-feed/podcast.xml && git commit -m"Updated Podcasts"

# Push changes to remote repo
git push

echo "========== Feed Update Complete =========="

