import { AsnEncodedDataAlt } from '../../models/asn-encoded-data-alt.interface';
import { ApiAsnEncodedDataAltDto } from '../../../swagger/models/api-asn-encoded-data';
import { adaptApiOidAltDto } from './api-oid.adapter';

export function adaptApiAsnEncodedDataAltDto(source?: AsnEncodedDataAlt | null): ApiAsnEncodedDataAltDto {
  return {
    Oid: adaptApiOidAltDto(source?.oid),
    RawData: source?.rawData,
  };
}
