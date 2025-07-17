MERN Socket.IO Chat App

This is a real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) and Socket.IO for live communication.

Features

- Real-time chat between users
- Express.js server with Socket.IO integration
- React front-end that connects via WebSockets
- Clean component structure

Technologies Used

- Frontend: React.js
- Backend: Node.js, Express.js, Socket.IO
- Communication: WebSockets via Socket.IO
- Styling: CSS
  Installation

1. Clone the repository:

   git clone https://github.com/IvyAdev/mern-socketio-chat.git
   cd mern-socketio-chat

2. Install server dependencies:

   cd server
   npm install

3. Install client dependencies:

   cd ../client
   npm install

4. Start the servers:

   In one terminal (for server):

   cd server
   node index.js

   In another terminal (for React frontend):

   cd client
   npm start

Usage

Open your browser at `http://localhost:3000`
Type your name and message to join the chat
See real-time messages from other users

Author

Ivy Anyango
