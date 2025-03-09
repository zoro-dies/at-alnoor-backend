import { sendNotificationViaMailJet } from "../utils/email.js"; // Adjust path as needed

const sendEmailController = async (req, res) => {
  try {
   
    // const { email, name, subject, message } = req.body;

    // // Define email details
    // const to = { email, name };
    // const text = message;
    // const html = `<p>${message}</p>`;
    // console.log("hello")
    
    // Call the email helper function
    await sendNotificationViaMailJet("aleehassan1999@gmail.com", "test", "test", "<p>hello</p>");

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    // console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email." , error : error });
  }
};


export default {
    sendEmailController
}