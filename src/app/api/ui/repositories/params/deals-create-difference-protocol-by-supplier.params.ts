import { DealsCreateDifferenceProtocolBySupplier$Params } from '../../../swagger/fn/deals/deals-create-difference-protocol-by-supplier';
import { DifferenceProtocolBySupplierRequestAlt } from '../../models/difference-protocol-by-supplier-request-alt.interface';
import { adaptApiDifferenceProtocolBySupplierRequestAltDto } from '../../adapters/toDto/api-difference-protocol-by-supplier-request.adapter';

export interface DealsCreateDifferenceProtocolBySupplierParams {
  id: number;
  body?: DifferenceProtocolBySupplierRequestAlt;
}

export const dealsCreateDifferenceProtocolBySupplierParamsAdapter = {
  adapt(params?: DealsCreateDifferenceProtocolBySupplierParams): DealsCreateDifferenceProtocolBySupplier$Params {
    if (!params) {
      return {} as DealsCreateDifferenceProtocolBySupplier$Params;
    }
    return {
      id: params.id,
      body: adaptApiDifferenceProtocolBySupplierRequestAltDto(params.body),
    };
  }
};
