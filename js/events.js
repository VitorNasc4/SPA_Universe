export class Events {
    changeBg(button, buttonNotHide, buttonHide1, buttonHide2) {
        button.addEventListener("click", function() {
            buttonNotHide.classList.remove("hide")
            buttonHide1.classList.add("hide")
            buttonHide2.classList.add("hide")
        })
    }

    navSelected(button, buttonSelected, buttonNotSelected1, buttonNotSelected2) {
        if (button) {
            button.addEventListener("click", function() {
                buttonSelected.classList.remove("navHide")
                buttonNotSelected1.classList.add("navHide")
                buttonNotSelected2.classList.add("navHide")
            })
        }
    }
}

