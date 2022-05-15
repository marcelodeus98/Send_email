const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
       ciphers:'SSLv3'
    },
    // Configuration my acess in email - outlook
    auth: {
        user: 'projetosteste@outlook.com',
        pass: '8poseidon8'
    }
});

// Function for send email
transporter.sendMail({
    from: "Marcelo Deus <projetosteste@outlook.com>", 
    to: "projetosdeestudo98@outlook.com",
    subject: "Email de teste, enviado por um script NodeJS",
    text: "Teste validado, somente sucesso!!!"
}).then(message => {
    console.log(message);
}).catch(err => {
    console.log(err);
})