export const quizList = document.querySelector(".quizList");

// 본문에 quiz 내용 삽입
export const insertQuiz = function (quizData) {
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
