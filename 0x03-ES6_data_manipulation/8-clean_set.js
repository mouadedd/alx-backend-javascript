const cleanSet = (set, startString) => {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  return [...set]
    .filter((parametres) => (parametres !== undefined ? parametres.startsWith(startString) : ''))
    .map((parametres) => (parametres !== undefined ? parametres.slice(startString.length) : ''))
    .join('-');
};

export default cleanSet;
