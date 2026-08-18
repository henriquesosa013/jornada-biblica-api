
import { Router } from 'express'
import Bible from '../models/bible.js'
const router = Router()

router.get('/bible/books', async (req,res)=>{
    try{
       const allbooks = await Bible.distinct("book")
       res.status(200).json(allbooks)
    }
    catch(erro){
        return res.status(400).json(erro)
    }
})

router.get('/bible/chapters', async (req,res) =>{
    try{
        const book = req.query.book
        const allchapters = await Bible.distinct("chapter", { book })
        res.status(200).json(allchapters)

    } catch (erro) {
        return res.status(400).json(erro)
    }
})

router.get('/bible/verses', async (req,res) =>{
    try{
        const book = req.query.book
        const chapter = req.query.chapter
        const allverses = await Bible.find({ book, chapter: Number(chapter)})
        res.status(200).json(allverses)
    } catch (erro){
        return res.status(400).json(erro)
    }
})

router.get('/bible/verseday', async (req,res) =>{
    try{
        const total = 31105
        const aleatoryposition = Math.floor(Math.random() * total)
        const result = await Bible.findOne({}).skip(aleatoryposition)
        res.status(200).json(result)
    } catch (erro) {
        res.status(400).json(erro)
    }
})

export default router