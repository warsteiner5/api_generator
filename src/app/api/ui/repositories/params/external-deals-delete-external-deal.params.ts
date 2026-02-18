import { ExternalDealsDeleteExternalDeal$Params } from '../../../swagger/fn/external-deals/external-deals-delete-external-deal';

export interface ExternalDealsDeleteExternalDealParams {
  id: number;
}

export const externalDealsDeleteExternalDealParamsAdapter = {
  adapt(params?: ExternalDealsDeleteExternalDealParams): ExternalDealsDeleteExternalDeal$Params {
    if (!params) {
      return {} as ExternalDealsDeleteExternalDeal$Params;
    }
    return {
      id: params.id,
    };
  }
};
