"""This script launches the uschedule REST API Server"""

from routes import app

if __name__ == "__main__":
    print('The uschedule API is running')
    app.run()
