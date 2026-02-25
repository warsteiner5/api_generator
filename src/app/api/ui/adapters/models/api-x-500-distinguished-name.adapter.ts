import { X500DistinguishedNameAlt } from '../../models/x-500-distinguished-name-alt.interface';
import { ApiX500DistinguishedNameAltDto } from '../../../swagger/models/api-x-500-distinguished-name';
import { apiAsnEncodedDataAltDtoAdapter } from './api-asn-encoded-data.adapter';

export const apiX500DistinguishedNameAltDtoAdapter = (source?: X500DistinguishedNameAlt | null): ApiX500DistinguishedNameAltDto => {
  return {
    ...apiAsnEncodedDataAltDtoAdapter(source as unknown as Parameters<typeof apiAsnEncodedDataAltDtoAdapter>[0]),
    Name: source?.name,
  };
}
