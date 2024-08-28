FROM node:20.12.2-alpine

WORKDIR /app-backend

EXPOSE 3071

COPY . .

RUN npm install

CMD ["npm", "run", "dev"]