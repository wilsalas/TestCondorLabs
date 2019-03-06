const { Router } = require("express"),
    router = Router(),
    {
        GetDataUsers, LoginUsers,
        RegisterUsers, UpdateUsers
    } = require("../controllers/users"),
    { NewGroup, NewMessage } = require("../controllers/homeEvents");

router.get('/auth/getusers', GetDataUsers)
router.post('/auth/login', LoginUsers);
router.post('/auth/register', RegisterUsers);
router.put('/auth/update/:id', UpdateUsers);
router.post('/events/newgroup', NewGroup);
router.post('/events/newmessage', NewMessage);

module.exports = router;