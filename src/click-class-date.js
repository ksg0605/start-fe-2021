import { clickedFilter } from "./click-Event.js";
import { globalClassData } from "./load-class.js";
import { filterDate } from "./filter-date.js";
import { insertClass } from "./insert-class.js";

export const clickedClassFilterDate = function (event) {
  clickedFilter(event);
  insertClass(filterDate(globalClassData));
};
