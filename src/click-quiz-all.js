import { clickedFilter } from "./click-Event.js";
import { loadQuiz } from "./load-quiz.js";

export const clickedQuizFilterAll = function (event) {
  clickedFilter(event);
  loadQuiz();
};
