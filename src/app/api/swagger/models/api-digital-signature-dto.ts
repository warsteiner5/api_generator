/* tslint:disable */
/* eslint-disable */
import { ApiDetachedSignatureAltDto } from '../models/api-detached-signature';
import { ApiKeyValuePairOfGuidAndByteOfAltDto } from '../models/api-key-value-pair-of-guid-and-byte-of';
export type ApiDigitalSignatureDto = ApiDetachedSignatureAltDto & {
'FileDetachedSigns'?: Array<ApiKeyValuePairOfGuidAndByteOfAltDto> | null;
'IsNeedCompareDtos'?: boolean;
'PowerOfAttorneyId'?: string | null;
'PowerOfAttorneyRequired'?: boolean | null;
};
