FROM node:current-alpine
WORKDIR /app 

COPY package.json /app/
RUN npm install

COPY . .
CMD ["npm", "start"]