const { Router } = require("express"),
    router = Router(),
    { LoginUsers, RegisterUsers } = require("../controllers/users");

router.post('/auth/login', LoginUsers);
router.post('/auth/register', RegisterUsers);

module.exports = router;