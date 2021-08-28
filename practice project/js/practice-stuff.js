'use strict';

// fetch api
fetch('https://rickandmortyapi.com/api/character/')
    .then(res => res.json())
    //.then(data => console.log(data))
    .then(characters => showCharacters(characters.results))
    .catch(err => console.log(err))


let showCharacters = characters => {
    const characterDiv = document.querySelector('#rick-and-morty-characters');
    const characterDiv2 = document.querySelector('#rick-and-morty-status');
    const speciesDiv = document.querySelector('#rick-and-morty-species')
    characters.forEach(character => {
        const characterElement = document.createElement('p');
        const characterEl = document.createElement('p');
        const charEl2 = document.createElement('p');
        characterElement.innerText = `Name: ${character.name}`;
        characterEl.innerText = `Status: ${character.status}`
        charEl2.innerText = `Species: ${character.species}`
        characterDiv.append(characterElement);
        characterDiv2.append(characterEl);
        speciesDiv.append(charEl2);

    })

}
