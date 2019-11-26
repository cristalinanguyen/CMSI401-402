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
      db = mysql.connector.connect(user='schedule', password='fuzzwuzhere',
                                  host='schedule.ctsb7iugp6xk.us-east-1.rds.amazonaws.com',
                                  database='schedule')
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
      res_dict['ID'] = r[0]
      res_dict['name'] = r[1]
      res_dict['last'] = r[2]
      res_dict['year'] = r[3]
      table_list.append(res_dict.copy())
    return table_list


  def select_one(self, item, table, conditions):
    db = self.connect()
    mycursor = db.cursor()
    # query = "SELECT %s FROM %s WHERE %s"
    # val = (item, table, conditions)
    query = "SELECT "
    query += item
    query += " FROM "
    query += table
    query += " WHERE "
    query += conditions
    # print (query)
    mycursor.execute(query)
    result = mycursor.fetchall()

    return result

  def update(self, table, columns, conditions):
    db = self.connect()
    mycursor = db.cursor()
    query = "UPDATE "
    query += table
    query += " SET "
    query += columns
    query += " WHERE "
    query += conditions
    # print ('QUERY: ', query)
    mycursor.execute(query)
    db.commit()

    print(mycursor.rowcount, "record(s) affected")

  def insert(self, table, columns, values):
    db = self.connect()
    mycursor = db.cursor()
    query = "INSERT INTO "
    query += table 
    query += "("
    query += columns
    query += ") VALUES("
    query += values
    query += ")"

    mycursor.execute(query)
    db.commit()

    print(mycursor.rowcount, "record(s) affected")

  def delete(self, table, condition):
    db = self.connect()
    mycursor = db.cursor()

    query = "DELETE FROM "
    query += table
    query += " WHERE "
    query += condition

    mycursor.execute(query)
    db.commit()
    print(mycursor.rowcount, "record(s) affected")




def main():
  dao = Dao('schedule','fuzzwuzhere', 'schedule.ctsb7iugp6xk.us-east-1.rds.amazonaws.com', 'schedule')
  output = dao.select_all('employees')
  select_o = dao.select_one('employee_first_name, employee_last_name', 'employees', 'employee_id = 1')
  dao.update('employees', 'year = 2', 'employee_id = 5')
  dao.insert('employees', 'employee_first_name, employee_last_name, year, office_id', '\'BJ\', \'Johnson\', 2, 1')
  dao.delete('employees', 'employee_id = 13')
  print (output)
  print (select_o)


if __name__ == "__main__":
    main()