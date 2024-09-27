# webPortal
A basic web portal to illustrate some fundamentals and features of full-stack web development.

**How to build this project:**
1. Fork this repository on your local machine.
2. Set up the MySQL database:\
   Have MySQL Server 8.X and MySQL Workbench 8.X installed.\
   On MySQL Workbench, navigate to the "Server" tab and select "Data Import".\
   Choose the option for "Import from Self-Contained File".\
   Do not worry about setting the Default Target Schema, as the .sql file contains command to create a new schema.\
   Click "Start Import" and now you will have a complete copy of the database used for this project.
   
3. Install all dependencies on the backend:\
   Using a command line interface, go into the "backend" directory of this downloaded repository.\
   Type "npm install" and all the necessary modules should be installed.

3. Install all dependencies on the frontend.\
   Using a command line interface, go into the "webportalclient" directory of this downloaded repository.\
   Type "npm install" and all the necessary modules should be installed.

5. Set up the .env files:\
   **NOTE: This app assumes you have ports 3000 and 3001 open! The NodeJS server runs on port 3000, while you must run the React app on port 3001!**\
   In the "backend" directory, you need to create a .env file using a text editor to set the environment variables for your server. It should contain:\
    DB_NAME="webPortal"\
    DB_HOST="localhost"\
    DB_USER="yourMySQLusername"\
    DB_PASSWORD="yourMySQLpassword"\
    PORT=3000\
   In the "webportalclient" directory, you need to create a .env file using a text editor and set the port number to something other than React's default of 3000:\
    PORT=3001

Now you should be ready to run the project!

---------------------------------------------------

**How to run this project:**
1. While inside the "backend" directory, using a command line interface (such as GitBash), enter the command "npm run start" to start the server.
2. Navigate to the "frontend" directory and then into the "webportalclient" folder.
3. Now, using a command line interface in the same directory, type in the command "npm run" to compile and start the React application, which will open in your default browser.
