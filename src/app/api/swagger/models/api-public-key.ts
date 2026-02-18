/* tslint:disable */
/* eslint-disable */
import { ApiAsnEncodedDataAltDto } from '../models/api-asn-encoded-data';
import { ApiAsymmetricAlgorithmAltDto } from '../models/api-asymmetric-algorithm';
import { ApiOidAltDto } from '../models/api-oid';
export interface ApiPublicKeyAltDto {
  EncodedKeyValue?: ApiAsnEncodedDataAltDto | null;
  EncodedParameters?: ApiAsnEncodedDataAltDto | null;
  Key?: ApiAsymmetricAlgorithmAltDto | null;
  Oid?: ApiOidAltDto | null;
}
