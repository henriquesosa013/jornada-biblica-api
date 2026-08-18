import jwt from 'jsonwebtoken'

export function authtoken(req,res,next){
    const authHeader = req.headers.authorization

    if(!authHeader){
        return res.status(401).json({
            mensagem: 'Token não enviado'
        })
    }
    const token = authHeader.split(' ')[1]
    try{
       const decoded = jwt.verify(token, process.env.JWT_SECRET)
       req.usuario = decoded.id
       next()
       
    } catch {
        res.status(400).json({
            mensagem: 'erro no token'
        })
    }
}

