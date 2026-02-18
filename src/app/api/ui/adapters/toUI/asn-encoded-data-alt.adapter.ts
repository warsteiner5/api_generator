import { ApiAsnEncodedDataAltDto } from '../../../swagger/models/api-asn-encoded-data';
import { AsnEncodedDataAlt } from '../../models/asn-encoded-data-alt.interface';
import { adaptOidAltToUI } from './oid-alt.adapter';

export function adaptAsnEncodedDataAltToUI(source?: ApiAsnEncodedDataAltDto | null): AsnEncodedDataAlt {
  return {
    oid: adaptOidAltToUI(source?.Oid),
    rawData: source?.RawData ?? '',
  };
}
