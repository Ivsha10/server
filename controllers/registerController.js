const User = require('../model/User');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const {username, password}  = req.body;
    const duplicate = await User.findOne({username: username}).exec();
    if (duplicate) return res.status(409).json({'error': 'This username already exists!'});
    const result = await User.create({
        'username': username, 
        'password': await bcrypt.hash(password, 10),
        'fullName': null,
        'email': null,
        'image': null,
    });
    console.log(`User ${username} registered successfully!`);
    console.log(result);
    return res.status(200).json({'message':'Registered Succesfully!'});
}

module.exports = {handleNewUser};