const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let langsFilter = users.filter(person => person.languages.length >= 3);
console.log(langsFilter);

let emailMap = users.map(person => person.email);
console.log(emailMap);

let yearsReduce = users.reduce((total, person) => {
    return (total + person.yearsOfExperience)
}, 0);
console.log(yearsReduce);

let userNames = users.reduce((total, people) => {
    return `Your instructors are:  ${people.name}  ${total}`
}, 1)
console.log(userNames)


