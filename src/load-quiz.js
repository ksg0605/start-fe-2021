import { loadingSpinner } from "./loading-Spinner.js";
import { insertQuiz } from "./insert-Quiz.js";
import { quizList } from "./insert-Quiz.js";

const quizFile = "./quiz.json";
export const globalQuizData = [];

// fetch quiz.json
export const loadQuiz = function () {
  quizList.innerHTML = loadingSpinner;
  return fetch(quizFile)
    .then(function (response) {
      response.json().then(function (quizData) {
        globalQuizData.push(quizData);
        insertQuiz(quizData);
      });
    })
    .catch(function (err) {
      console.log("Fetch Error :-S", err);
    });
};
