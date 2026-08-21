import { Router } from 'express'
import { register,login } from '../middleware/functionAuth.js'
import  User from '../models/user.js'
import jwt from 'jsonwebtoken'
import { authtoken } from '../middleware/tokenauth.js'
const router = Router()

router.post('/register',async (req,res)=>{
    try{
        const hashpassword = await register(req.body.password)
        const userexist = await User.findOne({ email: req.body.email })
        if (userexist){
            return res.status(400).json({erro: "usuario ja existe"})
        }

        const novousuario = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashpassword
        })
        res.status(201).json(req.body)
    } catch(erro){
        return console.log("erro ao criar usuario", erro)
    }
})

router.post('/login', async (req,res)=>{

    const usuario = await User.findOne({email: req.body.email})

    if (!usuario){
        return res.status(404).json({ erro: "usuario nao encontrado" })
    }

    const senhacorreta = await login ( req.body.password, usuario.password)

    if (!senhacorreta){
        return res.status(400).json("senha incorreta");
    }

    const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })
    return res.json ({ token })
})

router.get('/users/me', authtoken , async (req,res)=>{
    const usuario = await User.findById(req.usuario).select('-password')
    return res.status(200).json(usuario)
})

export default router