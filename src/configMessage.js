const nodemailer = require('nodemailer');
module.exports = (formulario) => {
 var transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  auth: {
    user: "jesusmoralescanete@gmail.com",
    pass: "xiluqdhrqbmupimz"
  }
 });
const mailOptions = {
 from: 'jesusmoralescanete@gmail.com',
 to: formulario.email,
 subject: '¡Gracias por contactar con nosotros!',
 html: `
  <div>
    <p style="font-size: 15px; color: black;">Estimado ${formulario.email.substring(0, formulario.email.indexOf("@"))},</p>
    <p style="font-size: 15px; color: black;">Gracias por su petición.<br> La resolveremos lo antes posible.</p>
    <p style="font-size: 15px; color: black;">Atentamente, el equipo de CineSix</p>

    <a href="http://localhost:4200/Home" style="text-decoration: none; font-size: 20px; color: white; background-color: #3469cb; padding: 10px; border-radius: 15px;">
      CineSix
    </a>
  </div>
 `
 };
transporter.sendMail(mailOptions, function (err, info) {
 if (err)
 console.log(err)
 else
 console.log(info);
 });
}
