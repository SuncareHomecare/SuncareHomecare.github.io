require("dotenv").config();

const EMAIL_ADDRESS = process.env.SENDER_EMAIL_ADDRESS;
const PASSWORD = process.env.SENDER_EMAIL_PASSWORD;

export default async function submitRequestForm(req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: EMAIL_ADDRESS,
      pass: PASSWORD,
    },
    secure: true,
    dkim: {
      domainName: "gmail.com",
    },
  });

  const mailData = {
    from: `Request a Quote: Form Submission <${EMAIL_ADDRESS}>`,
    to: "jebdi12@gmail.com",
    subject: `${req.body.vehicleType} for ${req.body.name}`,
    text: req.body.plainText,
    html: req.body.htmlText,
  };

  try {
    let info = await transporter.sendMail(mailData);
    console.log(info);
    res.status(200).send(info);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Failed to submit form." });
  }
}
