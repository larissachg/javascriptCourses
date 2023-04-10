// Fragmentos de codigo: document.createDocumentFragment()

const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

const daysList = document.getElementById('daysList');
const selectDays = document.getElementById('daysSelect');

const fragment = document.createDocumentFragment()

// for (const day of days) {
//     const itemList = document.createElement('LI')
//     itemList.textContent = day
//     fragment.appendChild(itemList)
// }

// daysList.appendChild(fragment)

for (const day of days) {
    const selectItem = document.createElement('OPTION')
    selectItem.setAttribute('value', day.toLocaleLowerCase())
    selectItem.textContent = day
    fragment.appendChild(selectItem)
}

selectDays.appendChild(fragment)