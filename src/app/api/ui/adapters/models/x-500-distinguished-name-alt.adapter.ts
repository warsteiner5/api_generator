import { ApiX500DistinguishedNameAltDto } from '../../../swagger/models/api-x-500-distinguished-name';
import { X500DistinguishedNameAlt } from '../../models/x-500-distinguished-name-alt.interface';
import { asnEncodedDataAltAdapter } from './asn-encoded-data-alt.adapter';

export const x500DistinguishedNameAltAdapter = (source?: ApiX500DistinguishedNameAltDto | null): X500DistinguishedNameAlt => {
  return {
    ...asnEncodedDataAltAdapter(source as unknown as Parameters<typeof asnEncodedDataAltAdapter>[0]),
    name: source?.Name,
  };
}
