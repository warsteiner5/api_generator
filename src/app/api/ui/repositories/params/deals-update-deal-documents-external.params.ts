import { DealsUpdateDealDocumentsExternal$Params } from '../../../swagger/fn/deals/deals-update-deal-documents-external';
import { FullDeal } from '../../models/full-deal.interface';
import { apiFullDealDtoAdapter } from '../../adapters/models/api-full-deal-dto.adapter';

// @ts-ignore
export interface DealsUpdateDealDocumentsExternalParams {
  body?: FullDeal;
}

export function dealsUpdateDealDocumentsExternalAdapter(params?: DealsUpdateDealDocumentsExternalParams): DealsUpdateDealDocumentsExternal$Params {
  if (!params) {
    return {} as DealsUpdateDealDocumentsExternal$Params;
  }
  return {
      body: apiFullDealDtoAdapter(params.body),
  };
}
