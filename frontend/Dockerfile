# Stage 1
FROM node:14

WORKDIR /frontend
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
CMD npm start