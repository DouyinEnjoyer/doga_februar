import { Manager } from "./manager.js";

class Table 
{
    /**
     * @type {Manager} manager
     */
    #manager
    /**
     * @type {HTMLTableSectionElement}
     */
    #tbody
    /**
     * 
     * @param {Array} headerArray 
     * @param {Manager} manager 
     */
    constructor(headerArray, manager)
    {
        this.#manager = manager
        const table = document.createElement("table")
        document.body.appendChild(table)
        const thead = document.createElement("thead")
        table.appendChild(thead)
        const trheader = document.createElement("tr")
        thead.appendChild(trheader)
        for (let a of headerArray)
        {
            const th1 = document.createElement("th")
            th1.innerText = a.name
            if (a.colspan)
            {th1.colSpan = a.colspan}
            if (a.rowspan)
            {th1.rowSpan = a.rowspan}
            trheader.appendChild(th1)
        }
        const tbody = document.createElement("tbody")
        table.appendChild(tbody)
        this.#tbody = tbody
    }
    /**
     * 
     * @callback Callback
     */
    setAppendElement(tableCallback)
    {
        this.#manager.addCallback = (element) =>
        {
            tableCallback(this.#tbody, element)
        }
    }
}
export {Table}