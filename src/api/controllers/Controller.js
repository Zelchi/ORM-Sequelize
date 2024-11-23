class Controller {
    constructor(entidadeService) {
        this.entidadeService = entidadeService;
    }

    async getAll(req, res) {
        try {
            const listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros();
            return res.status(200).json(listaDeRegistro);
        } catch (error) {
            return res.status(500).send('Erro ao buscar produtos');
        }
    }

    async atualiza(req, res) {
        const { id } = req.params;
        const dados = req.body;
        try {
            const foiAtualizado = await this.entidadeService.atualizaRegistro(dados, Number(id));
            if (!foiAtualizado) {
                return res.status(404).send('Registro não encontrado');
            }
            return res.status(200).send('Registro atualizado com sucesso');
        } catch (error) {
            return res.status(500).send('Erro ao atualizar registro');
        }
    }
}

module.exports = Controller;