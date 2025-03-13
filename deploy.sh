#!/bin/bash

# Build the project
npm run build

# Create a temporary deployment directory
mkdir -p deploy_temp

# Copy only the dist contents to deployment directory
cp -r dist/* deploy_temp/

# Copy .htaccess to deployment directory
cp dist/.htaccess deploy_temp/

# Create a deployment archive
zip -r deployment.zip deploy_temp/*

# Cleanup
rm -rf deploy_temp

echo "Deployment package created as deployment.zip"
echo "Instructions:"
echo "1. Log in to Hostinger"
echo "2. Go to File Manager"
echo "3. Navigate to public_html"
echo "4. Delete all existing files in public_html"
echo "5. Upload and extract deployment.zip contents directly in public_html" 