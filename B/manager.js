class Manager
{
    /**
     * @type {Array}
     */
    #dataArray
    #addCallback
    /**
     * 
     * @callback addCallback
     */
    set addCallback(callback)
    {
        this.#addCallback = (callback)
    }
    /**
     * @type {Array}
     */
    constructor()
    {
        this.#dataArray = []
    }
    /**
     * 
     * @param {string} elem 
     */
    addElement(elem)
    {
        this.#dataArray.push(elem)
        if(this.#addCallback)
        {
            this.#addCallback(elem)
        }
    }

}
export {Manager}