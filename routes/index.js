const router = require('express').Router();

// link all routes
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// error
router.use((req, res) => {
    res.status(404).send('<h1>error</h1>');
  });

// export 

module.exports = router;