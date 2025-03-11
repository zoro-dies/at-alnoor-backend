import Mailjet from "node-mailjet";

const NOTIFICATION_EMAIL = "notification@acegpa.com";
const NOTIFICATION_NAME = "Notifications Acegpa";

export const sendNotificationViaMailJet = async (
    subject,
    html,
) => {
    try {
        const mailjet = Mailjet.apiConnect(
            process.env.MAILJET_API_KEY,
            process.env.MAILJET_SECRET
        );

        await mailjet.post("send", {version: "v3.1"}).request({
            Messages: [
                {
                    From: {
                        Email: NOTIFICATION_EMAIL,
                        Name: NOTIFICATION_NAME,
                    },
                    To: [
                        {
                            Email: "info@ayat-alnoor.com",
                            Name: "Ayat AlNoor",
                        },
                    ],
                    Subject: subject,
                    HTMLPart: html,
                },
            ],
        });
    } catch (error) {
        console.log(`Unable to send notification email to ${to} ${error}`);
    }
};
