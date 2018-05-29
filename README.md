This project was created using create-react-app.

It is being hosted by GitHub pages at https://codingandcaring.github.io/calendar-front/.

To open project in local environment:
  1. Clone the repository.
  2. CD into repository directory.
  3.  Type "yarn" to install all dependencies.
  4.  "Yarn Start" to begin running project in local environment.
  
 This project makes fetch requests to localhost:5000.  Its sister repository, which includes back-end server and database is located at https://github.com/codingandcaring/calendar-back.
 
Functionality:
 
 On Master Branch (created in 6 hour time frame): 
  Calendar uses current date to create month view.  Components are connected with the redux store for storing state.  Calendar makes fetch request to server to obtain list of events and stores those events in the redux store.  Calendar displays first event in the queue.  
  
  On Updates Branch:
    User is able to select the "+" button to add an event; that event takes in data including date, start and end time, and description, and sends it to the server.  Calendar displays all events on the calendar on the date of the event and the events stack if they occur on the same date. 
    
    Icebox:  User will be able to double click on a particular day to input an event or delete an event.  User will bring up pop up winder when clicking on event.  Users will be able to switch between months by clicking on the Month name. 
    

Challenges:  
  
  1.  I had difficulty getting the events to display on the calendar.  Initially, I attempted to use nested .map() to iterate through both the days of the month and the events list and when equal, display the event on the calendar.  I ended up with several errors, including events not being stackable or multiple displays of the same date.  I realized that I needed to reformat my days of the month to include an object, rather than a single value.  I went from [1, 2, 3, 4,....] to [{day:1, event:[] }].  In this way, I am able to only map through the event list and add it to the event list for that particular day.  
  
 2.  It was difficult to create a working front-end application and back-end in a short time-frame.  In hindsight, I likely could have saved time and hard-coded json data to use for display purposes without having a backend-server or database. React/redux has amazing store/prop capabilities and I likely should have utilized them more in order to meet the 6 hour requirements.  However, I now have the luxury of having a working server and can continue improving functionality on my calendar.
 
 3.  I was tempted to use a tutorial to build this application, as I have not previously built a calendar application and have had limited opportunity to use the Date() functionality of JavaScript.  However, I chose to build this myself (apart from utilizing create-react-app).  I definitely intend to continue working on it, as it has been challenging and I have learned a lot. 
 
 
