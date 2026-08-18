
import { Router } from 'express'
import { authtoken } from '../middleware/tokenauth.js'
import socialNetwork from '../models/socialNetwork.js'
import isAdmin from '../middleware/isadm.js'
const router = Router()

router.post('/socialnetwork', authtoken ,async(req,res)=>{
    try{
        const newsocial = await socialNetwork.create({
        userid: req.usuario,
        friendid: req.body.friendid
    });
    res.status(201).json(newsocial)
    } catch (erro){
        res.json(400).json({erro})
    }
})

router.delete('/socialnetwork', authtoken,async(req,res)=>{
    try{
        const id = req.query.id
        const deletesocial = await socialNetwork.findById(id);
        if (!deletesocial) {
            return res.status(400).send({ message: "social não encontrado" })
        }
        if (deletesocial.userid.toString() !== req.usuario) {
            return res.status(400).send({ message: "você não tem permissão pra deletar esse amigo" })
        }
        const result = await socialNetwork.deleteOne({
        userId: req.usuario,
        friendid: req.body.friendid
    });
        res.status(200).json({ menssage: "Deletado com sucesso" });
    }
    catch (erro){
        res.status(400).json({erro})
    }
})

router.get('/socialnetwork',authtoken,async (req,res)=>{
    try{
        const socialSearch = await socialNetwork.find({userid: userid});
        res.status(200).send(socialSearch)
    } catch (erro){
        res.status(400).json({erro})
    }
})

router.get('/socialnetworkALL',authtoken,isAdmin,async (req,res)=>{
    try{
        const socialSearchALL = await socialNetwork.find();
        res.status(200).send(socialSearchALL)
    } catch (erro){
        res.status(400).json({erro})
    }
})

export default router