const router = require('express').Router();

const { 
    getAllThoughts, 
    getThoughtsById, 
    createThoughts, 
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction

} = require('../../controllers/thoughts-controller');

// route for all thougths
router.route('/').get(getAllThoughts);

// get route for id put an delete
router.route('/:id').get(getThoughtsById).put(updateThoughts).delete(deleteThoughts); 

// post route
router.route('/:userId').post(createThoughts);


router.route('/:thoughtId/reactions').post(addReaction);

// delete route
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

// Export
module.exports = router;