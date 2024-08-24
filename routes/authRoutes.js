const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');
const auth = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/admin', auth(['admin']), (req, res) => {
    res.send('Admin dashboard');
});

router.get('/editor', auth(['editor']), (req, res) => {
    res.send('Editor dashboard');
});

router.get('/viewer', auth(['viewer', 'admin', 'editor']), (req, res) => {
    res.send('Viewer dashboard');
});

module.exports = router;
