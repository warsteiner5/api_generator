import { ApiDifferenceProtocolBySupplierRequestAltDto } from '../../../swagger/models/api-difference-protocol-by-supplier-request';
import { DifferenceProtocolBySupplierRequestAlt } from '../../models/difference-protocol-by-supplier-request-alt.interface';

export const differenceProtocolBySupplierRequestAltAdapter = (source?: ApiDifferenceProtocolBySupplierRequestAltDto | null): DifferenceProtocolBySupplierRequestAlt => {
  return {
    fileGuids: source?.FileGuids,
    reason: source?.Reason,
  };
}
