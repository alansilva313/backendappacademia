const prisma = require("../src/infra")


module.exports = class LerExerciciosUser{
    static async lerexercicios(req, res){
         const { id_user } = req.query
        try {
            const response = await prisma.exercicio.findMany({
                where: {
                    id_user: id_user
                }
            })
            if(response){
                return res.status(200).json({ message: "Listando exercicios do usuário", data: response})
            }
        } catch (error) {
            console.log(error)
        }
    }
}