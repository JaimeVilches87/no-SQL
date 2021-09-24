const router = require('express').Router();

// Set routes
const usersRoutes = require('./user-routes');
const thoughtsRoutes = require('./thought-routes');

router.use('/users', usersRoutes);
router.use('/thoughts', thoughtsRoutes);

// Export
module.exports = router;