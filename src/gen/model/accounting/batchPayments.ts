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

import { BatchPayment } from '././batchPayment';

export class BatchPayments {
    'batchPayments'?: Array<BatchPayment>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "batchPayments",
            "baseName": "BatchPayments",
            "type": "Array<BatchPayment>"
        }    ];

    static getAttributeTypeMap() {
        return BatchPayments.attributeTypeMap;
    }
}

