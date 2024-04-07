const roundNumber = (number: number): string => {
  if(number === 0) return "0";

  if (!number) return "-";

  return number.toFixed(2);
};

export { roundNumber };
