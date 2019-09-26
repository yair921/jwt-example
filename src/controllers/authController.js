const { Router } = require('express');
const router = Router();
const User = require('../models/User');

router.post('/signup', async (req, res, next) => {
    const { username, email, password } = req.body;
    console.log(username, email, password);
    const user = new User({
        username,
        email,
        password
    });
    user.password = await user.encryptPassword(user.password);
    await user.save();
    res.json('Ok polilla!');
});

router.post('/signin', (req, res, next) => {

});

router.get('/me', (req, res, next) => {
    res.json('me');
});

module.exports = router;