FROM node:14-alpine

RUN mkdir -p /usr/src/app/node_modules

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["node", "server.js"]

