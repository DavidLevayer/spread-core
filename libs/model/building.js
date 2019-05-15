'use strict';

class Building {

    /**
     * 
     * @param {uuid} id
     * @param {string} name
     * @param {string} description
     * @param {number} level 
     * @param {Array} resourceMap 
     */
    constructor(id, name, description, level, resourceMap) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.level = level;
        this.resourceMap = resourceMap;
    }
}

module.exports = Building;