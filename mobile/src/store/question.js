import { observable, action } from 'mobx';

export class QuestionStore {
  @observable
  questionCorrectCount = 0;

  @action
  setQuestionCount() {
    this.questionCorrectCount += 1;
  }
}
