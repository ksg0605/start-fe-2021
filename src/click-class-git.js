import { clickedFilter } from "./click-Event.js";
import { globalClassData } from "./load-class.js";
import { filterGitUrl } from "./filter-git.js";
import { insertClass } from "./insert-class.js";

export const clickedClassFilterGitUrl = function (event) {
  clickedFilter(event);
  insertClass(filterGitUrl(globalClassData[0]));
};
