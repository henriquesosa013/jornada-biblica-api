import { Router } from 'express'
import { authtoken } from '../middleware/tokenauth.js'
import user from '../models/user.js'
import isAdmin from '../middleware/isadm.js'
import questions from '../models/questions.js'
import responses from '../models/responses.js'
const router = Router()

router.get('/report/number-user',authtoken,async(req,res)=>{
    try{
    const total = await user.countDocuments();
    res.status(200).send(total)
    } catch(erro){
        res.status(400).json({erro})
    }
})



router.get('/report/number-question-response', authtoken,async(req,res)=>{
    try{
        const total = await responses.countDocuments();
        res.status(200).send(total)
    } catch(erro){
        res.status(400).json({erro})
    }
})

export default router