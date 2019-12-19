FROM node:8.14.0-alpine
WORKDIR /usr/src/cr_app
COPY package.json package*.json ./
RUN npm i  --only=production
COPY . .
CMD [ "npm", "start" ]