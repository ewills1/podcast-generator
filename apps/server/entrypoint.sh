#!/bin/bash

echo "========== Starting Feed Update =========="

# Navigate to the server directory
cd /app/server/src/services

# Set up git config
git config --global user.name "${GITHUB_ACTOR}"

git config --global user.email "${INPUT_EMAIL}"

git remote set-url origin https://"${GH_TOKEN}"@github.com/"${GITHUB_USERNAME}"/podcast-generator.git

git config --global --add safe.directory /app

# Run feed.py
python3 feed.py

# Commit changes to the repo
git add /app/podcast-feed/podcast.xml && git commit -m"Updated Podcasts"

# Push changes to remote repo
git push --set-upstream origin main

echo "========== Feed Update Complete =========="

