import { DealsRevokeDealBySupplier$Params } from '../../../swagger/fn/deals/deals-revoke-deal-by-supplier';
import { RevokeDealBySupplierRequestAlt } from '../../models/revoke-deal-by-supplier-request-alt.interface';
import { apiRevokeDealBySupplierRequestAltDtoAdapter } from '../../adapters/models/api-revoke-deal-by-supplier-request.adapter';

// @ts-ignore
export interface DealsRevokeDealBySupplierParams {
  id: number;
  body?: RevokeDealBySupplierRequestAlt;
}

export function dealsRevokeDealBySupplierAdapter(params?: DealsRevokeDealBySupplierParams): DealsRevokeDealBySupplier$Params {
  if (!params) {
    return {} as DealsRevokeDealBySupplier$Params;
  }
  return {
      id: params.id,
      body: apiRevokeDealBySupplierRequestAltDtoAdapter(params.body),
  };
}
