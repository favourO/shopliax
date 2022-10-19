// After Admin signin they can create a product key

// When you create key save the iat in the database and compare against the verified results

const sendEmail = require('../util/sendEmail');

sendEmail('yeah', 'Verification', 'ojiakufavour@gmail.com')