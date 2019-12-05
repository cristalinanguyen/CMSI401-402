from __future__ import print_function
from ortools.sat.python import cp_model
from employee import Employee
from inputobject import Input_Object
import json

def main(input_obj):
    employees = input_obj.employees
    blocks = input_obj.blocks

    num_emp_per_block = input_obj.num_emp_per_block

    placements = {}

#  this assigns blocks by iterating through employees in order
#  we could do it randomly --> haven't gotten to that yet
    for b in blocks:
        for n in range(num_emp_per_block*(b-1), num_emp_per_block*(b-1) + 4):
            placements[employees[n]] = b

# this prints the who is working in each block
    for b in blocks:
        print('BLOCK', b)
        for p in placements:
            if placements[p] == b:
                # print('\t', p.first_name)
                print(json.dumps({'name': p.first_name, 'block': placements[p]}))

first_years = Input_Object({'employees': [
    Employee({'id': 1, 'first_name': 'Amelia', 'last_name': 'Jay', 'year': 1}),
    Employee({'id': 4, 'first_name': 'Liam', 'last_name': 'Namba', 'year': 1}),
    Employee({'id': 5, 'first_name': 'Lina', 'last_name': 'Nguyen', 'year': 1}),
    Employee({'id': 6, 'first_name': 'Chris', 'last_name': 'Santander', 'year': 1}),
    Employee({'id': 9, 'first_name': 'Dondi', 'last_name': 'Dionisio', 'year': 1}),
    Employee({'id': 10, 'first_name': 'BJ', 'last_name': 'Johnson', 'year': 1}),
    Employee({'id': 12, 'first_name': 'Tatum', 'last_name': 'Behrens','year': 1}),
    Employee({'id': 16, 'first_name': 'Lydia', 'last_name': 'He', 'year': 1}),
    Employee({'id': 18, 'first_name': 'Marco', 'last_name': 'Casadont', 'year': 1}),
    Employee({'id': 19, 'first_name': 'Brandon', 'last_name': 'Crockett', 'year': 1}),
    Employee({'id': 21, 'first_name': 'Claire', 'last_name': 'Michael', 'year': 1}),
    Employee({'id': 23, 'first_name': 'Kendal', 'last_name': 'Narvick', 'year': 1})],
    'blocks': [1, 2, 3],
    'num_emp_per_block': 4})

second_years = Input_Object({'employees': [
    Employee({'id': 2, 'first_name': 'Sophia', 'last_name': 'Prochnow', 'year': 2}),
    Employee({'id': 3, 'first_name': 'Annie', 'last_name': 'Flora', 'year': 2}),
    Employee({'id': 7, 'first_name': 'Andrew', 'last_name': 'Forney', 'year': 2}),
    Employee({'id': 8, 'first_name': 'Ray', 'last_name': 'Toal', 'year': 2}),
    Employee({'id': 11, 'first_name': 'Lindsey', 'last_name': 'Peterson', 'year': 2}),
    Employee({'id': 13, 'first_name': 'MC', 'last_name': 'Bishop', 'year': 2}),
    Employee({'id': 14, 'first_name': 'Taryn', 'last_name': 'Ungaro', 'year': 2}),
    Employee({'id': 15, 'first_name': 'Paige', 'last_name': 'Matthews', 'year': 2}),
    Employee({'id': 17, 'first_name': 'Sam', 'last_name': 'Robinson', 'year': 2}),
    Employee({'id': 20, 'first_name': 'Brock', 'last_name': 'Squires', 'year': 2}),
    Employee({'id': 22, 'first_name': 'Rachel', 'last_name': 'Farnan', 'year': 2}),
    Employee({'id': 24, 'first_name': 'Caroline', 'last_name': 'Rogers', 'year': 2})],
    'blocks': [1, 2, 3],
    'num_emp_per_block': 4})

if __name__ == "__main__":
    print('\nFirst Years:')
    main(first_years)
    print('\nSecond Years:')
    main(second_years) 