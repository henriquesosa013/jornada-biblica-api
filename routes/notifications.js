
import { Router } from 'express'
import notifications from '../models/notifications.js'
import { authtoken } from '../middleware/tokenauth.js'
import isAdmin from '../middleware/isadm.js'
const router = Router()

router.post('/notifications', authtoken, async(req,res)=>{
    try{
        const newnotification = await notifications.create({
        title: req.body.title,
        description: req.body.description
    });
    res.status(201).send({ message: "Notificação Criada" })

    } catch(erro){
        res.status(400).json({erro})
    }
})

router.put('/notifications', authtoken,isAdmin, async(req,res)=>{
    try{
        const id = await notifications.findById(req.query.id);
        if (!id) {
            return res.status(404).send({
                message: "não encontrado"
            })
        }
        id.title = req.body.title
        id.description = req.body.description
        await id.save()

        res.status(200).send({
            message: "FAQ atualizada com sucesso",
            fac: id
        })

    } catch (erro) {
    console.log(erro)
    res.status(400).send({
        message: "Erro ao atualizar"
    })
    }
})

router.get('/notifications', authtoken, async (req,res)=>{
    try{
       const allnotifications = await notifications.find();
       res.status(200).send(allnotifications)
    }catch (erro) {
    console.log(erro)
    res.status(400).send({
        message: "Erro ao mostrar notificações"
    })}
})

export default router