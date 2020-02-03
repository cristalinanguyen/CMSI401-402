# Homework 1
## Stephens
### #1.1: What are the basic tasks that all software engineering projects must handle?
All software engineering projects must handle requirements, design, development, testing, deployment, maintenance, and evaluation.

### #1.2: Give a one sentence description of each of the tasks you listed in Exercise 1.
Requirements gathering is figuring out the customers wants and needs, then turning those into documents that outline what is going to be built. Design includes both high-level and low-level. High-level decides what platforms, data, and interfaces are going to be used, as well as information about the architecture of the project from a high-level. Low-level designs break all those points into more specific pieces, with each one detailing how it is going to work. Development is the programming and implementation of the low-level designs in code. Testing code ensures that as many bugs as possible are found and resolved to make sure the code works properly and as intended. Deployment is the release of the system that you just built. Almost every time, bugs are missed or problems arise, which is where maintenance comes in and allows you to fix your code after it is deployed. Lastly is wrap-up, which is the post-mortem evaluation of the project that reflects on what went right and what went wrong.

### #2.4: Like Microsoft Word, Google Docs provides some simple change tracking tools. Go to http://www.google.com/docs/about/ to learn more and sign up [if you do not have an account already]. Then create a document, save it, close it, reopen it, and make changes to it as you did in Exercise 1.
Completed

### #2.5: What does JBGE stand for and what does it mean?
JBGE stands for "Just Barely Good Enough", and it is usually in reference to code documentation and comments. It is the idea that if you provide too much of them, you end up wasting a lot of time when changes to the code happen later on.

### Table 3.2-3.4
![Figure 3.2-3.4](https://user-images.githubusercontent.com/21330088/73501169-c301cb80-4379-11ea-8d70-64743f6d394b.png)

### #3.2: Use critical path methods to find the total expected time from the project's start for each task's completion. Find the critical path. What are the tasks on the critical path? What is the total expected duration of the project in working days?
The critial path is 32 days long and consists of H -> I -> D -> E -> M -> Q
![Problem3.2](https://user-images.githubusercontent.com/21330088/73501166-c2693500-4379-11ea-8795-5174af2a9a73.jpeg)

### #3.4: Build a Gantt chart for the network you drew in Exercise 3. [Yes, I know, you weren't assigned that one — however, when you do Exercise 2 you should have enough information for this one.] Start on Wednesday, January 1, 2020, and don't work on weekends or the following holidays: New Year's Day (1/1), Martin Luther King Day	(1/20), President's Day	(2/17),

### #3.6: In addition to losing time from vacation and sick leave, projects can suffer from problems that just strike out of nowhere. Sort of a bad version of deus ex machina. For example, senior management could decide to switch your target platform from Windows desktop PSs to the latest smartwatch technology. Or a strike in the Far East could delay the shipment of your new servers. Or one of your developers might move to Iceland. How can you handle these sorts of completely unpredictable problems?
You can handle lost time by expanding each task’s time estimate by some amount. For example, adding 5 percent to each task’s time allows for 2.6 weeks per year for vacation and sick leave. Another approach is to add specific tasks to the project to represent lost time. You can also avoid some problems by carefully planning for approvals, order lead times, and setup. Risk management is also a huge part of avoiding slip ups. 

### #3.8: What are the two biggest mistakes you can make while tracking tasks?
The biggest mistake you can make is to ignore the problem and hope you can make up the time later. The second biggest mistake is to pile extra developers on the task and assume they can reduce the time needed to finish it.

### #4.1: List five characteristics of good requirements.
Five characteristics of good requirements are clear, unambiguous, consistent, prioritized, and verifiable.

### #4.3: Suppose you want to build a program called TimeShifter to upload and download files at scheduled times while you're on vacation. List the audience-oriented categories for each requirement in the list below. Are there requirements in each category? [If not, state why not…].

a. Allow users to monitor uploads/downloads while away from the office. – User/functional Requirements 

b. Let the user specify website log-in parameters such as an Internet address, a port, a username, and a password. – User/ functional requirements 

c. Let the user specify upload/download parameters such a number of retries if there's a problem. – User/functional requirements 

d. Let the user select an Internet location, a local file, and a time to perform the upload/download. – User/functional requirements 

e. Let the user schedule uploads/downloads at any time. – User/functional requirements 

f. Allow uploads/downloads to run at any time. – Functional requirements 

g. Make uploads/downloads transfer at least 8 Mbps. – Functional requirements 

h. Run uploads/downloads sequentially. Two cannot run at the same time. – Nonfunctional requirements 

i. If an upload/download is scheduled for a time when another is in progress, it waits until the other one finishes. – Nonfunctional requirements 

j. Perform schedule uploads/downloads. – nonfunctional requirements 

k. Keep a log of all attempted uploads/downloads and whether the succeeded. – functional requirements 

l. Let the user empty the log. – User/functional Requirements 

m. Display reports of upload/download attempts. – functional requirements 

n. Let the user view the log reports on a remote device such as a phone. – User/functional requirements 

o. Send an e-mail to an administrator if an upload/download fails more than its maximum retry number of times. – functional requirements 

p. Send a text message to an administrator if an upload/download fails more than its maximum retry number of times. – functional requirements 

There are no business requirements 


### Figure 4.1
![Figure4.1](https://user-images.githubusercontent.com/21330088/73501168-c2693500-4379-11ea-825c-65a2566ad4de.jpg)

### #4.9: Figure 4-1 shows the design for a simple hangman game that will run on smartphones. When you click the New Bame button, the program picks a random mystery word from a large list and starts a new game. Then if you click a letter, either the letter is filled in where it appears in the mystery word, or a new piece of Mr. Bones's skeleton appears. In either case, the letter you clicked is grayed out so that you don't pick it again. If you guess all the letters in the mystery word, the game displays a message that says, "Contratulations, you won!" If you build Mr. Bones's complete skeleton, a message says, "Sorry, you lost." Brainstorm this application and see if you can think of ways you might change it. Use the MOSCOW method to prioritize your changes.

-	It must display all letters in the alphabet 
-	It must display how long the word is 
-	It must allow for users to guess any letter in the alphabet 
-	It must display something to show if your guess is correct 
-	It must not allow users to guess a letter that they have already guessed 

-	It should display a skeleton 
-	It should be colorful 
-	It should be visually appealing 
-	It should be interactive 
-	It should be easily learnable 

-	It could have sound 
-	It could have a better way of showing if a guess was correct or not – x’s on the wrong letters 
-	It could have more color – red and green for right and wrong 
-	It could have a larger skeleton image 
-	It could have a hint feature 
-	It could be a 2-player game where player 1 thinks of the word and player 2 will guess 


-	It won’t be too complex 

