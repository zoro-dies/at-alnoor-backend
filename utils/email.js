
import Mailjet from "node-mailjet";



const NOTIFICATION_EMAIL = "notification@acegpa.com";
const NOTIFICATION_NAME = "Notifications Acegpa";

export const sendNotificationViaMailJet = async (
  to,
  subject,
  text,
  html,
) => {
  try {

    const mailjet =  Mailjet.apiConnect(
        process.env.MAILJET_API_KEY,
        process.env.MAILJET_SECRET
        );
    console.log(process.env.MAILJET_API_KEY, process.env.MAILJET_SECRET)
    await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: NOTIFICATION_EMAIL,
            Name: NOTIFICATION_NAME,
          },
          To: [
            {
              Email: "aleehassan1999@gmail.com",
              Name: "ali",
            },
          ],
          Subject: subject,
          TextPart: text,
          HTMLPart: html,
        },
      ],
    });
  } catch (error) {
    console.log(`Unable to send notification email to ${to} ${error}`);
  }
};
