FROM node:20.12.2-alpine

WORKDIR /backend-container

EXPOSE 3080

COPY . .

RUN npm install

CMD ["npm", "run", "dev"]