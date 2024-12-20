FROM ubuntu:latest

# Install System Dependencies
RUN apt-get update && apt-get install -y \
    python3.10 \
    python3-pip \
    python3-venv \
    git

# Copy requirements file
COPY requirements.txt /tmp/requirements.txt


# Create a virtual environment and install Python dependencies
RUN python3 -m venv /venv \
    && /venv/bin/pip install --upgrade pip \
    && /venv/bin/pip install --no-cache-dir -r /tmp/requirements.txt \
    && rm -rf /tmp/requirements.txt


# Add the virtual environment to PATH
ENV PATH="/venv/bin:$PATH"

# Copy application code
COPY feed.py backend/feed.py 

# Copy entrypoint script
COPY backend/entrypoint.sh /entrypoint.sh 
RUN chmod +x /entrypoint.sh


# Set the entrypoint
ENTRYPOINT ["/entrypoint.sh"]