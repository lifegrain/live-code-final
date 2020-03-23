const router = require(`express`).Router()
const { User, Country, Report } = require(`../controllers`)
const authen = require(`../middleware/authen`)
const author = require(`../middleware/authorize`)

router.post(`/login`, User.login)

router.use(authen)

router.get(`/countries`, Country.getAll)

router.get(`/reports`, Report.read)
router.post(`/reports`, Report.create)

router.use(`/reports/:id`, author)

router.delete(`/reports/:id`, Report.delete)

module.exports = router