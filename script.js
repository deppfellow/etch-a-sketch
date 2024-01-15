const gridInput = prompt("Enter the grid dimension:")
document.documentElement.style.setProperty('--columns', gridInput)

// const gridInput = document.querySelector(".dim-input")

function createGrid(gridDimension) {
    const gridContainer = document.querySelector('.main-container')
    for (let i = 0; i < gridDimension * gridDimension; i++) {
        const gridItem = document.createElement('div')
        gridItem.classList.add("grid-item")
        gridContainer.appendChild(gridItem)

    }
}

createGrid(gridInput)
