import { ExternalDealsDeleteExternalDeal$Params } from '../../../swagger/fn/external-deals/external-deals-delete-external-deal';

// @ts-ignore
export interface ExternalDealsDeleteExternalDealParams {
  id: number;
}

export function externalDealsDeleteExternalDealAdapter(params?: ExternalDealsDeleteExternalDealParams): ExternalDealsDeleteExternalDeal$Params {
  if (!params) {
    return {} as ExternalDealsDeleteExternalDeal$Params;
  }
  return {
      id: params.id,
  };
}
