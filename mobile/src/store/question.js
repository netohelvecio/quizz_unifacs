import { observable, action } from 'mobx';

export class QuestionStore {
  @observable
  questionCorrectCount = 0;

  @action
  setQuestionCount(points) {
    this.questionCorrectCount += points;
  }
}
