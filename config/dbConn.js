const mongoose = require('mongoose');
const URI = 'mongodb+srv://Ivsha10:ABCurh1Y7QJ84km5@cluster0.l8mwozk.mongodb.net/TechCollectDB?retryWrites=true&w=majority';
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