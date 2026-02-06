import { answerDatabase, getDefaultAnswer } from '../data/answers';

export function getAnswer(questionText) {
  const q = questionText.toLowerCase();

  for (const entry of answerDatabase) {
    if (entry.match(q)) {
      return entry.answer;
    }
  }

  return getDefaultAnswer(q);
}
