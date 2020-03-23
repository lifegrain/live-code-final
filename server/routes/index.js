const router = require(`express`).Router()
const { User, Country, Report } = require(`../controllers`)
const authen = require(`../middleware/authen`)

router.post(`/login`, User.login)

router.use(authen)

router.get(`/countries`, Country.getAll)

router.get(`/reports`, Report.read)
router.post(`/reports`, Report.create)

module.exports = router