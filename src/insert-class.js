export const classList = document.querySelector(".classList");

// 본문에 class 내용 삽입
export const insertClass = function (classData) {
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
