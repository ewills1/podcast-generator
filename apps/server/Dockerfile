# Use a Python-specific image
FROM python:3.10-slim

# Install System Dependencies
RUN apt-get update && apt-get install -y git && apt-get clean

# Copy requirements file
COPY requirements.txt /tmp/requirements.txt

# Install Python dependencies
RUN pip install --upgrade pip \
    && pip install --no-cache-dir -r /tmp/requirements.txt \
    && rm -rf /tmp/requirements.txt

# Copy application code
COPY src/services/feed.py /app/feed.py

# Copy entrypoint script
COPY entrypoint.sh /entrypoint.sh

# Ensure the entrypoint script is executable
RUN chmod +x /entrypoint.sh

# Set the working directory
WORKDIR /app

# Set the entrypoint
ENTRYPOINT ["/entrypoint.sh"]
