const prisma = require("../src/infra")


module.exports = class DeletarExercicio{
    static async deletarexercicio(req, res){
         const { id_exercicio } = req.query

         try {
            const response = await prisma.exercicio.delete({
                where: {
                    id: id_exercicio
                }
            })
            if(response){
                return res.status(200).json({ message: "Exercicio deletado com sucesso!"})
            }
         } catch (error) {
            console.log(error)
         }
    }
}