const express = require("express");
const router = express.Router();
const sgMail = require('@sendgrid/mail');

//  @route POST api/emails
//  @desc Sends a gratitude email
//  @access Public
// Request body 
// {
//     to: <recipientEmail>, 
//     from: <senderEmail>, 
//     subject: <emailSubject>,
//     text: <emailContent>,
//    html: <htmlContent/>
//    
// }
router.post("/", (req, res) => {
    // TODO: pretty sure api key should not be here lol. 
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
        to: req.body.to,
        from: req.body.from,
        subject: req.body.subject,
        text: req.body.text,
        html: req.body.html,
    };
      
    sgMail
        .send(msg)
        .then(() => {
            res.json(msg)
        })
        .catch(err => {
            res.json(err)
        });

  });

  
module.exports = router;
