const getStudentsByLocation = (students, city) => {
  const arrayObjects = students.filter((funtion) => funtion.location === city);
  return arrayObjects;
};

export default getStudentsByLocation;
