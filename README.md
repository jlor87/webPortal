# webPortal
Basic web portal to illustrate the fundamentals of full-stack web development

How to build this project:
1. Set up MySQL database
2. Install all dependencies on the backend

How to run this project:
1. While inside the "backend" directory, using a command line interface (such as GitBash), enter the command "npm run start" to start the server.
2. Navigate to the "frontend" directory and then into the "webportalclient" folder.
3. Since both the server and React app want to use the default port of 3000, this will create a conflict. You therefore must create a .env file in the webportalclient directory, type in "PORT=3001" (or any other port), into that file.
4. Now, using a command line interface in the same directory, type in the command "npm run" to start the React application, which will open in your default browser.
