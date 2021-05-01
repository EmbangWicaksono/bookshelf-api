# Introduction
## ----------------
This project is a REST API of CRUD Book data for online course ["Belajar Membuat Aplikasi Back-End untuk Pemula"](https://www.dicoding.com/academies/261) by Dicoding Indonesia as final task for the online course.
this APi does not use database to store all the data but use local memory instead. It uses an array of objects named `books` in ``./src/books.js`` to contain all the book datas.

# Dependencies
## ----------------
### Development 
* Nodemon : a tool that helps application by automatically restarting the node application for every file changes detected in the directory
* ESLint  : it helps to make code structures as certain styles
### Dependencies
* nanoid : this module helps to create unique ID for every book data file
* hapi   : as framework for develop web server in NodeJS application
> detail information can be found in package.json

# Installation
## ----------------
1. Make sure you have installed NodeJS in your device
2. go to project directory via terminal (WINDOWS: `cd {directory path}\{bookshelf-api project}`)
3. install project dependencies by command `npm run install` in terminal
4. run the project by command `npm run start`
5. the program will be started in `http://localhost:3000`

to send a request to the server, you can use application such as [POSTMAN](https://www.postman.com/) or CuRL <br/>
Matur Suwun 🙏