const gridInput = prompt("Enter the grid dimension:")
const gridReset = document.querySelector(".dim-reset")
document.documentElement.style.setProperty('--columns', gridInput)

function createGrid(gridDimension) {
    const gridContainer = document.querySelector('.main-container')
    for (let i = 0; i < gridDimension * gridDimension; i++) {
        const gridItem = document.createElement('div')
        gridItem.classList.add("grid-item")
        gridItem.addEventListener('mouseover', function (ev) {
            ev.target.style.backgroundColor = "#000"
        })

        gridContainer.appendChild(gridItem)
    }
}

gridReset.addEventListener('click', function () {
    const gridCell = document.querySelectorAll('.grid-item')
    for (let i = 0; i < gridCell.length; i++) {
        gridCell[i].style.backgroundColor = '#d0d0d0'
    }
})

// gridInput.addEventListener("change", function () {
//     let gridValue = parseInt(gridInput, 10) || 0
//     document.documentElement.style.setProperty('--columns', gridValue)

//     createGrid(gridValue)
// })

createGrid(gridInput)
