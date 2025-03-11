import {sendNotificationViaMailJet} from "../utils/email.js";

const sendContactEmailController = async (req, res) => {
    try {
        const {email, firstName, lastName, message} = req.body;

        await sendNotificationViaMailJet("New Contact Form Submission", `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,);

        res.status(200).json({success: true, message: "Email sent successfully!"});
    } catch (error) {
        res.status(500).json({success: false, message: "Failed to send email.", error: error});
    }
};

const sendSubscribeEmailController = async (req, res) => {
    try {
        const {email} = req.body;

        await sendNotificationViaMailJet("New Contact Form Submission", `
            <h2>New Subscribe Form Submission</h2>
            <p><strong>Email:</strong> ${email}</p>
          `,);

        res.status(200).json({success: true, message: "Email sent successfully!"});
    } catch (error) {
        res.status(500).json({success: false, message: "Failed to send email.", error: error});
    }
};


export default {
    sendContactEmailController, sendSubscribeEmailController
}