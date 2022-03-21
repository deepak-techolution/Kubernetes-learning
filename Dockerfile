FROM alpine:latest

# Install nodejs & npm
RUN apk add --no-cache nodejs npm

# Create Work directory in image
WORKDIR /app

# Copy sourc code to directory

COPY . /app

# Install npm packages
RUN npm install

# Expose our server port to external port
EXPOSE 1998

ENTRYPOINT ["node"]

CMD ["index.js"]
