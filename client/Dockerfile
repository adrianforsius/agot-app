FROM node:alpine

RUN adduser -D app \
  && mkdir -p /client

COPY package.json tsconfig.json tslint.json .angular-cli.json protractor.conf.js /client/
COPY src /client/src/

WORKDIR /client

RUN apk --update add --virtual build-dependencies \
  && npm install \
  && npm install -g @angular/cli \
  && apk del build-dependencies \
  && chown -R app:app /client


USER app

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]
