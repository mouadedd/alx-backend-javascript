const getStudentIdsSum = (students) => {
  const id = students.reduce(
    (accum, value) => accum + value.id, 0,
  );
  return id;
};

export default getStudentIdsSum;
