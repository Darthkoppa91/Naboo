

const changeBackground = () => {
    const parent = document.querySelector(".container")
    const secondChild = parent.childNodes[3]
    secondChild.className = "test"
    secondChild.className += " bg-color"
    console.log(parent.children);
    const listOfListItems = document.querySelectorAll("li")
    console.log(listOfListItems);
    for (let i = 0; i < listOfListItems.length; i++) {
        const element = listOfListItems[i];
        element.className = "li-bg-color"
    }
}

changeBackground()



