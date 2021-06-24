import { loadingSpinner } from "./loading-Spinner.js";
import { classList } from "./insert-class.js";
import { insertClass } from "./insert-class.js";

const classFile = "./class.json";

export const globalClassData = [];

// fetch class.json
export const loadClass = function () {
  classList.innerHTML = loadingSpinner;
  return fetch(classFile)
    .then(function (response) {
      response.json().then(function (classData) {
        globalClassData.push(classData);
        insertClass(classData);
      });
    })
    .catch(function (err) {
      console.log("Fetch Error :-S", err);
    });
};
