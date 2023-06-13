Phase2-Final-Project

Sam's Capacity Planner

Overview
Sam's Capacity Planner is a tool used by a warehouse manager to upload a roster of associates. The manager will have visibility to metrics such as total capacity, total headcount, average attendance, average cases per hour, and average uptime. Additionally, the manager will have the option to delete an employee who no longer is employed while updating the metrics real time.

Features
The page will load with a navigation bar, a search bar, a table displaying overall metrics, and cards displaying each employee with their individual metrics. The "New Employee" button will pull up an input form prompting the end user to input the name, uptime, cases per hour, attendance percentage, and the link to associate picture. The "About" button will give an overview of the website's purpose and its specific use cases.
HTML/CSS/JS files which access data from db.json file
Single page HTML
React App, 9 separate components, 3 client side routes, and a json-server for POST and DELETE requests
Associate cards will be loaded from a db.json file to the page via a fetch request
Adding a new associate card will update the db.json via POST. Deleting an associate card will remove card from the server via DELETE.
