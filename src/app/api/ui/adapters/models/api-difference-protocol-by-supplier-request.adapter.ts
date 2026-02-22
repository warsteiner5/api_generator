import { DifferenceProtocolBySupplierRequestAlt } from '../../models/difference-protocol-by-supplier-request-alt.interface';
import { ApiDifferenceProtocolBySupplierRequestAltDto } from '../../../swagger/models/api-difference-protocol-by-supplier-request';

export const apiDifferenceProtocolBySupplierRequestAltDtoAdapter = (source?: DifferenceProtocolBySupplierRequestAlt | null): ApiDifferenceProtocolBySupplierRequestAltDto => {
  return {
    FileGuids: source?.fileGuids,
    Reason: source?.reason,
  };
}
