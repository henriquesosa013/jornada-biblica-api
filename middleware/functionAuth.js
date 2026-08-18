import bcrypt from 'bcrypt'

export async function register (password){
    const hash = await bcrypt.hash(password,10)
    return hash
}

export async function login (password,hashpassword) {
    const verify = await bcrypt.compare(password,hashpassword)
    return verify
}