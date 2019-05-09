'use strict';

const Resource = require('../../model/resource');

class ResourceState {

    constructor() {
        this.resources = [];
        this.resources.push(new Resource('sand', 0, 10));
        this.resources.push(new Resource('water', 0, 10));
        this.resources.push(new Resource('food', 0, 10));
        this.resources.push(new Resource('wood', 0, 10));
    }

    /**
     * 
     * @param {Resource} resource 
     */
    addResource(resource) {
        this.resources.push(resource);
    }
}

module.exports = ResourceState;