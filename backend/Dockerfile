FROM gliderlabs/alpine:latest

RUN adduser -D app

# Base requirements
RUN apk --no-cache add --update \
    python \
    py-pip \
  && apk --update add --virtual build-dependencies gcc python-dev build-base \
  && apk del build-dependencies

RUN mkdir -p /server

# COPY Source for live updates
VOLUME /server/src
COPY src /server/src

# App requirements
COPY requirements.txt manage.py /server/
RUN pip install -r /server/requirements.txt

# Use proper app-user
RUN chown -R app:app /server
USER app

WORKDIR /server

EXPOSE 8081

CMD ["python", "manage.py", "runserver"]
