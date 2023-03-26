'use strict';

/**
 * address-dictionary service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::address-dictionary.address-dictionary');
