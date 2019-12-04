# CMSI401
## Scheduling System Senior Project
### Annie Flora, Amelia Jay, Liam Namba, Cristalina Nguyen, Sophia Prochnow, Christian Santander


## Overview
LAC+USC psychiatry residency program has 24 residents, 12 first year interns and  12 second year interns. They rotate through the four wards within the facility under Chief Resident Dr. Kelly Jones.

Dr. Jones is responsible for the creation of a call schedule every six months to assign each resident to a two month block that they will work. Within that two month block, there must be at least one first year intern and one second year intern assigned to each ward. Every week within the two months, each resident will work a different type of shift: day float, night float, long call, or short call. Of the two residents in the same ward, they cannot work the same shift during the same week. (They get one week off and night float always has to follow long call but maybe not necessary to add? lmk)

In the past, Dr. Jones has spent nearly 100 hours a year creating this schedule by hand in order to satisfy all the constraints of the facility. The purpose of this system is to accelerate this process while ensuring that every constraint that Dr. Jones desires is satisfied.
USchedule’s graphical user interface is designed using Node.js and React.

The scheduling algorithm and database access object are written in Python and connect to the front end using Flask.

Our MySQL database is hosted through Amazon Web Services Relational Database Services.


![The Landing Page](https://github.com/cristalinanguyen/CMSI401/blob/master/docs/Misc%20files/Screen%20Shot%202019-12-04%20at%203.03.04%20PM.jpeg)
