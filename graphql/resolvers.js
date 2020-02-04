const nicolas = {
    name: "nicolas",
    age: 20,
    gender: "female"
}

const resolvers = {
    Query: {
        person: () => nicolas
    }
}

export default resolvers;