const dataSource = require('../../database/models/index.js');

class Services {
    constructor(nomeDoModelo) {
        this.model = nomeDoModelo;
    }

    async pegaTodosOsRegistros() {
        return dataSource[this.model].findAll();
    }

    async atualizaRegistro(dadosAtualizados, id) {
        const registroAtualizado = await dataSource[this.model].update(dadosAtualizados, {
            where: { id: id }
        });
        if (registroAtualizado[0] === 0) {
            return false;
        }
        return true;
    }
}

module.exports = Services;