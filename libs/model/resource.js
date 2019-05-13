'use strict';

class Resource {

    /**
     * 
     * @param {uuid} id
     * @param {string} name 
     * @param {number} value 
     * @param {number} rate 
     */
    constructor(id, name, value, rate) {
        this.id = id;
        this.name = name;
        this.value = value;
        this.rate = rate;
    }
}

module.exports = Resource;