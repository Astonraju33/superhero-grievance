**Introduction**
Welcome to the Superhero Grievance Submission Portal! This project is designed to allow users to submit their grievances to an imaginary superhero for resolution. The platform features a modern, interactive, and superhero-themed interface that makes the process engaging for users.

**Features**
Grievance Submission: Users can fill out a form to submit their grievances.
View Grievances: A dedicated page to view all submitted grievances stored in localStorage.
Superhero Theme: A visually appealing, superhero-themed UI with animations and loaders.
Interactive Loader: A loading animation is displayed when a grievance is being submitted.
**How It Works**
Grievance Submission:

Users fill in their name, email, subject, and description in a form on the Grievance Submission Page.
On form submission, the data is saved to the browser's localStorage along with the current date and status ("Pending").
Viewing Grievances:

Users can navigate to the View Grievances Page to see all grievances submitted so far.
Each grievance includes details like the user's name, email, subject, description, submission date, and status.
Responsive UI:

The website is fully responsive and works seamlessly on desktops, tablets, and mobile devices.
Frontend Implementation
The frontend is developed using React.js with the following structure:

**Pages**
*Home Page:*

Introduces the superhero and the purpose of the portal.
*About Page:*

Provides details about the superhero's mission and background.
*Grievance Submission Page:*

Features a form for submitting grievances.
Displays a loader during submission.
View Grievances Page:

Lists all grievances submitted by users, retrieved from localStorage.
