const lengthTypes = {
    text     : true,
    number   : false,
    email    : true,
    password : true,
    checkbox : true,
    date     : true,
}

function isNullUndefinedEmpty(element){
    return Object.is(element, null)
}

function handleChecks(element, checkValid = false, positionAbsolute) {
    let toReturn = [];
console.log(element)
    if (element !== null){
        if (Object.keys(element?.dataset)?.includes("required") && (element?.type in lengthTypes))console.log(6666)
            if (element?.dataset["required"] === 'true') toReturn = [...toReturn, checkRequired(element, positionAbsolute)]

        if (Object.keys(element?.dataset)?.includes("required") && (element?.type?.indexOf("select") >= 0) && checkValid)
            if (element?.dataset["required"] === 'true') toReturn = [...toReturn, checkRequiredSelect(element, positionAbsolute)]

        if (Object.keys(element?.dataset)?.includes("required") && (element?.type?.indexOf("checkbox") >= 0) && checkValid){
            if (element?.dataset["required"] === 'true') toReturn = [...toReturn, checkRequiredCheckbox(element, positionAbsolute)]
        }

        if (Object.keys(element?.dataset)?.includes("number") && (element.dataset["number"] === 'true')) toReturn = [...toReturn, checkNumber(element, positionAbsolute)]

        if (Object.keys(element?.dataset)?.includes("regex") && (element.dataset["regex"].length > 0)) toReturn = [...toReturn, checkRegex(element, positionAbsolute)]

        if (Object.keys(element?.dataset)?.includes("if") && (element.dataset["if"].length > 0)) toReturn = [...toReturn, checkIf(element, positionAbsolute)]
    }

    return !toReturn.includes(false)
}

function checkRequired(element, positionAbsolute) {
    if (element.value.length > 0) {
        const elementToChange = removeInvalid(element.name)
        hideMsg(elementToChange, "required")
    } else {
        const elementToChange = addIsInvalid(element.name)
        showMsg(elementToChange, element.dataset["requiredMsg"], "required", positionAbsolute)
        return false
    }
    return true
}

function checkRequiredCheckbox(element, positionAbsolute) {
    if (element.checked) {
        const elementToChange = removeInvalid(element.name)
        hideMsg(elementToChange, "required")
    }
    else {
        const elementToChange = addIsInvalid(element.name)
        showMsg(elementToChange, element.dataset["requiredMsg"], "required", positionAbsolute)
        return false
    }
    return true
}

function checkRequiredSelect(element, positionAbsolute) {
    if (element.selectedIndex === 0 || element.value === "") {
        const elementToChange = addIsInvalid(element.name)
        showMsg(elementToChange, element.dataset["requiredMsg"], "required", positionAbsolute)
        document.querySelector(`select[name=${element.name}]`).addEventListener("change", e => {
            if (e.target.selectedIndex > 0) {
                const elementToChange = removeInvalid(element.name)
                hideMsg(elementToChange, "required")
                return true
            }
        })
        return false
    }
}

function checkNumber(element, positionAbsolute) {
    if (!(element.value.match(/^\d*\.?\d+$/)?.length)) {
        // element.value = element.value.replace(/\D+/g, '')
        addIsInvalid(element.name)
        showMsg(element, element.dataset["numberMsg"], "number", positionAbsolute)
        element.addEventListener("blur", () => {
            const elementMsg = document.getElementById(`data-number-msg-${element.name}`)
            !isNullUndefinedEmpty(elementMsg) && element.parentNode.removeChild(elementMsg)
            element.dataset["required"] === 'true' && checkRequired(element)
        })
        return false
    } else {
        const elementMsg = document.getElementById(`data-number-msg-${element.name}`)
        !isNullUndefinedEmpty(elementMsg) && element.parentNode.removeChild(elementMsg)
        return true
    }
}

function checkRegex(element, positionAbsolute) {
    const regex = new RegExp(element.dataset["regex"]);

    if (element.value.length === 0) return true;

    if (regex.test(element.value)) {
        removeInvalid(element.name)
        hideMsg(element, "regex")
        return true
    } else {
        addIsInvalid(element.name)
        showMsg(element, element.dataset["regexMsg"], "regex", positionAbsolute)
        return false
    }
}

function checkIf(element, positionAbsolute) {
    if (element.dataset["if"] === "false") {
        addIsInvalid(element.name)
        showMsg(element, element.dataset["ifMsg"], "if", positionAbsolute)
        return false
    } else {
        removeInvalid(element.name)
        hideMsg(element, "if")
        return true
    }
}

function addIsInvalid(name) {
    const elementToChange = document.querySelector(`[name=${name}]`)
    elementToChange.classList.add("is-invalid")
    // elementToChange.classList.remove("is-valid")
    return elementToChange
}

function removeInvalid(name) {
    const elementToChange = document.querySelector(`[name=${name}]`)
    elementToChange.classList.remove("is-invalid")
    // elementToChange.classList.add("is-valid")
    return elementToChange
}

function showMsg(element, msg, type, positionAbsolute) {
    const elementFounded = document.getElementById(`data-${type}-msg-${element.name}`)
    if (isNullUndefinedEmpty(elementFounded)) {
        let elementMsg = document.createElement("span")
        elementMsg.setAttribute("id", `data-${type}-msg-${element.name}`)
        elementMsg.classList.add("text-danger")
        elementMsg.classList.add("float-start")
        elementMsg.classList.add("d-block")
        positionAbsolute && elementMsg.classList.add("position-absolute")
        elementMsg.classList.add("is-invalid-span")
        elementMsg.innerText = msg
        element.parentElement.appendChild(elementMsg)
    }
}

function hideMsg(element, type) {
    const elementToChange = document.querySelector(`[name=${element.name}]`)
    const elementMsg = document.getElementById(`data-${type}-msg-${element.name}`)
    !isNullUndefinedEmpty(elementMsg) && elementToChange.parentElement.removeChild(elementMsg)
}

export default {
    init: function (fields = [], resetWatcher) {
        return fields.map(field =>({
            handler(/*newValue, oldValue*/) {
                !resetWatcher && handleChecks(document.querySelector(`[name=${field}]`), true)
            },
            name : field
        }))
    },
    validateAll: function (elements = [], positionAbsolute = false){
        return !elements.map(element => handleChecks(document.querySelector(`[name=${element}]`), true, positionAbsolute)).includes(false)
    },
    resetFields: function (fields){
        fields.forEach(field => {
            const element = document.querySelector(`[name=${field}]`)
            element !== undefined && element !== null && (()=> element.value = "")()
        });
    },
    reset: function (model){
        Object.keys(model).forEach(field => {
            const element = document.querySelector(`[name=${field}]`)
            element !== undefined && element !== null && (()=> element.value = model[field])()
        });
    },
    cleanValidations : function (){
        [...document.querySelectorAll(".is-invalid-span")].forEach(item => item.remove())
    }
}

export const validatorMessages = {
    REQUIRED : "Campo requerido.",
    NUMBER   : "Sólo se permiten caracteres numéricos.",
    EMAIL    : "Debe ingresar un e-mail válido.",
    WEB      : "Debe ingresar una página web válida.",
}

export const regexValidator = {
    URL   : "[-a-zA-Z0-9@:%._\\+~#  =]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)",
    NUMBER: "^-?\\d+$",
    WEB   : "^(https?:\\/\\/)?[\\w\\-]+(\\.[\\w\\-]+)+[/#?]?.*$",
    EMAIL : "^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
    RFC   : "^([A-ZÑ&]{3,4}) ?(?:- ?)?(\\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])) ?(?:- ?)?([A-Z\\d]{2})([A\\d])$",
}
