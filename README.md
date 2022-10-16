# Packers & Movers

Complete end-to-end Packers & Movers Web Application.

**SCREENSHOTS** 

**main page**

**client login**

**client signup**

**client welcome page***

**contractors list**

**quotation Request**

**fetching details via Emailjs Api**

## Getting Started

**Packers & Movers** is single page **Reactjs** web Application where you can find many rated individual contractors.

- Contractors can register in this website by submiting the form
- User can find many individual contractors
- can choose the contactors according to their rating,pricing,etc
- can submit the quotation for their entire shifting
- can track the status
- can pay online
- can give feedback

## Additional Features

1. Fully mobile responsive
2. **MongoDB** is used to store the details of client and contractors
3. **Emailjs** API is used to fetch quotation and feedback.
3. **Expressjs** is used to control the server side of this entire web Application

### Prerequisites

You need to have a basic knowledge of 
-HTML, CSS and JavaScript(ES6)
-Reactjs
-Nodejs (Expressjs)
-MongoDB (mongoose)
-Restful Api's
under your belt. Additionally, you need to have [Git](https://gist.github.com/derhuerst/1b15ff4652a867391f03), [Node](https://nodejs.org/en/), [VScode](https://code.visualstudio.com/download) text editor installed on your computer.

### Downloading and Running this Project Locally
1. clone the repository using below command
```
git clone https://github.com/thejatinchawla/Packers-And-Movers-MERN
```
2. Type this command in the terminal (frontend) to install all the dependencies required
```
npm install
```
3. this command will open the automatically open react application in your default web browser
```
npm run start
```
4. open another terminal for start the server(backend)
```
cd server
```
5. to install all the dependencies required
```
npm install
```
6. this will start the backendserver and will connect to database
```
npm run start
```

## Editing

Rename the MongoDB url
```
from "process.env.MONGO_URL" to your local MongoDB url eg. "mongodb://localhost:27017/test"
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details