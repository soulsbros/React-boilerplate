# React-boilerplate
A template for modern web applications

By default, the frontend runs on port 3000 and the backend on 4000. 
A Docker-compose file is included to bring up both services; 
as it is, the images are built locally instead of fetching them from registry.

A GitHub action config is included to build and push the images for both front- and backend to [Docker Hub](https://hub.docker.com/).

Checklist before usage:
- change all instances of `react-boilerplate` to your actual app name
and `A template for modern web applications` to the description
- add the actual favicon (suggestion: use [this website](https://realfavicongenerator.net/))
- check and adjust dependencies
- if needed, add and set up CORS for server
- check Eslint and Prettier configs

Additionally, if you want to push to Docker Hub:
- create the corresponding Docker Hub images
- add the `DOCKERHUB_USERNAME` and `DOCKERHUB_PASSWORD` secrets to the repo 
**before the first commit** (otherwise the pipeline will fail)
