import * as Yup from 'yup';
import Question from '../schemas/Question';

import shuffleArray from '../utils/shuffleArray';

class CorrectAnswerController {
  async store(req, res) {
    const { id, answer_user } = req.body;

    const schema = Yup.object().shape({
      // Obriga o frontend a passar os dados destes campos.
      id: Yup.string().required(),
      answer_user: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      res.status(400).json({ error: 'Campos inválidos' });
    }

    const question = await Question.findById(id);

    if (!question) {
      return res.status(404).json({ error: 'Pergunta Não encontrada' });
    }

    const correctAnswer = question.answer_correct;

    if (answer_user === correctAnswer) {
      return res.status(200).json({ mensagem: true });
    }

    return res.json({ mensagem: false });
  }

  async index(req, res) {
    const { name } = req.query;

    const question = await Question.find().populate('theme', ['name'], {
      name,
    });

    const questionFiltered = question.filter((q) => {
      return q.theme !== null;
    });

    const questionShuffled = shuffleArray(questionFiltered);

    const questionFirstFive = questionShuffled.slice(0, 5);

    return res.json(questionFirstFive);
  }
}

export default new CorrectAnswerController();
