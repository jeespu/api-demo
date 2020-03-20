## API DEMO
A simple API demo made with the MERN stack (MongoDB, Express, React, Node). 
A React client makes a request to the Express Node server. The server also queries MongoDB to get "on-demand" data for the client.
### Installation
 1. Clone the repository
 2. Within your cloned repository folder, using a terminal, navigate to the root folder containing the "client" and the "server" folder
 3. In the terminal, type 'npm install' to install [concurrently](https://www.npmjs.com/package/concurrently). This nice little tool allows you to start the client and the server with one command within one terminal.
 4. Type '**npm run stack-install**' to install the required dependencies for both the client and the server
 5. After the installations are done, type '**npm run dev**' to launch both the server and the client. If everything went smoothly, the client will pop open in your browser.

It is of course also possible to install and run everything independently. Navigate to both the client and the server folder and run 'npm install' in both of them, then launch the server with "**node App.js**" and the client with "**npm start**".