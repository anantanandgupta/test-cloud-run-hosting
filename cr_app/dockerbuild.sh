#!/usr/bin/env bash

set -ex

# Build the Project
npm run build
# SET THE FOLLOWING VARIABLES
# gcloud project name
PROJECT=test-cloud-run-hosting
# image name
IMAGE=cr_app
# version
version=`cat VERSION`

docker build -t $IMAGE:latest .

docker tag $IMAGE:latest gcr.io/$PROJECT/$IMAGE:$version

docker push gcr.io/$PROJECT/$IMAGE:$version