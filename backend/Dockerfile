FROM node:20

WORKDIR /usr/src/app

COPY package* .

RUN npm install 

COPY . .

# COPY .env .env

EXPOSE 3000

CMD [ "npm", "run","dev" ]