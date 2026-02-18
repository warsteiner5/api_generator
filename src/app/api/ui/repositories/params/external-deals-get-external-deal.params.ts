import { ExternalDealsGetExternalDeal$Params } from '../../../swagger/fn/external-deals/external-deals-get-external-deal';

export interface ExternalDealsGetExternalDealParams {
  id: number;
}

export const externalDealsGetExternalDealParamsAdapter = {
  adapt(params?: ExternalDealsGetExternalDealParams): ExternalDealsGetExternalDeal$Params {
    if (!params) {
      return {} as ExternalDealsGetExternalDeal$Params;
    }
    return {
      id: params.id,
    };
  }
};
