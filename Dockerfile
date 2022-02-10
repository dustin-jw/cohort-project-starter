FROM node:16

WORKDIR /var/www/html

COPY . /var/www/html

RUN npm ci
RUN npm run build

CMD ["npm", "run", "serve"]
