import React from 'react';
import './App.css';

//Components
import Navbar from './components/Navbar/Navbar';
import AboutMe from './components/AboutMe/AboutMe';
import SectionHeader from './components/SectionHeader/SectionHeader';
import ProjectCard from './components/ProjectCard/ProjectCard';
import Footer from './components/Footer';
import ContactMe from './components/ContactMe/ContactMe';

//Images
import hydrohomies from './assets/sign_in.png';
import employee from './assets/lastnames.png';
import workout from './assets/dashboard.png';
import workday from './assets/workday.png';
import readme from './assets/readme.png';
import drurylane from './assets/drurylane.png';
import mongomovies from './assets/mongomovies.png';


function App() {
  return (
    <div className="App">
        <Navbar />
      <header className="App-header">
        <SectionHeader title="About Me" nav="sect-about"/>
        <AboutMe />
        <SectionHeader title="Projects" nav="sect-proj" />
        <ProjectCard 
          projectName="Group Project: React Application" 
          src={mongomovies}
          projectTitle="MongoMovies" 
          desc="I worked with fellow bootcamp students on a react application for users to see trending movies, and create a presonalized movie collection. We utilized a MongoDB database, React.js, Node.js, Express.js, and several APIs to create the functionality. The application is deployed on Heroku."
          deployed="https://mongomovies.herokuapp.com/"
          btn="Deployed Page"
          github="https://github.com/arensalmela/MongoMovies"
          />
        <br></br>
        <ProjectCard 
          projectName="Group Project: Full Stack Application" 
          src={hydrohomies}
          projectTitle="Hydrohomies" 
          desc="I worked with fellow bootcamp students on an application for users to rate and review their favorite drinks. We utilized a MySQL database, Node.js, Express.js, and several APIs to create the functionality. The application is deployed on Heroku."
          deployed="https://hydro-homies.herokuapp.com/index.html"
          btn="Deployed Page"
          github="https://github.com/shannonquinn91/hydrohomies"
          />
        <br></br>
        <ProjectCard 
        projectName="Employee Directory" 
        src={employee}
        projectTitle="React Employee Directory" 
        desc="Used react and a random user API to create a project which filters and sorts users." 
        deployed="https://shannonquinn91.github.io/React-Employee-Directory/"
        btn="Deployed Page"
        github="https://github.com/shannonquinn91/React-Employee-Directory"
        />
        <br></br>
        <ProjectCard 
        projectName="Workout Tracker" 
        src={workout} 
        projectTitle="React Workout Tracker" 
        desc="Used react and a random user API to create a project which filters and sorts users." 
        deployed="https://workout-tracker-sq.herokuapp.com/"
        btn="Deployed Page"
        github="https://github.com/shannonquinn91/React-Employee-Directory"
        />
        <br></br>
        <ProjectCard 
        projectName="Workday Scheduler" 
        src={workday} 
        projectTitle="Workday Scheduler" 
        desc="The workday scheduler allows a user to enter in meetings or events for their day. by utilizing local storage, the users information will be stored in the schedule until the local storage is cleared." 
        deployed="https://shannonquinn91.github.io/Work-Day-Scheduler/"
        btn="Deployed Page"
        github="https://github.com/shannonquinn91/Work-Day-Scheduler"
        />
        <br></br>
        <ProjectCard 
        projectName="Markdown Generator" 
        src={readme} 
        projectTitle="README Generator" 
        desc="I created a command line application which takes user input and creates a markdown file. The application uses Node.js and Inquirer to get the information from the user and inserts it into the proper sections of the markdown file." 
        deployed="https://drive.google.com/file/d/1hRwo792ncw6PGfS9M7yLJjtVZlD_pg4q/view"
        btn="Video Walkthrough"
        github="https://github.com/shannonquinn91/README-Generator"
        />
        <br></br>
        <ProjectCard 
        projectName="Group Project" 
        src={drurylane} 
        projectTitle="Drury Lane Sweets" 
        desc="I worked with a group of people on a ficticious bakery website with online ordering capabilities. We worked through many challenges with this project, including using GitHub as a group for the first time. One of our biggest successes was creating the online order page and the javascript to make it functional." 
        deployed="https://drive.google.com/file/d/1hRwo792ncw6PGfS9M7yLJjtVZlD_pg4q/view"
        btn="Deployed Page"
        github="https://github.com/shannonquinn91/Drury-Lane-Sweets"
        />
        <br></br>
        <SectionHeader title="Contact Me" nav="sect-contact"/>
        <ContactMe />
        <br></br>
        <Footer />
      </header>
    </div>
  );
}

export default App;
