const { Router } = require("express"),
    router = Router(),
    { GetDataUsers, LoginUsers, RegisterUsers } = require("../controllers/users"),
    { NewGroup } = require("../controllers/homeEvents");

router.get('/auth/getusers', GetDataUsers)
router.post('/auth/login', LoginUsers);
router.post('/auth/register', RegisterUsers);
router.post('/events/newgroup', NewGroup);

module.exports = router;