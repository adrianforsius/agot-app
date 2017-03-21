FROM python:3.5-onbuild

EXPOSE 8081

CMD ["gunicorn", "--config=gunicorn.py", "app:app"]
