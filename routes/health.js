import { Router } from 'express'
const router = Router()

router.get('/health', (req,res)=>{
    try{
        res.json({
            status: "ok",
            message: "API funcionando"
        })
    } 
    
    catch{
        res.json({
            status: "erro"
        })
    }
})

export default router
