const router = require('express').Router();


const {
    getAllUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers,
    addFriend,
    deleteFriend
  } = require('../../controllers/users-controller');

// get route for all users
router.route('/').get(getAllUsers).post(createUsers);

// get route for user id get put and delete
router.route('/:id').get(getUsersById).put(updateUsers).delete(deleteUsers);

// post route for new user delete
router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend)

// export
module.exports = router; 