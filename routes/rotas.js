import { Router } from 'express'
import health from './health.js'
import Auth from './Auth.js'
import bible from './bible.js'
import questions from './questions.js'
import battle from './battle.js'
import adverts from './adverts.js'
import fac from './fac.js'
import socialNetwork from './socialNetwork.js'
import feed from './feed.js'
import notifications from './notifications.js'
import report from './report.js'
const router = Router()

router.use(health)
router.use(Auth)
router.use(bible)
router.use(questions)
router.use(battle)
router.use(adverts)
router.use(fac)
router.use(socialNetwork)
router.use(feed)
router.use(notifications)
router.use(report)

export default router