FROM node:14.15.3

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm install pm2 -g

COPY . .

CMD ["pm2-runtime", "proccess_PM2.json"]
