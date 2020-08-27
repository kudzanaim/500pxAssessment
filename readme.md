## Description
In this project directory there are 2 applications:
- Backend NodeJS API serving images from the 500px API. [Link](https://five100-gcsusetqgq-uc.a.run.app ).
- Frontend built in react/redux. [Link](https://fivehundredreactapp-gcsusetqgq-uc.a.run.app/).

Both applications have been contanirized in docker, images to Google Cloud Build, then served from Google Cloud Run. Customer_Key was added to the Cloud Run as an enviroment variable
for security and is available to the server on container build.

Continuous Intergration trigger setup to sync, containerize and deploy new commits to GitHub Master. 

### `Technologies Used`
- React/Redux
- NodeJS
- Docker
- Google Cloud Build & Cloud Run
- CI / CD

### `NPM Packages`
- Lodash
- Axios
- Express
- Jquery
- Cors