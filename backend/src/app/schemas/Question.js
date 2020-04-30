import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema(
  {
    ask: {
      type: String,
      required: true,
    },
    answer_1: {
      type: String,
      required: true,
    },
    answer_2: {
      type: String,
      required: true,
    },
    answer_3: {
      type: String,
      required: true,
    },
    answer_correct: {
      type: String,
      required: true,
    },
    theme: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Theme',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Question', QuestionSchema);

/*
id
pergunta
resposta1
resposta2
resposta3
resposracerta
tema
*/
