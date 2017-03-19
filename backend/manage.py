from flask_script import Manager
from src.flask_app import app

print('Initializing Manager...')
manager = Manager(app)

@manager.command
def runserver():
    """Run the flask app in development mode"""
    app.run('0.0.0.0', 8081)

if __name__ == "__main__":
    manager.run()
