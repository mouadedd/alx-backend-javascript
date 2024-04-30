const groceriesList = () => {
  const rez = new Map();
  const objes = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  for (const key of Object.keys(objes)) {
    rez.set(key, objes[key]);
  }
  return rez;
};

export default groceriesList;
