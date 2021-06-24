export const filterGitUrl = function (data) {
  const len = data.length;
  const sortedData = [];
  for (let i = 0; i < len; i++) {
    if (data[i].gitUrl !== "") {
      sortedData.push(data[i]);
    }
  }
  return sortedData;
};
