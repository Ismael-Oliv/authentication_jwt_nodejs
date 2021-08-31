FROM node

WORKDIR /usr/app

COPY package.json package.json

RUN npm install

EXPOSE 3001

COPY . .

CMD ["npm", "run", "dev"]