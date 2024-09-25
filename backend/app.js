// Set up environment variables
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

// Import all necessary modules
const express = require('express');
const path = require('path')
const morgan = require('morgan');
const httpErrors = require('http-errors');
const flash = require('express-flash');
const mysql = require('mysql2/promise');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mySQLStore = require('express-mysql-session')(session);
const helmet = require('helmet');


// Create an instance of the express app
const app = express();

// Deal with parsing cookies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("notsosecret"));

// Set up MySQL to store users' session data
const options = {
    host: 'localhost',
    port: 3306,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
}
const sessionStore = new mySQLStore(options);
app.use(session({
    secret: 'notsosecret',
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        maxAge: 1000 * 60 * 60, // 1000 miliseconds * 60 seconds * 60 minutes
        httpOnly: true,
        sameSite: 'strict'
    } 
}));

// Setup for EJS templating
app.set("views", path.join(__dirname, "public/ejs"));
app.set("view engine", "ejs");

// Setup the path for static files (images, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Set up automatic logging on the console for development
app.use(morgan('dev'));

// Set up browser alerts to the user
app.use(flash());

// Use more headers for extra security
app.use(helmet());

// All routes
app.get("/", (req, res) => {
    res.send('Hello friend');
})

// Catch-all route when no viable route is found
app.use((req, res, next) => {
    next(httpErrors(404));
});
app.use((err, req, res, next) => {
    res.status(err.status || 500);
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});