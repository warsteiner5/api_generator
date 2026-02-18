import { DealsUpdateDealDocumentsExternal$Params } from '../../../swagger/fn/deals/deals-update-deal-documents-external';
import { FullDeal } from '../../models/full-deal.interface';
import { adaptApiFullDealDto } from '../../adapters/toDto/api-full-deal-dto.adapter';

export interface DealsUpdateDealDocumentsExternalParams {
  body?: FullDeal;
}

export const dealsUpdateDealDocumentsExternalParamsAdapter = {
  adapt(params?: DealsUpdateDealDocumentsExternalParams): DealsUpdateDealDocumentsExternal$Params {
    if (!params) {
      return {} as DealsUpdateDealDocumentsExternal$Params;
    }
    return {
      body: adaptApiFullDealDto(params.body),
    };
  }
};
