from __future__ import print_function
from ortools.sat.python import cp_model
from employee import Employee
from inputobject import Input_Object
import json

# this should eventually take in placements as well?
def scheduleBlocks(input_obj):
    employees = input_obj.employees
    blocks = input_obj.blocks

    num_emp_per_block = input_obj.num_emp_per_block

    placements = {}

#  this assigns blocks by iterating through employees in order
#  we could do it randomly instead
    for b in blocks:
        for n in range(num_emp_per_block*(b-1), num_emp_per_block*(b-1) + 4):
            placements[employees[n]] = b

    return placements

def scheduleWards(employees, input1, input2):
    first_years = []
    second_years = []
    yr1_wards = input1.locations
    yr2_wards = input2.locations 

    # separate first and second years
    for e in employees:
        if e.year == 1:
            first_years.append(e)
        elif e.year == 2:
            second_years.append(e)
    
    placements = []

    # place the first years into wards
    for e in range(len(first_years)):
        placements.append((first_years[e], yr1_wards[e % len(yr1_wards)]))

    # place the second years into wards with first years w different off requests
    for w in range(len(yr2_wards)):
        i = 0
        if yr2_wards[w] == 'F':
            placements.append((second_years[i], yr2_wards[w]))
        else:
            while placements[w][0].off == second_years[i].off:
                if i < len(second_years) - 1:
                    i+=1
                else:
                    print('need to implement backtracking')
                    break
            placements.append((second_years[i], yr2_wards[w]))
            temp = []
            for s in second_years:
                if s != second_years[i]:
                    temp.append(s)
            second_years = temp

    return placements

def scheduleShifts(ward_placements, block_length):
    # ideally make this a cirular linked list
    shift_types = ['LC', 'NF', 'SC', 'DF', 'LC', 'SC', 'DF', 'LC', 'NF', 'SC']
    # shift_types = ['OFF', 'LC', 'NF', 'SC', 'DF', 'LC', 'SC', 'DF']

    # custom_shifts gives the shift_types list with 'OFF' week in it for each emp 
    custom_shifts = {}
    for p in ward_placements:
        shifts = []
        if p[0].year == 1:
            off_index = p[0].off - 1
        elif p[0].year == 2:
            off_index = p[0].off + 1
        temp1 = shift_types[:off_index]
        temp2 = shift_types[off_index:]
        for s in temp1: shifts.append(s)
        shifts.append('OFF')
        for s in temp2: shifts.append(s)
        custom_shifts[p] = shifts

    # places the employees into their shift according to their off request
    shift_placements = []
    for week in range(block_length):
        for c in custom_shifts:
            if c[0].year == 1:
                shift_placements.append((week + 1, c[0], c[1], custom_shifts[c][week]))
            elif c[0].year == 2:
                shift_placements.append((week + 1, c[0], c[1], custom_shifts[c][week + 2]))

    return shift_placements    


def main(first_years, second_years):
    yr1_blocks = scheduleBlocks(first_years)
    yr2_blocks = scheduleBlocks(second_years)

    # can also get this from the input object
    blocks = [1, 2, 3]
    # each block is 8 weeks long
    block_length = 8

    for b in blocks:
        print('\nBLOCK', b)
        emp = []
        for e in yr1_blocks:
            if yr1_blocks[e] == b:
                emp.append(e)
        for e in yr2_blocks:
            if yr2_blocks[e] == b:
                emp.append(e)
        ward_placements = scheduleWards(emp, first_years, second_years)
        shift_placements = scheduleShifts(ward_placements, block_length)
        for week in range(block_length):
            print('\nWeek', week + 1)
            for s in shift_placements:
                if s[0] == week + 1:
                    print(json.dumps({'block': b, 'week': week + 1,
                    'first_name': s[1].first_name, 'last_name': s[1].last_name,
                    'ward': s[2], 'shift': s[3]}))

first_years = Input_Object({'employees': [
    Employee({'id': 1, 'first_name': 'Amelia', 'last_name': 'Jay', 'year': 1, 'off': 1}),
    Employee({'id': 2, 'first_name': 'Liam', 'last_name': 'Namba', 'year': 1, 'off': 2}),
    Employee({'id': 3, 'first_name': 'Lina', 'last_name': 'Nguyen', 'year': 1, 'off': 3}),
    Employee({'id': 4, 'first_name': 'Chris', 'last_name': 'Santander', 'year': 1, 'off': 4}),
    Employee({'id': 5, 'first_name': 'Dondi', 'last_name': 'Dionisio', 'year': 1, 'off': 5}),
    Employee({'id': 6, 'first_name': 'BJ', 'last_name': 'Johnson', 'year': 1, 'off': 6}),
    Employee({'id': 7, 'first_name': 'Tatum', 'last_name': 'Behrens','year': 1, 'off': 7}),
    Employee({'id': 8, 'first_name': 'Lydia', 'last_name': 'He', 'year': 1, 'off': 8}),
    Employee({'id': 9, 'first_name': 'Marco', 'last_name': 'Casadont', 'year': 1, 'off': 1}),
    Employee({'id': 10, 'first_name': 'Brandon', 'last_name': 'Crockett', 'year': 1, 'off': 2}),
    Employee({'id': 11, 'first_name': 'Claire', 'last_name': 'Michael', 'year': 1, 'off': 3}),
    Employee({'id': 12, 'first_name': 'Kendal', 'last_name': 'Narvick', 'year': 1, 'off': 4})],
    'blocks': [1, 2, 3],
    'num_emp_per_block': 4,
    'locations': ['B', 'C', 'D']})

second_years = Input_Object({'employees': [
    Employee({'id': 13, 'first_name': 'Sophia', 'last_name': 'Prochnow', 'year': 2, 'off': 1}),
    Employee({'id': 14, 'first_name': 'Annie', 'last_name': 'Flora', 'year': 2, 'off': 2}),
    Employee({'id': 15, 'first_name': 'Andrew', 'last_name': 'Forney', 'year': 2, 'off': 1}),
    Employee({'id': 16, 'first_name': 'Ray', 'last_name': 'Toal', 'year': 2, 'off': 5}),
    Employee({'id': 17, 'first_name': 'Lindsey', 'last_name': 'Peterson', 'year': 2, 'off': 8}),
    Employee({'id': 18, 'first_name': 'MC', 'last_name': 'Bishop', 'year': 2, 'off': 1}),
    Employee({'id': 19, 'first_name': 'Taryn', 'last_name': 'Ungaro', 'year': 2, 'off': 4}),
    Employee({'id': 20, 'first_name': 'Paige', 'last_name': 'Matthews', 'year': 2, 'off': 7}),
    Employee({'id': 21, 'first_name': 'Sam', 'last_name': 'Robinson', 'year': 2, 'off': 8}),
    Employee({'id': 22, 'first_name': 'Brock', 'last_name': 'Squires', 'year': 2, 'off': 5}),
    Employee({'id': 23, 'first_name': 'Rachel', 'last_name': 'Farnan', 'year': 2, 'off': 1}),
    Employee({'id': 24, 'first_name': 'Caroline', 'last_name': 'Rogers', 'year': 2, 'off': 2})],
    'blocks': [1, 2, 3],
    'num_emp_per_block': 4,
    'locations': ['B', 'C', 'D', 'F']})

if __name__ == "__main__":
    main(first_years, second_years)