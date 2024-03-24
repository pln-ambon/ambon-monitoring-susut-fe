const roundNumber = (number: number): string => {
  if (!number) return "-";

  return number.toFixed(2);
};

export { roundNumber };
