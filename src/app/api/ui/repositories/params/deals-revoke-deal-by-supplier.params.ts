import { DealsRevokeDealBySupplier$Params } from '../../../swagger/fn/deals/deals-revoke-deal-by-supplier';
import { RevokeDealBySupplierRequestAlt } from '../../models/revoke-deal-by-supplier-request-alt.interface';
import { adaptApiRevokeDealBySupplierRequestAltDto } from '../../adapters/toDto/api-revoke-deal-by-supplier-request.adapter';

export interface DealsRevokeDealBySupplierParams {
  id: number;
  body?: RevokeDealBySupplierRequestAlt;
}

export const dealsRevokeDealBySupplierParamsAdapter = {
  adapt(params?: DealsRevokeDealBySupplierParams): DealsRevokeDealBySupplier$Params {
    if (!params) {
      return {} as DealsRevokeDealBySupplier$Params;
    }
    return {
      id: params.id,
      body: adaptApiRevokeDealBySupplierRequestAltDto(params.body),
    };
  }
};
