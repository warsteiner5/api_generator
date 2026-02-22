import { ApiAsnEncodedDataAltDto } from '../../../swagger/models/api-asn-encoded-data';
import { AsnEncodedDataAlt } from '../../models/asn-encoded-data-alt.interface';
import { oidAltAdapter } from './oid-alt.adapter';

export const asnEncodedDataAltAdapter = (source?: ApiAsnEncodedDataAltDto | null): AsnEncodedDataAlt => {
  return {
    oid: source?.Oid === null ? undefined : oidAltAdapter(source?.Oid),
    rawData: source?.RawData,
  };
}
