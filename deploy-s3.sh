#!/bin/bash

# AWS S3 Deployment Script for Angular SPA
# Make sure you have AWS CLI configured with your credentials

# Configuration
BUCKET_NAME="your-bucket-name"
DISTRIBUTION_ID="your-cloudfront-distribution-id"  # Optional, for CloudFront invalidation
BUILD_DIR="dist/synoptiq-globle"

echo "Building Angular application for production..."
npm run build:prod

if [ $? -ne 0 ]; then
    echo "Build failed. Exiting."
    exit 1
fi

echo "Uploading to S3 bucket: $BUCKET_NAME"
aws s3 sync $BUILD_DIR s3://$BUCKET_NAME --delete --cache-control max-age=31536000,public

# Set cache control for HTML files to prevent caching
aws s3 cp $BUILD_DIR/index.html s3://$BUCKET_NAME/index.html --cache-control max-age=0,no-cache,no-store,must-revalidate --content-type text/html

# If using CloudFront, invalidate the cache
if [ ! -z "$DISTRIBUTION_ID" ]; then
    echo "Invalidating CloudFront distribution: $DISTRIBUTION_ID"
    aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"
fi

echo "Deployment completed successfully!"
echo "Your app should be available at: http://$BUCKET_NAME.s3-website-region.amazonaws.com"