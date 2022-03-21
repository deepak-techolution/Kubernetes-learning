# Exercise 1
This is the first exercise in **Kubernete** learning pathway.

### How to run:
- Clone the repository
- Install docker in your machine
- Run the following command to build image
  `docker build -t hello-world-app:1.0.0  .`
- Use the following command to verify if the image is built
  `docker image`
  You should see the image name i.e *hello-world-app* under *Repository* column and version(*1.0.0*) under *TAG* column. If the list shows above mentioned details, that means docker image is built successfully
- Run the following command to run the docker image
  `docker run -it -d -p 3000:1998 hello-world-app:1.0.0`
- Open [http://localhost:3000](http://localhost:300) in your browser to see the magic. 