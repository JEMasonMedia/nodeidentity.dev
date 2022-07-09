import nodeMailer from 'nodemailer'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    let info = {}
    let { from, body } = req.body

    const transporter = nodeMailer.createTransport({
      host: process.env.CONTACT_EMAIL_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.CONTACT_EMAIL_USER,
        pass: process.env.CONTACT_EMAIL_PASSWORD,
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
    })

    const mailOptions = {
      from,
      to: process.env.CONTACT_EMAIL_USER,
      subject: 'Contact Form Submission ' + new Date(),
      text: body,
    }

    info = await transporter.sendMail(mailOptions)

    res.status(200).json(info)
  } else {
    res.status(401).json({ message: 'Unauthorized' })
  }
}

export default handler
