import mysql.connector
from mysql.connector import errorcode

from flask import Flask, jsonify, render_template, request, redirect, Response
import random, json
from flask_cors import CORS
from dao import Dao
import ward_scheduler
import block_scheduler


app = Flask(__name__, template_folder="public")
CORS(app)
app.debug = True

# @app.route('/')
# def main():
#     ward_scheduler.main()
#     result = "The algorithm was successfully run hehe"
#     return result

dao = Dao('stproch','fuzzwuzhere', 'keckmysql-rds.lmucs.com', 'stproch')

@app.route("/residents", methods = ['PUT', 'GET', 'DELETE', 'POST'])
def residents():
  if request.method == 'PUT':
    dao.updateYear(request.form['resYear'], request.form['resId'])
    dao.updateOff(request.form['resWeekOff'], request.form['resId'])
    dao.updateFirstName(request.form['resFirst'], request.form['resId'])
    dao.updateLastName(request.form['resLast'], request.form['resId'])
  # elif request.method == 'POST':
  #   dao.insertEmpl(request.form['resInfo'])
  elif request.method == 'DELETE':
    dao.deleteEmpl(request.form['resId'])

  result = dao.select_all('employees')

  result = jsonify(result)
  return result

@app.route("/current-schedule")
def schedule():
  output = dao.select_all('employees')

  result = jsonify(output)
  return result

@app.route('/create-new-schedule', methods = ['POST', 'GET'])
def create_schedule():
  if request.form['schedType'] == 'block':
    block_scheduler.main()
    dao.deleteAllAttrInt('employees', 'off', 0)
    dao.deleteAllAttrStr('employees', 'ward')
    dao.deleteAllAttrStr('employees', 'shift')
    dao.deleteAllAttrInt('employees', 'off_bool', -1)
  else:
    ward_scheduler.main()
  result = "The algorithm was successfully run hehe"
  return jsonify(result)

# @app.route('/create-new-schedule', methods = ['POST'])
# def create_blocks():
#   block_scheduler.main()
#   result = "The block scheduler was run successfully :)"
#   return jsonify(result)

if __name__ == "__main__":
	app.run()
