// import express from 'express';
// import nodemailer from 'nodemailer';

// const app = express();
// const port = 5173;

// const myemail = process.env.SENDER_EMAIL; 
// const mypassword = process.env.APPLICATION_PASSWORD;
// const recipient_email = "devaganeshvar@gmail.com"; 

// function sendEmail() {
//     return new Promise((resolve, reject) => {
//         var transporter = nodemailer.createTransport({
//             service: "gmail",
//             auth: {
//                 user: myemail,
//                 pass: mypassword,
//             },
//         });

//         const mail_configs = {
//             from: myemail,
//             to: recipient_email,
//             subject: "Testing Email",
//             text: "Just checking if this email will be sent",
//         };

//         transporter.sendMail(mail_configs, function (error, info) {
//             if (error) {
//                 console.log(error);
//                 return reject({ message: 'An error has occurred' });
//             }
//             return resolve({ message: "Email sent successfully" });
//         });
//     });
// }

// app.get("/", (req, res) => {
//     sendEmail()
//         .then((response) => res.send(response.message))
//         .catch((error) => res.status(500).send(error.message));
// });

// app.listen(port, () => {
//     console.log(`Server is listening at http://localhost:${port}`);
// });
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();

// Get the directory path of the current module
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static('Server'));

const PORT = process.env.PORT || 5000;

app.get('/',(req, res)=>{
    res.sendFile(__dirname + '/Contact.jsx')
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})
