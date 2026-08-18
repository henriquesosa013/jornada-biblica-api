import { Router } from 'express'
import { authtoken } from '../middleware/tokenauth.js'
import feed from '../models/feed.js'
import multer from 'multer'
import fs from 'fs'
const router = Router()

//upload da foto deve ser realizado no /upload-feed
router.post('/feed', authtoken, async (req,res)=>{
    try{
        const newfeed = await feed.create({
            userid: req.usuario,
            description: req.body.description,
            photo: req.body.photo
        });
        res.status(201).json(newfeed)

    } catch (erro){
        res.status(400).json({erro})
    }
})

router.post('/upload-feed', authtoken, async(req,res)=>{
    const storage = multer.diskStorage({
        destination: function(req,file,cb) {
            cb(null, 'imagesfeed')
        },
        filename: function (req,file,cb) {
            cb(null, Date.now() + ".jpg");
        }
    })

    const upload = multer({ storage }).single("file");
    upload(req,res, function (err) {
        if(err instanceof multer.MulterError){
            return res.status(500).send(err)
        } else if (err){
            return res.status(500).send(err)
        }
         console.log(req.file.filename)
         return res.status(200).send({menssage: "upload feito"})
    })
});

router.get('/feed', authtoken,async(req,res)=>{
    try{
        const gfeed = await feed.find().select(" -userid -_id -__v");
        res.status(200).json(gfeed)

    }
    catch(erro){
        res.status(400).json({erro})
    }
})

router.delete('/feed', authtoken,async(req,res)=>{
    try{
        const id = req.query.id
        const deletefeed = await feed.findById(id);
        if (!deletefeed) {
            return res.status(400).send({ message: "feed não encontrado" })
        }
        if (deletefeed.userid.toString() !== req.usuario) {
            return res.status(400).send({ message: "você não tem permissão pra deletar esse feed" })
        }
        await feed.findByIdAndDelete(id)
        return res.status(200).send({ message: "feed deletado com sucesso" })
    }catch(erro){
        res.status(400).json({erro})
    }
})

export default router