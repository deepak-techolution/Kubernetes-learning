# Exercise 1.2

## How to run with docker
- Clone the repo
- Add `.env` file to root directory
- Add following details to your `.env` file
  `DB_HOST=<your_host_name>`
  `DB_USER=<your_username>`
  `DB_NAME=<your_databse_name>`
  `DB_PASSWORD=<your_databse_password>`
  `DB_PORT=<your_database_port>`
- Run this command:
  `docker build -t node-db:1.0.0 .`
- Verify if the image in build successfully with this command:
  `docker images`
  This should show your image name **node-db** in the list
- Run the docker image by executing the following command:
  `docker run -it -d -p 3000:3000 node-db:1.0.0`
- Your app should be running at [localhost:3000](http://localhost:3000/)
- Check all the users at [localhost:3000/users](http://localhost:3000/users)