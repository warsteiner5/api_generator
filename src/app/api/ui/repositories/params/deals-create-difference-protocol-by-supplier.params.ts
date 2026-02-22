import { DealsCreateDifferenceProtocolBySupplier$Params } from '../../../swagger/fn/deals/deals-create-difference-protocol-by-supplier';
import { DifferenceProtocolBySupplierRequestAlt } from '../../models/difference-protocol-by-supplier-request-alt.interface';
import { apiDifferenceProtocolBySupplierRequestAltDtoAdapter } from '../../adapters/models/api-difference-protocol-by-supplier-request.adapter';

// @ts-ignore
export interface DealsCreateDifferenceProtocolBySupplierParams {
  id: number;
  body?: DifferenceProtocolBySupplierRequestAlt;
}

export function dealsCreateDifferenceProtocolBySupplierAdapter(params?: DealsCreateDifferenceProtocolBySupplierParams): DealsCreateDifferenceProtocolBySupplier$Params {
  if (!params) {
    return {} as DealsCreateDifferenceProtocolBySupplier$Params;
  }
  return {
      id: params.id,
      body: apiDifferenceProtocolBySupplierRequestAltDtoAdapter(params.body),
  };
}
