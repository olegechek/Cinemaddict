const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};


const getRandomValue = (items) =>
  items[getRandomInteger(0, items.length - 1)];


const formatMinutesToTime = (minutes) => {
  const MINUTES_PER_HOUR = 60;

  return (minutes < MINUTES_PER_HOUR)
    ? `${minutes}m`
    : `${Math.floor(minutes / MINUTES_PER_HOUR)}h ${minutes % MINUTES_PER_HOUR}m`;
};

const formatStringToYear = (date) =>
  new Date(date).getFullYear();

const formatStringToDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const formattedDate = `${day} ${monthNames[month]} ${year}`;
  return formattedDate;
};

const formatDateToYearMonthDay = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Добавляем leading zero, если месяц состоит из одной цифры
  const day = String(date.getDate()).padStart(2, '0'); // Добавляем leading zero, если день состоит из одной цифры
  const formattedDate = `${year}/${month}/${day}`;
  return formattedDate;
};

export { getRandomInteger, getRandomValue, formatMinutesToTime, formatStringToYear, formatStringToDate, formatDateToYearMonthDay };
