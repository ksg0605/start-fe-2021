export const filterDate = function (data) {
  // const sortedData = data;
  data.sort(function (a, b) {
    a = new Date(a.date);
    b = new Date(b.date);
    return b - a;
  });
};
