export const people = [
  {
    id: 1,
    name: "yskim",
    age: 18,
    gender: "male",
  },
  {
    id: 2,
    name: "testuser2",
    age: 18,
    gender: "male",
  },
  { id: 3, name: "testuser3", age: 18, gender: "female" },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => id === people.id);
  return filteredPeople[0];
};
