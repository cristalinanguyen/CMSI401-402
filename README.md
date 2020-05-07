# CMSI401-402
## Scheduling System Senior Project
### Annie Flora, Amelia Jay, Liam Namba, Cristalina Nguyen, Sophia Prochnow, Christian Santander


## Overview
LAC+USC psychiatry residency program has 24 residents, 12 first year interns and  12 second year interns. They rotate through the four wards within the facility under Chief Resident Dr. Kelly Jones.

Dr. Jones is responsible for the creation of a call schedule every six months to assign each resident to a two month block that they will work. Within that two month block, there must be at least one first year intern and one second year intern assigned to each ward. Every week within the two months, each resident will work a different type of shift: day float, night float, long call, or short call. Of the two residents in the same ward, they cannot work the same shift during the same week. In the past, Dr. Jones has spent nearly 100 hours a year creating this schedule by hand in order to satisfy all the constraints of the facility.

We created an application which runs an algorithm tailored to Dr. Jones' specific constraints and outputs a 6 month schedule separated into 2 month blocks.

The purpose of this system is to accelerate the scheduling process while ensuring that every constraint that Dr. Jones desires is satisfied. 

## USchedule Application

### How to run on your own machine

1. `git clone` this repository

2. `cd` into the repo, then into the `webclient` folder and then the `src` folder on the command line and run `python3 FlaskDao.py`

```
pip install mysql-connector-python flask flask_cors
```
3. Check that the Flask backend works (this should return JSON data):

http://127.0.0.1:5000/residents

4. In another terminal window, `cd` into the `webclient` folder and run `npm start`

> **Note:** If you run into issues while running `npm start` make sure you have all of the dependencies installed

> These dependencies include `react-scripts`, `jquery`, `material-ui`, and `material-table`. To install these run `npm install react-scripts`, `npm install jquery`, etc. Some other dependecies may also need to be installed - if you need help please reach out to one of us!

### Firebase

The frontend of our web app is currently being hosted using Firebase at `https://lac-usc-uschedule.web.app/`. We have yet to get the server hosted due to the cost.

### Using Our App

Our app consists of four pages: the Home Page, Residents Page, Create Schedule Page, and the Current Schedule Page.

**Home Page**

![image](https://user-images.githubusercontent.com/31746937/81351240-bbd51280-9078-11ea-8a2a-24e1d317ba63.png)

You can access the Home Page by clicking the USchedule logo in the top left corner. You can access the three other pages by clicking the cards on the Home Page or the buttons on the header.

**Residents Page**



The Residents Page is where all of the resident data can be viewed and edited.

The Create Schedule Page is where Dr. Jones can create a new schedule. She first chooses a start date, then clicks `Create Block Schedule` to create the block schedule and clicks `Create Full Schedule` to create the full 6 month schedule (after having given every resident a week off).

The Schedule Page displays both the block schedule and the full schedule.
