FROM node:16

WORKDIR /app

COPY dist /app
COPY package.json /app

CMD ["npm", "start"]