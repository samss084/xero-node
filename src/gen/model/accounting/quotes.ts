/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2.7
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Quote } from '././quote';

export class Quotes {
    'quotes'?: Array<Quote>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "quotes",
            "baseName": "Quotes",
            "type": "Array<Quote>"
        }    ];

    static getAttributeTypeMap() {
        return Quotes.attributeTypeMap;
    }
}

