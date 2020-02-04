export const people = [
    {
        id: 1,
        name: "nicolas",
        age: 20,
        gender: "female"
    }, 
    {   id: 2,
        name: "barnacle_lou", 
        age: 5,
        gender: "female"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => id === person.id);
    return filteredPeople[0];
}