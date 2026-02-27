import { Manager } from "./manager.js";


class FormController
{
    /**
     * @type {FormField}
     */
    #formFieldElemList
    /**
     * @type {Manager}
     */
    #manager
    /**
     * @type {HTMLFormElement}
     */
    #form
    /**
     * 
     * @param {FormField[]} FormFields 
     * @param {Manager} manager 
     */
    constructor(FormFields, manager)
    {
        this.#formFieldElemList = []
        this.#manager = manager
        const form = document.createElement("form")
        document.body.appendChild(form)
        for (let b of FormFields)
        {
            const a = new FormField(b.label,b.name,b.id,b.required,form)
            this.#formFieldElemList.push(a)
        }
        const button = document.createElement("button")
        button.innerText = "gomb"
        form.appendChild(button)
        form.addEventListener("submit", (e) =>
        {
            e.preventDefault()
            const elem = this.#createElement()
            if (elem)
            {
                this.#manager.addElement(elem)
            }
        })

    }
    /**
     * 
     * @returns {import("./functions.js").ColspanType | import("./functions.js").RowspanType | null}
     */
    #createElement()
    {
        let result = {}
        let valid = true
        for (let a of this.#formFieldElemList)
        {
            if(a.validate())
            {
                result[a.name] = a.value
            }
            else
            {
                valid = false
            }
        }
        if (valid)
        {
            return result
        }
        else
        {
            return null
        }
    }
}
class FormField
{
    #name
    #required
    #input
    #errorDiv
    get value()
    {
        this.#input.value ? this.#input.value : undefined
    }
    get name()
    {
        this.#name
    }
    /**
     * 
     * @param {string} label 
     * @param {string} name 
     * @param {string} id 
     * @param {boolean} required 
     * @param {HTMLFormElement} parent 
     */
    constructor(label,name,id,required, parent)
    {
        const div = document.createElement("div")
        parent.appendChild(div)
        const labelElem = document.createElement("label")
        labelElem.innerText = label
        div.appendChild(labelElem)
        div.appendChild(document.createElement("br"))
        const input = document.createElement("input")
        input.name = name
        input.id = id
        this.#input = input
        this.#name = name
        
        div.appendChild(input)
        const errorDiv = document.createElement("div")
        errorDiv.classList.add("error")
        this.#errorDiv = errorDiv
        this.#required = required
        div.appendChild(errorDiv)


    }
    /**
     * 
     * @returns {boolean}
     */
    validate()
    {
        let valid = true
        if(this.#required && !this.value)
        {
            this.#errorDiv.innerText = "kotelező"
            valid = false
        }
        else
        {
            this.#errorDiv.innerText = ""
        }
        return valid
    }
}
export {FormField, FormController}