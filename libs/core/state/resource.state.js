'use strict';

const Resource = require('../../model/resource');

class ResourceState {

    constructor() {
        this.resources = [];
        this.resources.push(new Resource('bcfa872f-6634-4586-8bfe-ab81dd0b627c', 'sand', 0, 10));
        this.resources.push(new Resource('e470c5b4-8bcc-4963-bb56-9f96a1393c77', 'water', 0, 10));
        this.resources.push(new Resource('b4506f2f-31df-47fd-a72d-dae30743c1ff', 'food', 0, 10));
        this.resources.push(new Resource('f86bec64-891b-42c3-bec1-03929f2eaca9', 'wood', 0, 10));
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