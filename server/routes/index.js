const router = require(`express`).Router()
const { User, Country } = require(`../controllers`)
const authen = require(`../middleware/authen`)

router.post(`/login`, User.login)

router.use(authen)

router.get(`/countries`, Country.getAll)

module.exports = router