from __future__ import print_function
from employee import Employee
import json
import random
import mysql.connector
from mysql.connector import errorcode
from dao import Dao

def main():
    dao = Dao('schedule', 'fuzzwuzhere','schedule.ctsb7iugp6xk.us-east-1.rds.amazonaws.com', 'schedule')
   
    # pull first and second years
    db1_list = dao.select_one('employee_id, first_name, last_name, year', 'employees', 'year = 1')
    db2_list = dao.select_one('employee_id, first_name, last_name, year', 'employees', 'year = 2')
    # puts these into lists
    first_years = []
    second_years = []
    for t in db1_list:
        add = Employee({'id': t[0], 'first_name': t[1],'last_name': t[2], 'year': t[3]})
        first_years.append(add)
    for t in db2_list:
        add = Employee({'id': t[0], 'first_name': t[1],'last_name': t[2], 'year': t[3]})
        second_years.append(add)

    # grabs residents who were previously in block 3, and who cannot be in block 1
    not_firstyears_db =  dao.select_one('employee_id, first_name, last_name, year', 'employees', 'year = 1 AND block = 3')
    not_secondyears_db = dao.select_one('employee_id, first_name, last_name, year', 'employees', 'year = 2 AND block = 3')
    # put these into lists
    not_firstyears = []
    not_secondyears = []
    for t in not_secondyears_db:
        add = Employee({'id': t[0], 'first_name': t[1], 'last_name': t[2], 'year': t[3]})
        not_secondyears.append(add)
    for t in not_firstyears_db:
        add = Employee({'id': t[0], 'first_name': t[1], 'last_name': t[2], 'year': t[3]})
        not_firstyears.append(add)


    # # writing the blocks into the database, each individual resident gets assigned a block
    dao = Dao('schedule', 'fuzzwuzhere','schedule.ctsb7iugp6xk.us-east-1.rds.amazonaws.com', 'schedule')

    first_year_groups = random_put_into_blocks(first_years, 3, not_firstyears)
    second_year_groups = random_put_into_blocks(second_years, 3, not_secondyears)

    # code below edits first year objects to edit their block field
    block_num = 1
    for bl in first_year_groups: 
        for b in bl:
            for r in first_years:
                if b.id == r.id:
                    r.block = block_num
        block_num += 1
    block_num = 1
    for bl in second_year_groups:
        for b in bl:
            for r in second_years:
                if b.id == r.id:
                    r.block = block_num
        block_num += 1

    # test print
    # for i in first_years:
    #     print(i.first_name, i.block)
    # for i in second_years:
    #     print(i.first_name, i.block)

    # actually write to the database through dao
    for e in first_years:
        values_holder = 'block = ' + str(e.block) 
        vales_holder_2 = 'employee_id = ' + str(e.id)
        print("VH: ", values_holder)
        print('VH2: ', values_holder)
        dao.update('employees', values_holder, vales_holder_2)
    for e in second_years:
        values_holder = 'block = ' + str(e.block) 
        vales_holder_2 = 'employee_id = ' + str(e.id)
        print("VH: ", values_holder)
        print('VH2: ', values_holder)
        dao.update('employees', values_holder, vales_holder_2)


# a function to randomly assigns into groups
def random_put_into_blocks(resident_group, num_blocks, not_in_first):
    groupings = []
    # if not_in_first is empty, this is the first time she is running the code
    # just randomly assign all blocks
    if not not_in_first:
        new_group = resident_group
        number_people = len(resident_group)
        while number_people > 0 and num_blocks > 0:
            team = random.sample(new_group, int(number_people/num_blocks))
            groupings.append(team)
            for x in team:
                new_group.remove(x)
            number_people -= int(number_people/num_blocks)
            #print("TESTING: ", int(number_people/num_blocks))
            num_blocks -= 1
        return groupings

    # THIS code is for now, parameter is a string, and we must remove objects, will change later
    # so that the function can take in objects as not_in_first parameter instead of names 
    # firsts = []
    # for x in resident_group:
    #     if x.first_name in not_in_first:
    #         firsts.append(x)

    # remove the four residents that cant be in first block
    new_group = [r for r in resident_group if r not in not_in_first]
    test_group = resident_group
    for i in test_group:
        for j in not_in_first:
            if i.id == j.id:
                new_group.remove(i)



    # form 1st block ensuring that the first block does not have the 4 res in it
    t = random.sample(new_group, 4)
    groupings.append(t)

    # remove those 4 from the group
    for l in t:
        new_group.remove(l) 

    # add the 'not_in_first' residents back into sgroup
    for k in not_in_first:
        new_group.append(k)
    num_blocks -= 1

    # randomly group the rest of the residents
    number_people = len(new_group)
    while number_people > 0 and num_blocks > 0:
        team = random.sample(new_group, int(number_people/num_blocks))
        groupings.append(team)
        for x in team:
            new_group.remove(x)
        number_people -= int(number_people/num_blocks)
        #print("TESTING: ", int(number_people/num_blocks))
        num_blocks -= 1
    return groupings

if __name__ == "__main__":
    main()
