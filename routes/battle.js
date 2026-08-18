import { Router } from 'express'
import { authtoken } from '../middleware/tokenauth.js'
import Battles from '../models/battles.js'
const router = Router()

router.post('/battle', authtoken, async (req,res)=>{
    try{
        const battleexist = await Battles.exists({battleid: req.body.battleId})
        if (battleexist) {
            return res.status(400).json({erro: "batalhaexistente"})
        }
        const userid = req.usuario
        const newbattle = await Battles.create({
            userid: userid,
            data: req.body
        })
        res.status(201).json(newbattle)
    } catch (erro) {
        res.status(400).json(erro)
    }
})

export default router