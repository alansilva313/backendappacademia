const prisma = require("../src/infra")



module.exports = class Medidas{
    static async medidas(req, res){
         const { peso, altura, id_user } = req.body

         try {

            const medidasUser = await prisma.medidas.findFirst({
                where: {
                    id_user: id_user
                }
            })

            if(medidasUser){
              return res.status(404).json({ message: "Medidas já estão cadastradas para este usuário!"})
            };


            const response = await prisma.medidas.create({
                data: {
                    id_user: id_user,
                    peso: peso,
                    altura: altura
                }
            })


            if(response){
                return res.status(200).json({ message: 'Medidas cadastradas com sucesso!'})
            }
         } catch (error) {
            console.log(error)
         }
    }
}