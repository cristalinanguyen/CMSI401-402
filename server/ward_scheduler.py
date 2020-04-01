from __future__ import print_function
from employee import Employee
from inputobject import Input_Object
from circularLL import CreateList
import json
import random
import mysql.connector
from mysql.connector import errorcode
from dao import Dao

class Schedule:

    def __init__ (self, ward_list, sy_list, fy_list):
        self.ward_list = ward_list
        self.sy_list = sy_list
        self.fy_list = fy_list


    def place_sy(self, sy_list, ward_list):
        x = 0
        print ('SECOND YEARS')
        for s in sy_list:
            if x >= len(ward_list):
              x = random.randrange(0, 3, 1)
            s.ward = ward_list[x]
            print ( ("Name: %s  |  Ward: %s  |  Off: %s  " % (s.first_name, s.ward, s.off) ).center(40,' ') )
            # print (s.ward)
            x = x + 1
        sy_list[len(sy_list) - 1].ward = 'B'
        print(sy_list[len(sy_list) - 1].ward) 

    def make_poss_list(self, ward_list, sy_list, fy_list):
        for f in fy_list:
            for s in sy_list:
                if f.off != s.off:
                    f.poss_list.add(s.ward)
            # print ('FIRST')
            # print ('Name: %s  |  Poss_list: %s' % (f.first_name, f.poss_list) )

    def remove_from_all_sets(self, fy_list, element):
        for f in fy_list:
            f.poss_list.discard(element)


    def place_fy(self, ward_list, sy_list, unplaced_fy):
        # new_list = []
        new_set = set()
        ward_list = ['B', 'C', 'D']

        for f in unplaced_fy:
            if len(f.poss_list) == 1:
                ward = f.poss_list.pop()
                ward_list.remove(ward)
                f.ward = ward
                new_set.add(f)
                # unplaced_fy.remove(f)
                for f in unplaced_fy:
                    f.poss_list.discard(ward)
            if len(f.poss_list) > 1:
                # print ('LEN > 1: ', f.first_name)
                ward = f.poss_list.pop()
                ward_list.remove(ward)
                f.ward = ward
                new_set.add(f)
                # unplaced_fy.remove(f)
                for f in unplaced_fy:
                    f.poss_list.discard(ward)
        for n in new_set:
            if n in unplaced_fy:
                unplaced_fy.remove(n)

        #REMAKE POSS LIST (try and use func above)
        for f in unplaced_fy:
            for s in sy_list:
                if f.off != s.off:
                    f.poss_list.add(s.ward)
            # print ('NEW UNPLACED: ', f.first_name, f.poss_list)
            # print ('EMPTY WARDS: ', ward_list)

        # IF ONE RES AND ONE WARD LEFT - AUTO PLACE AND CHECK WEEK OFF
        if len(unplaced_fy) == 1 and len(ward_list) == 1:
            res = unplaced_fy[0]
            ward = ward_list[0]
            ward_list.remove(ward)
            f.ward = ward
            if ward not in res.poss_list:
                f.off = 9
            new_set.add(res)
            unplaced_fy.remove(set)

       # IF MORE THAN ONE RES LEFT AND MORE THAN ONE WARD LEFT
        if len(unplaced_fy) > 1 and len(ward_list) > 1:
            ward = ward_list[0]
            for u in unplaced_fy:
                if ward in u.poss_list:
                    u.ward = ward
                    new_set.add(u)
                    unplaced_fy.remove(f)
                    ward_list.remove(ward)

        # IF ONE RES LEFT AND ALL WARDS COVERED
        if len(unplaced_fy) == 1 and len(ward_list) == 0:
            res = unplaced_fy[0]
            for s in new_set:
                if res.off != s.off and s.ward in res.poss_list:
                    res.ward = s.ward
                else:
                    res.ward = 'B'
                    res.off = -1
            new_set.add(res)
            unplaced_fy.remove(res)

        for y in unplaced_fy:
            if len(ward_list) >= 1:
                ward = ward_list[0]
                y.ward = ward
                ward_list.remove(ward)
                y.off = -1
                new_set.add(y)
            else:
                print ('Y: ', y.first_name)
                y.ward = 'B'
                y.off = -1
                new_set.add(y)

        for n in new_set:
            if n in unplaced_fy:
                unplaced_fy.remove(n)

        final_list = list(new_set)

        #FIND NEW OFF WEEK FOR -1 OFF
        for x in final_list:
            for s in sy_list:
                if (x.ward == s.ward and x.off == -1):
                    if (s.off == 8):
                        x.off = (s.off - 1)
                    else:
                        x.off = s.off + 1
                    
        print ('FIRST YEARS')
        for x in final_list:
            print ( ("Name: %s  |  Ward: %s  |  Off: %s  " % (x.first_name, x.ward, x.off) ).center(40,' ') )

        for y in unplaced_fy:
            print ('STILL UNPLACED: ', y.first_name)
        return final_list

    def shiftScheduler(self, first_years, second_years):
        shift_list_1 = CreateList()
        shift_list_1.add('SC ')
        shift_list_1.add('LC ')
        shift_list_1.add('NF ')
        shift_list_1.add('DF ')
        shift_list_1.add('OFF')
        shift_list_1.add('SC ')
        shift_list_1.add('LC ')
        shift_list_1.add('DF ')

        shift_list_2 = CreateList()
        shift_list_2.add('OFF')
        shift_list_2.add('DF ')
        shift_list_2.add('SC ')
        shift_list_2.add('LC ')
        shift_list_2.add('NF ')
        shift_list_2.add('DF ')
        shift_list_2.add('SC ')
        shift_list_2.add('LC ')

        # print(shift_list_1.getList())
        # print(shift_list_2.getList())
        for s in second_years:
            for f in first_years:
                if s.ward is f.ward:
                    if (s.off - f.off == 4):
                        shift_list_1.rotate(f.off - 4)
                        f.shifts = shift_list_1.getList()
                        # shift_assignments[f] = shift_list_1.getList()
                        shift_list_1.reverse(f.off - 4)
                    else:
                        shift_list_2.rotate(f.off)
                        f.shifts = shift_list_2.getList()
                        # shift_assignments[f] = shift_list_2.getList()
                        shift_list_2.reverse(f.off)

                    shift_list_2.rotate(s.off)
                    s.shifts = shift_list_2.getList()
                    # shift_assignments[s] = shift_list_2.getList()
                    shift_list_2.reverse(s.off)

