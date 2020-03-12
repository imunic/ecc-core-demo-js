FROM node:12.16.1-alpine

WORKDIR /opt/app

COPY package.json ./
COPY package-lock.json  ./

# install dependencies
RUN npm install --production

# copy application sources
COPY ./src ./src

# expose application port
EXPOSE 8080

CMD [ "npm", "start" ]
