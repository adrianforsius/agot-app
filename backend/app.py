# A very simple Flask Hello World app for you to get started with...
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello test!'

@app.route('/api')
def hello_api():
    return 'APi'

if __name__ == '__main__':
  app.run()
