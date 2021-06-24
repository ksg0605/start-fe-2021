const classFile = "./class.json";

const globalClassData = [];

const loadingSpinner = `
<div class="spinner-border" role="status">
<span class="visually-hidden">Loading...</span>
</div>`;

// fetch class.json
const loadClass = function () {
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

const quizFile = "./quiz.json";
const globalQuizData = [];

// fetch quiz.json
const loadQuiz = function () {
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

const classList = document.querySelector(".classList");

// 본문에 class 내용 삽입
const insertClass = function (classData) {
  const len = classData.length;
  classList.innerHTML = null;

  for (let index = 0; index < len; index++) {
    const title = classData[index]["title"];
    const docUrl = classData[index]["docUrl"];
    const links = classData[index]["links"];
    const gitUrl = classData[index]["gitUrl"];
    const date = classData[index]["date"];

    const parsedLinks = function (links) {
      let sum = "";
      for (let i = 0; i < links.length; i++) {
        sum += `
        <a 
        href="${links}"
        class="badge bg-secondary"
        >${i + 1}</a
        >
        `;
      }
      return sum;
    };

    classList.innerHTML += `
    <tr>
    <th scope="row">${index + 1}</th>
    <td>${title}</td>
    <td>
    <a href="${docUrl}" class="badge bg-secondary"
    >문서</a
    >
    </td>
    <td>
    ${parsedLinks(links)}
    </td>
    <td>${date}</td>
    <td>
    <a
    href="${gitUrl}"
    >git</a
    >
    </td>
    </tr>`;
  }
};

const quizList = document.querySelector(".quizList");

// 본문에 quiz 내용 삽입
const insertQuiz = function (quizData) {
  const len = quizData.length;
  quizList.innerHTML = null;

  for (let index = 0; index < len; index++) {
    const title = quizData[index]["title"];
    const docUrl = quizData[index]["docUrl"];
    const previewUrl = quizData[index]["previewUrl"];
    const gitUrl = quizData[index]["gitUrl"];

    quizList.innerHTML += `
    <tr>
      <td>${title}</td>
      <td>
        <a
          class="badge bg-secondary"
          href="${docUrl}"
          >문서</a
        >
      </td>
      <td><a href="${previewUrl}">보기</a></td>
      <td><a href="${gitUrl}">git</a></td>
    </tr>`;
  }
};

const filterDate = function (data) {
  // const sortedData = data;
  data.sort(function (a, b) {
    a = new Date(a.date);
    b = new Date(b.date);
    return b - a;
  });
};

const filterGitUrl = function (data) {
  const len = data.length;
  const sortedData = [];
  for (let i = 0; i < len; i++) {
    if (data[i].gitUrl !== "") {
      sortedData.push(data[i]);
    }
  }
  return sortedData;
};

const filterHelpLinks = function (data) {
  const len = data.length;
  const sortedData = [];
  for (let i = 0; i < len; i++) {
    const links = data[i]["links"];
    if (links.length > 0) {
      sortedData.push(data[i]);
    }
  }
  return sortedData;
};

const clickedQuizFilterAll = function (event) {
  clickedFilter(event);
  loadQuiz();
};

const clickedQuizFilterGitUrl = function (event) {
  clickedFilter(event);
  insertQuiz(filterGitUrl(globalQuizData[0]));
};

const clickedClassFilterAll = function (event) {
  clickedFilter(event);
  loadClass();
};

const clickedClassFilterDate = function (event) {
  clickedFilter(event);
  insertClass(filterDate(globalClassData));
};

const clickedClassFilterGitUrl = function (event) {
  clickedFilter(event);
  insertClass(filterGitUrl(globalClassData[0]));
};

const clickedClassFilterHelpLinks = function (event) {
  clickedFilter(event);
  insertClass(filterHelpLinks(globalClassData[0]));
};

const clickedFilter = function (event) {
  const btnGroup = event.target.parentNode;
  const btn = btnGroup.childNodes;
  for (let i = 0; i < btn.length; i++) {
    if (btn[i] !== undefined && btn[i].nodeName === "BUTTON") {
      btn[i].classList.remove("active");
    }
    event.target.classList.add("active");
  }
};

const app = function () {
  loadClass();
  loadQuiz();
};

app();
