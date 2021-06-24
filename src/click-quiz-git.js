import { clickedFilter } from "./click-Event.js";
import { globalQuizData } from "./load-quiz.js";
import { filterGitUrl } from "./filter-git.js";
import { insertQuiz } from "./insert-quiz.js";

export const clickedQuizFilterGitUrl = function (event) {
  clickedFilter(event);
  insertQuiz(filterGitUrl(globalQuizData[0]));
};
