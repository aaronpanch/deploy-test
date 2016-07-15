FROM node:latest

RUN mkdir -p /usr/src
WORKDIR /usr/src

COPY package.json /usr/src
RUN npm install

COPY . /usr/src

EXPOSE 4000

CMD [ "npm", "start" ]
