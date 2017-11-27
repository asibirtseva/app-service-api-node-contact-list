'use strict';
// var dataProvider = require('../data/contacts.js');

var repository = require('../lib/contactRepository');
/**
 * Operations on /contacts
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: 
     * produces: application/json, text/json
     * responses: 200
     */
    get: function contacts_get(req, res) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
       
           
            res.json(repository.all())
    }
};
