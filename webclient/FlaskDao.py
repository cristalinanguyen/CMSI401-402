import mysql.connector
from mysql.connector import errorcode

from flask import Flask, jsonify, render_template, request, redirect, Response
import random, json
from flask_cors import CORS
from dao import Dao


app = Flask(__name__, template_folder="public")
CORS(app)
app.debug = True

@app.route("/")
def output():
  dao = Dao('schedule','fuzzwuzhere', 'schedule.ctsb7iugp6xk.us-east-1.rds.amazonaws.com', 'schedule')
  output = dao.select_all('employees')
  
  # return render_template('index.html', names = output)
  # for i in output:
  #   return i
  result = jsonify(output)
  print(f"OUTPUT BEFORE SDENDING BACK {result.content_type}")
  return result

if __name__ == "__main__":
	app.run()