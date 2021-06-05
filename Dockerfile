FROM node:14-alpine3.12

LABEL description="Node alpine image with chrome and firefox headless browsers"

RUN apk update \
  && apk add chromium firefox \
  && rm -rf /var/cache/apk/* 

WORKDIR /usr/src/app
COPY package.json .

RUN yarn 

USER node