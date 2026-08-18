import { Router } from 'express'
import { authtoken } from '../middleware/tokenauth.js'
import isAdmin from '../middleware/isadm.js'
import facs from '../models/facs.js'
import user from '../models/user.js'
const router = Router()

router.post('/fac', authtoken, async (req,res)=>{
    try{
        const newfac = await facs.create({
        userid: req.usuario,
        title: req.body.title,
        description: req.body.description
    }); res.status(201).send({menssage: "Criado com sucesso espere a resposta"})
    } catch (erro) {
        res.status(400).send({menssage: "Erro ao criar", erro})
    }
})

router.put('/fac', authtoken, async (req, res) => {
    try {
        const userid = req.usuario
        const idquestion = await facs.findById(req.query.id)
        if (!idquestion) {
            return res.status(404).send({
                message: "não encontrado"
            })
        }

        idquestion.title = req.body.title
        idquestion.description = req.body.description
        await idquestion.save()

        res.status(200).send({
            message: "FAQ atualizada com sucesso",
            fac: idquestion
        })

    } catch (erro) {
    console.log(erro)
    res.status(400).send({
        message: "Erro ao atualizar"
    })
}
})

router.get('/fac', authtoken,async (req,res)=>{
    try{
        const userid = req.usuario
        const facsearch = await facs.find({userid: userid});
        res.status(200).send(facsearch)}
    catch {
        res.status(400).send("Nenhum fac encontrado")
    }
})

router.get('/fac/submites',authtoken,async(req,res)=>{
    try{
        const facadmsearch = await facs.find();
        res.status(200).send(facadmsearch)
    } catch {
        res.status(400).send("Algo deu errado")
    }
})

export default router