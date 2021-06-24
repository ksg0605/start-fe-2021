import { loadClass } from "./load-class.js";
import { clickedFilter } from "./click-Event";

export const clickedClassFilterAll = function (event) {
  clickedFilter(event);
  loadClass();
};
