'use strict';


fetch('https://api.github.com/users/Nick-Adams-81/events/public',
    {headers: {'Authorization': githubToken}})
    .then(res => res.json())
    .then(data => console.log(data[0]))
    .catch(err => console.log(err))

const wait = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

wait(3000).then(() => console.log('runs after 3 seconds'))