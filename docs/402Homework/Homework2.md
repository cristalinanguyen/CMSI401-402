# Homework 2
## Stephens Chapter 5, 6

### #5.1: What's the difference between a component-based architecture and a service-oriented architecture?

In component-based software engineering (CBSE), the system is regarded as a collection of loosely coupled components that provide services for each other. The component-based architecture decouples the pieces of code much as a multi-tier architecture does, but the pieces are all contained within the same executable program, so they communicate directly instead of across a network. A service-oriented architecture (SOA) is similar to a component‐based architecture except the pieces are implemented as services, which are self‐contained programs that run on their own and provide some kind of service for their clients.
Sometimes, services are implemented as web services, which are simply programs that satisfy certain standards, so they are easy to invoke over the Internet.

### #5.2: Suppose you're building a phone application that lets you play tic-tac-toe against a simple computer opponent. It will display high scores stored on the phone, not in an external database. Which architectures would be most appropriate and why?

In this situation, a rule-based architecture where a collection of rules decide what to do next would be most appropriate. This would work because tic-tac-toe is a simple game, and the display of the high scores would be easy for the system and collection of rules to handle.

### #5.4: Repeat question 3 [after thinking about it; it repeats question 2 for a chess game] assuming the chess program lets two users play against each other over an Internet connection.

A client/server architecture would be implemented in this case scenario to hold the game over an internet connection.

### #5.6: What kind of database structure and maintenance should the `ClassyDraw` application use?

`ClassyDraw` does not need a database to store information because it stores it's drawings in files.

### #5.8: Draw a state machine diagram to let a program read floating point numbers in scientific notation as in +37 or -12.3e+17 (which means -12.3 x 1017). Allow both E and e for the exponent symbol. [Jeez, is this like Dr. Dorin's DFAs, or what???]

<img width="837" alt="Screen Shot 2020-02-16 at 2 38 04 PM" src="https://user-images.githubusercontent.com/23061329/74614116-0a05f580-50ca-11ea-9e84-496e8e03b29a.png">

### #6.1: Consider the `ClassyDraw` classes `Line`, `Rectangle`, `Ellipse`, `Star`, and `Text`. What properties do these classes all share? What properties do they not share? Are there any properties shared by some classes and not others? Where should the shared and nonshared properties be implemented?

They all share properties such as background color, foreground color, and thickness, but they are also able to define positions and size (width, height). Text has some properties that the other classes do not need/have. Shared properties could be implemented in a super class and the non-shared properties should be implemented in each class themselves.

### #6.2: Draw an inheritance diagram showing the properties you identified for Exercise 1. (Create parent classes as needed, and don't forget the `Drawable` class at the top.)

<img width="551" alt="Screen Shot 2020-02-17 at 4 15 11 PM" src="https://user-images.githubusercontent.com/23061329/74693424-adc1d500-51a0-11ea-909d-c2836f617110.png">

### #6.3: The list below gives the properties of several business-oriented classes. Assuming a `Supplier` is someone who supplies products for your business, draw an inheritance diagram showing the relationships among these classes. (Hint: Add extra classes if necessary.)

* Customer — Name, Phone, Address, BillingAddress, CustomerID
* Hourly — Name, Phone, Address, EmployeeID, HourlyRate
* Manager — Name, Phone, Address, EmployeeID, Office, Salary, Boss, Employees
* Salaried — Name, Phone, Address, EmployeeID, Office, Salary, Boss
* Supplier — Name, Phone, Address, Products, SupplierID
* VicePresident — Name, Phone, Address, EmployeeID, Office, Salary, Managers

<img width="480" alt="Screen Shot 2020-02-17 at 4 27 21 PM" src="https://user-images.githubusercontent.com/23061329/74693834-61779480-51a2-11ea-848c-51a3a46e9a34.png">

### #6.6: Suppose your company has many managerial types such as department manager, project manager, and division manager. You also have multiple levels of vice president, some of whom report to other manager types. How could you combine the `Salaried`, `Manager`, and `VicePresident` types you used in Exercise 3? Draw the new inheritance hierarchy.

You could add the additional properties to the salaried class, giving it office, salary, boss, and employees. This would now be directly under the employee class and the HasSalary would be removed. 

<img width="447" alt="Screen Shot 2020-02-17 at 4 40 36 PM" src="https://user-images.githubusercontent.com/23061329/74694231-3a21c700-51a4-11ea-801d-5a53b905adf5.png">
