// export { currentDate };

const d = new Date();

const daysOfWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

const date = {
  month: months[d.getMonth()],
  date: d.getDate(),
  day: daysOfWeek[d.getDay()],
};

export default date;
