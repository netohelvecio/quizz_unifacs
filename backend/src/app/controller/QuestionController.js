import * as Yup from 'yup';
import Question from '../schemas/Question';

class QuestionController {
  async store(req, res) {
    const {
      ask,
      answer_1,
      answer_2,
      answer_3,
      answer_correct,
      theme,
    } = req.body;

    const schema = Yup.object().shape({
      ask: Yup.string().required(),
      answer_1: Yup.string().required(),
      answer_2: Yup.string().required(),
      answer_3: Yup.string().required(),
      answer_correct: Yup.string().required(),
      theme: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      res.status(400).json({ error: 'Campos inválidos' });
    }

    const createAsk = await Question.create({
      ask,
      answer_1,
      answer_2,
      answer_3,
      answer_correct,
      theme,
    });

    return res.json(createAsk);
  }

  async show(req, res) {
    const { id } = req.params;

    const questions = await Question.findById(id).populate('theme', ['name']);

    if (!questions) {
      return res.status(404).json({ error: 'A questão não existe' });
    }

    return res.json(questions);
  }

  async index(req, res) {
    const searchQuestions = await Question.find().populate('theme', ['name']);

    return res.json(searchQuestions);
  }

  async delete(req, res) {
    const { id } = req.params;

    const selectQuestion = await Question.findByIdAndRemove(id);

    if (!selectQuestion) {
      return res.status(404).json({ error: 'A questão não existe' });
    }

    return res.json({ error: 'Questão Excluída com sucesso!' });
  }

  async update(req, res) {
    const {
      ask,
      answer_1,
      answer_2,
      answer_3,
      answer_correct,
      theme,
    } = req.body;
    const { id } = req.params;

    const schema = Yup.object().shape({
      ask: Yup.string().required(),
      answer_1: Yup.string().required(),
      answer_2: Yup.string().required(),
      answer_3: Yup.string().required(),
      answer_correct: Yup.string().required(),
      theme: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      res.status(400).json({ error: 'Campos inválidos' });
    }

    const updateQuestion = await Question.findByIdAndUpdate(id, {
      ask,
      answer_1,
      answer_2,
      answer_3,
      answer_correct,
      theme,
    });

    if (!updateQuestion) {
      return res.status(404).json({ error: 'A questão não existe' });
    }

    return res.json(updateQuestion);
  }
}

export default new QuestionController();
