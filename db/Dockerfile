FROM mongo:latest

# Create the MongoDB data directory
RUN mkdir -p /data/db

# Explicitly expose standard port (even tho it is in parent image)
EXPOSE 27017

# Set usr/bin/mongod as the dockerized entry-point application
ENTRYPOINT ["/usr/bin/mongod"]
