const prisma = require("../src/infra")

module.exports = class BuscarMedidas {
    static async buscarmedidas(req, res) {
        const { id_user } = req.query

        if (!id_user || id_user === '') {
            return res.status(404).json({ message: 'Parâmetro não encontrado!' })
        }
        try {
            const response = await prisma.medidas.findMany({
                where: {
                    id_user: id_user
                }
            })

            if(response.length !== 1){
                return res.status(200).json({ message: "Nenhuma medida encontrada para este usuario", success: false})
            }else {
                return res.status(200).json({ message: "Medidas do usuário", data: response, success: true })
            }
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Erro interno do servidor' })
        }
    }
}
