FROM node:20

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

COPY .env .env

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]