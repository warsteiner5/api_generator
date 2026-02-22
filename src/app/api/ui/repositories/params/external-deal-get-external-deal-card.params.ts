import { ExternalDealGetExternalDealCard$Params } from '../../../swagger/fn/external-deal/external-deal-get-external-deal-card';

// @ts-ignore
export interface ExternalDealGetExternalDealCardParams {
  dealId: number;
}

export function externalDealGetExternalDealCardAdapter(params?: ExternalDealGetExternalDealCardParams): ExternalDealGetExternalDealCard$Params {
  if (!params) {
    return {} as ExternalDealGetExternalDealCard$Params;
  }
  return {
      dealId: params.dealId,
  };
}
