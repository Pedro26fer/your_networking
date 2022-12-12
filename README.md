# your_networking
A platform that, when registering, it is possible to register your contacts and connections


# instructions
The front end of the application was developed in the client folder and is made in react and javascript. It is necessary to have on your machine all the requirements and libraries on your machine, such as styled-components. The back end of the application was made in the same directory in the server folder and it was developed with typescript. To run the entire application with its functionalities and the connection between front and back-end, it is necessary to run both. Open the terminal integrated with the server and client folders and run the command yarn dev and npm start respectively. The back end is connected to a database called you_networking in Postgree, so you need to create it in Postgree and before running the server make the necessary migrations.
 To do so, create the database in PostgreeSQL with the proper name and run the commands in the terminal integrated into the server folder:
 
yarn typeorm migration:generate src/migrations/initalMigration -d src/data-source.ts

yarn typeorm migration:run -d src/data-source.ts


