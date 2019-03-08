const { Router } = require("express"),
    router = Router(),
    {
        GetDataUsers, LoginUsers,
        RegisterUsers, UpdateUsers
    } = require("../controllers/users"),
    { NewGroup, NewMessage } = require("../controllers/homeEvents");

/* routes to define user settings */
router.get('/auth/getusers', GetDataUsers)
router.post('/auth/login', LoginUsers);
router.post('/auth/register', RegisterUsers);
router.put('/auth/update/:id', UpdateUsers);
/* routes to define the configuration of the application events */
router.post('/events/newgroup', NewGroup);
router.post('/events/newmessage', NewMessage);

module.exports = router;