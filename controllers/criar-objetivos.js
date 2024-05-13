const prisma = require("../src/infra")


module.exports = class CriarObjetivos{
    static async createobjetivos(req, res){
        const { title } = req.body

        try {
            const response = await prisma.objetivo.create({
                data: {
                    title: title
                    
                }
            })

            if(response){
                return res.status(200).json({ message: 'Objetivo criado com sucesso!', data: response})
            }else {
                return res.status(400).json({ message: 'Falha ao criar!'})
            }
        } catch (error) {
            console.log(error)
        }

    }
}