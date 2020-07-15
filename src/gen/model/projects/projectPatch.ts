/**
 * Xero Projects API
 * This is the Xero Projects API
 *
 * The version of the OpenAPI document: 2.2.7
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ProjectStatus } from '././projectStatus';

export class ProjectPatch {
    'status': ProjectStatus;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "ProjectStatus"
        }    ];

    static getAttributeTypeMap() {
        return ProjectPatch.attributeTypeMap;
    }
}

