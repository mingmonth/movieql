const yskim = {
  name: "yskim",
  age: 18,
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => yskim,
  },
};

export default resolvers;
