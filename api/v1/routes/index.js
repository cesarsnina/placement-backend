const router = require('express').Router();

router.use('/user', require('./user'));
router.use('/job', require('./job'));
router.use('/skill', require('./skill'));

module.exports = router;
