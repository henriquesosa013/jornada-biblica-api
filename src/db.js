import mongoose from "mongoose";
import 'dotenv/config'

export async function mongo(){
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("conectado ao bando de dados")
    } catch(erro){
        console.log("Erro ao conectar banco de dados", erro)
    }
    
}