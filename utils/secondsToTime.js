const padZero = (num, size) => {
  let s = String(num);
  while (s.length < size) {
    s = `0${s}`;
  }
  return s;
};

export default (num) => {
  const minutes = padZero(Math.floor(num / 60), 2);
  const seconds = padZero(num % 60, 2);
  return `${minutes}:${seconds}`;
};
