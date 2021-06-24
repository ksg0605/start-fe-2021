import { clickedFilter } from "./click-Event.js";
import { insertClass } from "./insert-class";
import { globalClassData } from "./load-class";
import { filterHelpLinks } from "./filter-help";

export const clickedClassFilterHelpLinks = function (event) {
  clickedFilter(event);
  insertClass(filterHelpLinks(globalClassData[0]));
};