def main():
    block = 1
    ward_list = ['B', 'C', 'D']

    dao = Dao('schedule','fuzzwuzhere', 'schedule.ctsb7iugp6xk.us-east-1.rds.amazonaws.com', 'schedule')
    db2_list = dao.select_one('employee_id, first_name, last_name, year, block, off', 'employees', 'year = 2')
    db1_list = dao.select_one('employee_id, first_name, last_name, year, block, off', 'employees', 'year = 1')

    second_year_list = []
    first_year_list = []

    for t in db2_list:
        # print ('0: ', t[0])
        # print ('1: ', t[1])
        # print ('2: ', t[2])
        # print ('3: ', t[3])
        # print ('4: ', t[4])
        add = Employee({'id': t[0], 'first_name': t[1], 'last_name': t[2], 'year': t[3], 'block': t[4], 'off': t[5]})
        second_year_list.append(add)

    for t in db1_list:
        add = Employee({'id': t[0], 'first_name': t[1], 'last_name': t[2], 'year': t[3], 'block': t[4], 'off': t[5], 'poss_list': set()})
        first_year_list.append(add)

    # save the list of first years before it is emptied
    # first_years_saved = []
    # for f in first_year_list:
    #     first_years_saved.append(f)

    fy_block_1 = []
    fy_block_1_saved = []
    fy_block_2 = []
    fy_block_2_saved = []
    fy_block_3 = []
    fy_block_3_saved = []

    sy_block_1 = []
    sy_block_2 = []
    sy_block_3 = []

    all_employees = []


    for f in first_year_list:
        if (f.block == 1):
            fy_block_1.append(f)
            fy_block_1_saved.append(f)
            all_employees.append(f)
        if (f.block == 2):
            fy_block_2.append(f) 
            fy_block_2_saved.append(f)
            all_employees.append(f)       
        if (f.block == 3):
            fy_block_3.append(f)
            fy_block_3_saved.append(f)
            all_employees.append(f)

    for s in second_year_list:
        if (s.block == 1):
            sy_block_1.append(s)
            all_employees.append(s)
        if (s.block == 2):
            sy_block_2.append(s) 
            all_employees.append(s)       
        if (s.block == 3):
            sy_block_3.append(s)
            all_employees.append(s)


### BLOCK ONE ###
    # place employees in wards
    tw = Schedule(ward_list, sy_block_1, fy_block_1)
    tw.place_sy(sy_block_1, ward_list)
    tw.make_poss_list(ward_list, sy_block_1, fy_block_1)
    tw.place_fy(ward_list, sy_block_1, fy_block_1)

    # schedule the employees shifts
    tw.shiftScheduler(fy_block_1_saved, sy_block_1)

### BLOCK TWO ###
    # place employees in wards
    tw = Schedule(ward_list, sy_block_2, fy_block_2)
    tw.place_sy(sy_block_2, ward_list)
    tw.make_poss_list(ward_list, sy_block_2, fy_block_2)
    tw.place_fy(ward_list, sy_block_2, fy_block_2)

    # schedule the employees shifts
    tw.shiftScheduler(fy_block_2_saved, sy_block_2)

### BLOCK THREE ###
    # place employees in wards
    tw = Schedule(ward_list, sy_block_3, fy_block_3)
    tw.place_sy(sy_block_3, ward_list)
    tw.make_poss_list(ward_list, sy_block_3, fy_block_3)
    tw.place_fy(ward_list, sy_block_3, fy_block_3)

    # schedule the employees shifts
    tw.shiftScheduler(fy_block_3_saved, sy_block_3)

    # display shift data for each employee

    for e in all_employees:
        e.block = block
        # print(e.first_name, e. ward, e.shifts)

    for e in all_employees:
        print ('e: ', e.first_name)
        #UPDATING WARD
        values_holder = 'ward = \'' + e.ward + '\'' + ', off = ' + str(e.off)
        columns_holder = 'employee_id = ' + str(e.id)

        #UPDATING SHIFT
        shift_str = str(e.shifts)
        query_list = shift_str.replace('\'', '\\\'')
        query_list = ' shift = \'' + query_list + '\''

        #BOTH
        together = values_holder + ',' + query_list
        dao.update('employees', together, columns_holder)


if __name__ == "__main__":
    main()
