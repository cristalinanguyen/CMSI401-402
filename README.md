# CMSI401-402
## Scheduling System Senior Project
### Annie Flora, Amelia Jay, Liam Namba, Cristalina Nguyen, Sophia Prochnow, Christian Santander


## Overview
LAC+USC psychiatry residency program has 24 residents, 12 first year interns and 12 second year interns. They rotate through the four wards within the facility under Chief Resident Dr. Kelly Jones.

Dr. Jones is responsible for the creation of a call schedule every six months to assign each resident to a two month block that they will work. Within that two month block, there must be at least one first year intern and one second year intern assigned to each ward. Every week within the two months, each resident will work a different type of shift: day float, night float, long call, or short call. Of the two residents in the same ward, they cannot work the same shift during the same week. In the past, Dr. Jones has spent nearly 100 hours a year creating this schedule by hand in order to satisfy all the constraints of the facility.

We created an application which runs an algorithm tailored to Dr. Jones' specific constraints and outputs a 6 month schedule separated into 2 month blocks.

The purpose of this system is to accelerate the scheduling process while ensuring that every constraint that Dr. Jones desires is satisfied. 

## USchedule Application

### How to run on your own machine

1. `git clone` this repository

2. `cd` into the repo and install Flask

```
pip install mysql-connector-python flask flask_cors
```

3. `cd` into the `server` folder on the command line and run `python3 FlaskDao.py`

4. Check that the Flask backend is working

The link below should return JSON data:

http://127.0.0.1:5000/residents

5. In another terminal window, `cd` into the `webclient` folder and run `npm start`

> **Note:** If you run into issues while running `npm start` make sure you have all of the dependencies installed

> These dependencies include `react-scripts`, `jquery`, `date-fns`, `material-ui`, and `material-table`. To install these run `npm install react-scripts`, `npm install jquery`, etc. Some other dependecies may also need to be installed - if you need help please reach out to one of us!

### Firebase

The frontend of our web app is currently being hosted using Firebase at https://lac-usc-uschedule.web.app/. We have yet to get the server hosted due to the cost.

### Using Our App

Our app consists of four pages: the Home Page, Residents Page, Create Schedule Page, and the Schedule Page.

**Home Page**

![image](https://user-images.githubusercontent.com/31746937/81351240-bbd51280-9078-11ea-8a2a-24e1d317ba63.png)

You can access the Home Page by clicking the USchedule logo in the top left corner. You can access the three other pages by clicking the cards on the Home Page or the buttons on the header.

________________________________________________________


**Residents Page**

![image](https://user-images.githubusercontent.com/31746937/81351489-4e75b180-9079-11ea-95c0-f700d6e0125a.png)

The Residents Page is where all of the resident data can be viewed and edited. Our scheduling algorithm is tailored to Dr. Jones' constraints, which includes there being 24 residents in the program. 12 of these residents are first years and 12 are second years. It is important to remember, while using our web app, that the resident data is input correctly and that there are 12 first years and 12 second years to be scheduled.

________________________________________________________


**Create Schedule Page**

![image](https://user-images.githubusercontent.com/31746937/81351733-dc519c80-9079-11ea-9ff3-97619720cc09.png)

The Create Schedule Page is where you can create a new schedule. Again, this is tailored to Dr. Jones' scheduling needs. First, she chooses a start date for the next six month schedule. That date is stored in our database.

Next, she clicks `Create Block Schedule` which runs our algorithm and splits residents into three two-month long blocks. Each block contains eight residents: four first years and four second years. She can view and download the new block schedule from the Schedule Page. Dr. Jones will then send out the schedule to her residents, who will each respond with their preffered week off. She can input their week off in the Residents Page.

Once all of the weeks off have been submitted, she clicks `Create Full Schedule` which runs our full scheduling algorithm. This algorithm places residents in wards and shifts for each week of their block and satisfies all of the constraints that Dr. Jones requires.

________________________________________________________

**Schedule Page**

![image](https://user-images.githubusercontent.com/31746937/81740350-b3eae900-9451-11ea-8c74-497a3c4dc01e.png)

![image](https://user-images.githubusercontent.com/31746937/81740674-31165e00-9452-11ea-8555-1653b5e88f69.png)

The Schedule Page has a toggle bar at the top where you can choose to see either the block schedule of the full schedule. The full schedule is grouped by block but can also be grouped by year or another header if Dr. Jones chooses she wants to see the schedule that way. The start date of the six month schedule is also displayed at the top of the page.

Our algorithm gives second year residents priority with their week off which means that in some cases a first year might not get the week off they requested. If that is the case, a bullet point with `Week Off Not Granted` is displayed under the resident that did not get the week off they requested. In most cases, however, the bullet point under the resident's name will say `Week Off Granted`, because they were able to get the week off they requested.
