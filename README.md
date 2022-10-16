# Packers & Movers

Complete end-to-end Packers & Movers Web Application.

**SCREENSHOTS** 

**main page**
![Landing_page](https://user-images.githubusercontent.com/106448198/196048807-a237a553-ea0d-4b2a-9c4e-381f7853b1c1.jpg)

**client login**
![Login](https://user-images.githubusercontent.com/106448198/196048827-17caf409-0140-4e5e-b7a3-76f08c84a761.jpg)

**client signup**
![Signup](https://user-images.githubusercontent.com/106448198/196048835-6e2fbddc-1c82-4e90-93b8-80a93cc94416.jpg)

**client welcome page***
![Client_welcome](https://user-images.githubusercontent.com/106448198/196048846-395ff588-8329-41e0-81e7-a9eb7aadcef4.jpg)

**contractors list**
![Companies](https://user-images.githubusercontent.com/106448198/196048858-396b5b89-b34d-4d27-97e6-e4c2412f3ebb.jpg)

**quotation Request**
![Materials details](https://user-images.githubusercontent.com/106448198/196048880-8ba73aa5-d7eb-4c5a-a665-4c48feea973c.jpg)

**fetching details via Emailjs Api**
<img src="https://github.com/thejatinchawla/Nodejs-backend_Auth/blob/master/public/css/emailjs.jpg?raw=true" width="50">
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
git clone https://github.com/thejatinchawla/Packers-And-Movers-MERN.git
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
