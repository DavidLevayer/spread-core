'use strict';

class Resource {

    /**
     * 
     * @param {string} name 
     * @param {number} value 
     * @param {number} rate 
     */
    constructor(name, value, rate) {
        this.name = name;
        this.value = value;
        this.rate = rate;
    }
}

module.exports = Resource;