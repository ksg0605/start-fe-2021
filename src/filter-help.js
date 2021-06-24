export const filterHelpLinks = function (data) {
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
