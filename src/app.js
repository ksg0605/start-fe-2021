import { loadClass } from "./load-class.js";
import { loadQuiz } from "./load-quiz.js";

const app = function () {
  loadClass();
  loadQuiz();
};

app();
