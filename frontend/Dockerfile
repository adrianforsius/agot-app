FROM node:alpine

RUN adduser -D app

RUN mkdir -p /frontend

COPY package.json tsconfig.json tslint.json .angular-cli.json protractor.conf.js /frontend/
COPY src /frontend/src/

WORKDIR /frontend

RUN apk --update add --virtual build-dependencies \
  && npm install \
  && npm install -g @angular/cli \
  && apk del build-dependencies \
  && chown -R app:app /frontend

USER app

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]
