import { Router } from 'express'
import { authtoken } from '../middleware/tokenauth.js'
import questions from '../models/questions.js'
import User from '../models/user.js'
import responses from '../models/responses.js'
const router = Router()

router.get('/questions', authtoken, async (req,res)=>{
    try{
        const total = 72
        const aleatoryposition = Math.floor(Math.random() * total)
        const result = await questions.find().skip(aleatoryposition).limit(3).select('-correctAnswer -__v')
        res.status(200).json(result)
    }catch (erro){
        res.status(400).json(erro)
    }
})

router.post('/questions/answer', authtoken, async (req,res) =>{
    try{
        const questionid = req.body.questionid
        const userid = req.usuario
        const answer = req.body.answer
        const question = await questions.findById(questionid)

        if(!question){
            return res.status(400).json({ erro: 'questão nao encontrada'})
        }

        const alreadyresponse = await responses.findOne({ userid, questionid })
        if(alreadyresponse){
            return res.status(400).json({ erro: 'você já respondeu essa pergunta' })
        }
    
        await responses.create({
            userid: userid,
            questionid: questionid,
            isCorrect: question.correctAnswer == answer
        });
    
        const iscorrect = question.correctAnswer == answer
        if (iscorrect){
        await User.findByIdAndUpdate(userid, { $inc: { score: 1 } })
    }
        res.status(200).json({ iscorrect })
    } catch (erro){
        res.status(400).json({message: erro.message})
    }
})

router.get('/ranking', authtoken, async (req,res) =>{
    try{
        const ranking = await User.find().select('name score').sort({score : -1}) 
        res.status(200).json(ranking)
    } catch (erro) {
        res.status(400).json({ message: erro.message })
    }
})

export default router