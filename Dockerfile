# Stage 1: Build frontend
FROM node:22-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --force
COPY . .
CMD ["npm", "run", "dev"]

EXPOSE 3000
