FROM nginx:alpine

RUN apk --update add --virtual build-dependencies build-base
RUN apk add bash
RUN apk add openrc
RUN apk add vim
RUN apk del build-dependencies

COPY ./nginx.conf /etc/nginx/nginx.conf
