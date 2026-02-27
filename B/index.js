import data from "./data.json" with {type: "json"}
import { Manager } from "./manager.js";
import { Table } from "./table.js";
import { FormField, FormController } from "./form.js";
import { createTableCell, tbodyRenderColspan, createTable, createInputField, createForm, tbodyRenderRowspan } from "./functions.js";


const managerCol = new Manager()
const tableCol = new Table(data.colspanHeaderArray, managerCol)
tableCol.setAppendElement(tbodyRenderColspan)
for (let a of data.colspanDataArr)
{
    managerCol.addElement(a)

}

new FormController(data.colspanFormFieldList,managerCol)


const managerRow = new Manager()
const tableRow = new Table(data.rowspanHeaderArray, managerRow)
tableRow.setAppendElement(tbodyRenderColspan)
for (let a of data.rowspanTableArray)
{
    managerRow.addElement(a)

}

new FormController(data.rowspanFormFieldList,managerRow)