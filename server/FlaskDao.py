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

dao = Dao('stproch','fuzzwuzhere', 'keckmysql-rds.lmucs.com', 'stproch')

@app.route("/residents", methods = ['PUT', 'GET', 'DELETE', 'POST'])
def residents():
  if request.method == 'PUT':
    dao.updateYear(request.form['resYear'], request.form['resId'])
    dao.updateOff(request.form['resWeekOff'], request.form['resId'])
    dao.updateFirstName(request.form['resFirst'], request.form['resId'])
    dao.updateLastName(request.form['resLast'], request.form['resId'])
  elif request.method == 'POST':
    dao.insertEmpl(request.form['resFirst'], request.form['resLast'], request.form['resYear'])
  elif request.method == 'DELETE':
    dao.deleteEmpl(request.form['resId'])

  result = dao.select_all('employees')

  result = jsonify(result)
  return result

@app.route("/current-schedule")
def schedule():
  output = dao.getDate()

  result = jsonify(output)
  return result

@app.route('/create-new-schedule', methods = ['POST', 'GET'])
def create_schedule():
  result = "success"
  if request.form['schedType'] == 'block':
    block_scheduler.main()
    dao.deleteAllAttrInt('employees', 'off', 0)
    dao.deleteAllAttrStr('employees', 'ward')
    dao.deleteAllAttrStr('employees', 'shift')
    dao.deleteAllAttrInt('employees', 'off_bool', -1)
    result = "block schedule was successfully run"
  elif request.form['schedType'] == 'full':
    ok_to_run = True
    resDate = dao.select_all('employees')
    for r in resDate:
      if r['off'] < 1:
        ok_to_run = False
    if ok_to_run:
      ward_scheduler.main()
      result = "full schedule was successfully run"
    else:
      result = "full schedule was not run - all weeks off must be submitted"
  elif request.form['date'] != 'none':
    month = request.form['date'][4:7]
    monthNum = setMonth(month)
    date = request.form['date'][11:15] + '-' + monthNum + '-' + request.form['date'][8:10]
    dao.updateDate(date)
    result = "date was successfully stored"
  print(result)
  return jsonify(result)

def setMonth(month):
  monthNum = ''
  months = {'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04', 'May': '05', 'Jun': '06', 'Jul': '07', 'Aug': '08', 'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12'}
  if month in months:
    monthNum = months[month]
  return monthNum


if __name__ == "__main__":
	app.run()
