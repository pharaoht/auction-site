const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

module.exports = class EmailSender{

    // static transporter = nodemailer.createTestAccount(sendgridTransport({
    //     auth:{
    //         api_key:'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'
    //     }
    // }))

    static activationEmail(recipientObj){

        const { email, sender, subject, html } = recipientObj;

        return this.transporter.sendMail({
            to: email,
            from: sender,
            subject: subject,
            html: html
        })
    };

    static auctionReminderEmail(recipientObj){

    };

    static messageNotificationEmail(){

    };
};