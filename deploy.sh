#!/bin/bash

set -e  # Stop on error

########################################
# CONFIGURATION
########################################
REMOTE_USER="root"
#remote host is my DigitalOcean server IP
REMOTE_HOST="142.93.125.221"
REMOTE_PATH="/srv/www/annalouisep.com"

########################################
# DEPLOY
########################################
echo "Building file list..."

# Create a temporary package directory
TMP_DIR=$(mktemp -d)

# Copy all project files except unwanted ones
rsync -av --exclude=".git" \
          --exclude="deploy.sh" \
          --exclude=".DS_Store" \
          ./ "$TMP_DIR/"

echo "Copying files to remote server..."

scp -r "$TMP_DIR/"* "$REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH"

echo "Cleaning up..."
rm -rf "$TMP_DIR"

echo "Deployment completed successfully!"
