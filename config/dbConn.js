const mongoose = require('mongoose');
const URI = process.env.URI;
const connectDB = async () => {
    try {
        await mongoose.connect(URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;