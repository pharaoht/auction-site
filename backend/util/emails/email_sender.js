require('dotenv').config();
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const EMAILKEY = process.env.EMAILKEY;

module.exports = class EmailSender{

    static transporter = nodemailer.createTestAccount(sendgridTransport({
        auth:{
            api_key:EMAILKEY,
        }
    }))

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