FROM node:14

WORKDIR /usr/app/

COPY package.json package.json

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]