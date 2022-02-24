FROM node:16-alpine

ARG APP_NAME="pemex-web-app"

WORKDIR /$APP_NAME

COPY .nuxt ./nuxt
COPY package.json package.json
COPY .env .env

RUN npm install -g node-prune && npm install --production && node-prune
