'use strict';

// fetch api
fetch('https://rickandmortyapi.com/api/character/')
    .then(res => res.json())
    //.then(data => console.log(data))
    .then(characters => showCharacters(characters.results))
    .catch(err => console.log(err))


let showCharacters = characters => {
    const characterDiv = document.querySelector('#rick-and-morty-characters');

    characters.forEach(character => {
        const characterElement = document.createElement('p');
        characterElement.innerText = `Name: ${character.name}`;
        characterDiv.append(characterElement);
    })

    const characterDiv2 = document.querySelector('#rick-and-morty-status');
    characters.forEach(char => {
        const characterEl = document.createElement('p');
        characterEl.innerText = `Status: ${char.status}`
        characterDiv2.append(characterEl);
    })

    const speciesDiv = document.querySelector('#rick-and-morty-species')
    characters.forEach(char => {
        const charEl2 = document.createElement('p');
        charEl2.innerText = `Species: ${char.species}`
        speciesDiv.append(charEl2);

    })

}
