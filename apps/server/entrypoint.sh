#!/bin/bash

echo "========== Starting Feed Update =========="

# Navigate to the server directory
cd /app/server/src/services

# Set up git config
# git config --global user.name "${GITHUB_ACTOR}"
git config --global user.name "ewills1"

# git config --global user.email "${INPUT_EMAIL}"
git config --global user.email "ewills1@sheffield.ac.uk"

git remote set-url origin https://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@github.com/ewills1/podcast-generator.git

git config --global --add safe.directory /app

# Run feed.py
python3 feed.py

# Commit changes to the repo
git add /app/podcast-feed/podcast.xml && git commit -m"Updated Podcasts"

# Push changes to remote repo
git push --set-upstream origin main

echo "========== Feed Update Complete =========="

