const prisma = require('../src/infra/index')


module.exports = class Autenticacao{
    static async autenticate(req, res){
        const { email, password } = req.body

        try {
            const response = await prisma.users.findUnique({
                where: {
                    email: email,
                    password: password
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    tel: true,
                    password: false,
                    permission: true
                }
            })

            if(response){
                return res.status(200).json({ message: 'Login realizado com sucesso!', success: true, data: response})
            }else {
                return res.status(404).json({ message: 'Falha ao logar! Verifique suas credenciais', success: false})
            }
        } catch (error) {
            console.log(error)
        }
    }
}