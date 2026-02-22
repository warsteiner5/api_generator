import { AsnEncodedDataAlt } from '../../models/asn-encoded-data-alt.interface';
import { ApiAsnEncodedDataAltDto } from '../../../swagger/models/api-asn-encoded-data';
import { apiOidAltDtoAdapter } from './api-oid.adapter';

export const apiAsnEncodedDataAltDtoAdapter = (source?: AsnEncodedDataAlt | null): ApiAsnEncodedDataAltDto => {
  return {
    Oid: source?.oid === null ? undefined : apiOidAltDtoAdapter(source?.oid),
    RawData: source?.rawData,
  };
}
