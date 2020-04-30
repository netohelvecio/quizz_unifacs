import * as Yup from 'yup';
import Theme from '../schemas/Theme';

class ThemeController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      res.status(400).json({ error: 'Campos inválidos' });
    }

    const { name } = req.body;

    const themeExists = await Theme.findOne({ name });

    if (themeExists != null) {
      return res.status(400).json({ error: 'Tema já existente' });
    }

    await Theme.create({ name });

    return res.json({ mensagem: 'Tema criado com sucesso!' });
  }

  async delete(req, res) {
    const { id } = req.params;

    const theme = await Theme.findByIdAndRemove(id);

    if (!theme) {
      return res.status(400).json({ error: 'Tema inexistente' });
    }

    return res.json({ mensagem: 'Tema excluido com sucesso!' });
  }

  async index(req, res) {
    const { name } = req.query;

    const themes = await Theme.find({ name: new RegExp(name, 'i') }); // RegExp -  função do js que permite a busca a partir de combinações de caracteres que formam a palavra de buscada

    return res.json(themes);
  }

  async show(req, res) {
    const { id } = req.params;

    const selectedTheme = await Theme.findById(id);

    if (selectedTheme == null) {
      return res.status(404).json({ error: 'Tema não existe' });
    }

    return res.json(selectedTheme);
  }

  async update(req, res) {
    const { id } = req.params;

    const { name } = req.body;

    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      res.status(400).json({ error: 'Campos inválidos' });
    }

    const selectUpdate = await Theme.findByIdAndUpdate(id, { name });

    if (!selectUpdate) {
      return res.status(404).json({ error: 'O tema não existe' });
    }

    return res.json(selectUpdate);
  }
}

export default new ThemeController();

/*
create/store - post - criar alguma coisa
delete - delete - deletar alguma coisa
update - put - atualiza
show - get - mostra apenas um item
index - get - mostra todos

post
get
delete
put

body - cria ou atualiza uma informação
params - procura por uma informação especifica
query - procura por uma informação com 2 ou mais valores atribuidos, Ex: procurar por usarios com nome "x"

localhost:3333/users/1 - params
localhost:3333/users?nome=helvecio -
*/
