var TWILIO_ACCOUNT_SID = '';
var TWILIO_AUTH_TOKEN = '';

const accountSid = TWILIO_ACCOUNT_SID;
const authToken = TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        // mediaUrl: ['https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'],
        mediaUrl: ['http://admissions.pieas.edu.pk/Admissions/Contents/WrittenTestPatternandSyllabusforMSPrograms2023.pdf'],
        body: 'Hey, I just met you, and this is crazy...',
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+923059258251'
    })
    .then(message => console.log(message.sid));