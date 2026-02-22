import { ExternalDealsGetExternalDeal$Params } from '../../../swagger/fn/external-deals/external-deals-get-external-deal';

// @ts-ignore
export interface ExternalDealsGetExternalDealParams {
  id: number;
}

export function externalDealsGetExternalDealAdapter(params?: ExternalDealsGetExternalDealParams): ExternalDealsGetExternalDeal$Params {
  if (!params) {
    return {} as ExternalDealsGetExternalDeal$Params;
  }
  return {
      id: params.id,
  };
}
