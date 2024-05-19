const prisma = require('../src/infra/index')

module.exports = class CriarUsuario{
    static async caduser(req, res){
        const {name, email, tel, password, nascimento, permission} = req.body

        if(!name || name === ''){
            return res.status(404).json({ message: 'Nome é necessário!'})
        };

        if(!email || email === ''){
            return res.status(404).json({ message: 'Email é necessário!'})
        }

        try {
            const emailExist = await prisma.users.findFirst({
                where: {
                    email: email
                }
            })

            if(emailExist){
                return res.status(200).json({ message: "O email já existe!", success: false});
            };

            const response = await prisma.users.create({
                data: {
                    name: name,
                    email: email,
                    nascimento: nascimento,
                    tel: tel,
                    password: password,
                    permission: permission
                }
            })

            if(response){
                return res.status(200).json({ message: 'Usuário criado com sucesso!', success: true});
            }
        } catch (error) {
            console.log(error)
        }

    }
}