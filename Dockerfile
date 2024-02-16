ARG VERSION: latest
FROM node:${VERSION} 
WORKDIR /
COPY . . 
RUN ["npm", "run", "dev"]