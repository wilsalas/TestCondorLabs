const { Router } = require("express"),
    router = Router(),
    { GetDataUsers, LoginUsers, RegisterUsers } = require("../controllers/users");

router.get('/auth/getusers', GetDataUsers)
router.post('/auth/login', LoginUsers);
router.post('/auth/register', RegisterUsers);

module.exports = router;