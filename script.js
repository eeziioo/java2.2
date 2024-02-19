let boxDiv = document.querySelector('.box');
let parentDiv = document.querySelector('.parent')

let newH1 = document.createElement('h1');
newH1.textContent = 'Ismim: Umar';
newH1.style = 'color: red; font-size: 50px;'
parentDiv.appendChild(newH1)

let newH2 = document.createElement('h2');
newH2.textContent = 'Familiya: Ibrohimov';
newH2.style = 'color: green; font-size: 50px;'
parentDiv.appendChild(newH2)

let newH3 = document.createElement('h3');
newH3.textContent = 'Yoshim: 14';
newH3.style = 'color: yellow; font-size: 50px;'
parentDiv.appendChild(newH3)

let newH4 = document.createElement('h4');
newH4.textContent = 'It: Mars';
newH4.style = 'color: black; font-size: 50px;'
parentDiv.appendChild(newH4)

let newH5 = document.createElement('h5');
newH5.textContent = 'Maktab: 326';
newH5.style = 'color: blue; font-size: 50px;'
parentDiv.appendChild(newH5)