# Use a Python-specific image
FROM python:3.10-slim

# Install System Dependencies
RUN apt-get update && apt-get install -y git && apt-get clean

# Copy the server directory 
COPY apps/server /app/server

COPY .git /app/.git

# Copy the requirements file into the container
COPY requirements.txt /app/requirements.txt

COPY podcast-feed /app/podcast-feed

# Install Python dependencies
RUN pip install --upgrade pip \
    && pip install --no-cache-dir -r /app/requirements.txt \
    && rm -rf /app/requirements.txt

# Copy the entrypoint script
COPY apps/server/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Set the working directory
WORKDIR /app

# Set the entrypoint
ENTRYPOINT ["/entrypoint.sh"]
