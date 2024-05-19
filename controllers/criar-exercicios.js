const prisma = require("../src/infra")




module.exports = class CriarMedidas{
    static async criarexercicio(req, res){
        const { title, observacao, sets, reps, weight, diaSemana, id_user } = req.body

        if(!title && title === ''){
            return res.status(200).json({ message: 'O nome do exercicio é necessário!', success: false})
        }

        try {
            const response = await prisma.exercicio.createMany({
                data: {
                    title: title,
                    observacao: observacao,
                    sets: sets,
                    reps: reps,
                    weight: weight,
                    diaSemana: diaSemana,
                    id_user: id_user
                }
            })

         if(response){
            return res.status(200).json({ message: 'Exercicio criado com sucesso!', success: true})
         }
        } catch (error) {
            
        }
    }
}