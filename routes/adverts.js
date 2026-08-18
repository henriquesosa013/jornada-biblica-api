import { Router } from 'express'
import { authtoken } from '../middleware/tokenauth.js'
import multer from 'multer'
import fs from 'fs'
import Adverts from '../models/adverts.js'
import isAdmin from '../middleware/isadm.js'
const router = Router()

router.post('/adverts', authtoken,isAdmin, async(req,res)=>{
    const newadverts = await Adverts.create({
        title: req.body.title,
        photo: req.body.photo,
        description: req.body.description
    })
    res.status(201).json({menssage: "Criado com sucesso"})
});

router.post('/upload-file', authtoken,isAdmin, async(req,res)=>{
    const storage = multer.diskStorage({
        destination: function(req,file,cb) {
            cb(null, 'images')
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

router.get('/adverts', authtoken, isAdmin, async (req,res)=>{
    try{
        const search = await adverts.find()
        res.status(200).json(search)
    } catch(erro){
        res.status(400).json(erro)
    }
})

export default router