import mysql.connector
from mysql.connector import errorcode
# from __future__ import absolute_import, print_function

class Dao:

  def __init__(self, user, password, host, database):
    self.user = user
    self.password = password
    self.host = host
    self.database = database


  def connect(self):
    try:
      db = mysql.connector.connect(user='stproch', password='fuzzwuzhere',
                                  host='keckmysql-rds.lmucs.com',
                                  database='stproch')
    except mysql.connector.Error as err:
      if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
        print("Something is wrong with your user name or password")
      elif err.errno == errorcode.ER_BAD_DB_ERROR:
        print("Database does not exist")
      else:
        print(err)

    else:
      return db

  def select_all(self, table):
    db = self.connect()
    mycursor = db.cursor()
    table_list = []
    res_dict = {}

    query = ("SELECT * FROM ")
    query += table
    mycursor.execute(query)
    result = mycursor.fetchall()

    for r in result:
      res_dict['id'] = r[0]
      res_dict['first_name'] = r[1]
      res_dict['last_name'] = r[2]
      res_dict['year'] = r[3]
      res_dict['off'] = r[4]
      res_dict['block'] = r[5]
      res_dict['ward'] = r[6]
      res_dict['shift'] = r[7]
      res_dict['shift_w1'] = r[7][2:5]
      res_dict['shift_w2'] = r[7][9:12]
      res_dict['shift_w3'] = r[7][16:19]
      res_dict['shift_w4'] = r[7][23:26]
      res_dict['shift_w5'] = r[7][30:33]
      res_dict['shift_w6'] = r[7][37:40]
      res_dict['shift_w7'] = r[7][44:47]
      res_dict['shift_w8'] = r[7][51:54]
      res_dict['name'] = r[1] + ' ' + r[2]
      table_list.append(res_dict.copy())
    return table_list

  def select_one(self, item, table, conditions):
    db = self.connect()
    mycursor = db.cursor()
    query = ( "SELECT %s FROM %s WHERE %s" % (item, table, conditions) )
    mycursor.execute(query)
    result = mycursor.fetchall()
    return result

  def update(self, table, columns, conditions):
    db = self.connect()
    mycursor = db.cursor()
    query = ( "UPDATE %s SET %s WHERE %s " % (table, columns, conditions) )
    mycursor.execute(query)
    db.commit()

    print(mycursor.rowcount, "record(s) affected")

  def insert(self, table, columns, values):
    db = self.connect()
    mycursor = db.cursor()
    query = ( "INSERT INTO %s ( %s ) VALUES(%s) " % (table, columns, values) )
    mycursor.execute(query)
    db.commit()
    print(mycursor.rowcount, "record(s) affected")

  def delete(self, table, condition):
    db = self.connect()
    mycursor = db.cursor()
    query = ( "DELETE FROM %s WHERE %s " % (table, condition) )
    mycursor.execute(query)
    db.commit()
    print(mycursor.rowcount, "record(s) affected")



def main():
  dao = Dao('schedule','fuzzwuzhere', 'schedule.ctsb7iugp6xk.us-east-1.rds.amazonaws.com', 'schedule')
  # output = dao.select_all('employees')
  # select_o = dao.select_one('first_name, last_name', 'employees', 'employee_id = 1')
  # dao.update('employees', 'year = 1', 'employee_id = 7')
  # dao.insert('employees', 'first_name, last_name, year', '\'Andrew\', \'Forney\', 1')
  # dao.delete('employees', 'first_name = \'Andrew\' ')
  # print (output)
  # print (select_o)



if __name__ == "__main__":
    main()
