require('dotenv').config();
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const apiKey = process.env.EMAIL_KEY;
const hostEmail = process.env.HOST_EMAIL;

module.exports = class EmailSender{

    static transporter = nodemailer.createTestAccount(sendgridTransport({
        auth:{
            api_key:apiKey,
        }
    }))

    static activationEmail(recipientObj){

        const { email, sender, subject, html } = recipientObj;

        return this.transporter.sendMail({
            to: email,
            from: hostEmail,
            subject: subject,
            html: html
        })
    };

    static auctionReminderEmail(recipientObj){

    };

    static messageNotificationEmail(){

    };
};