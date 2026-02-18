import { ExternalDealGetExternalDealCard$Params } from '../../../swagger/fn/external-deal/external-deal-get-external-deal-card';

export interface ExternalDealGetExternalDealCardParams {
  dealId: number;
}

export const externalDealGetExternalDealCardParamsAdapter = {
  adapt(params?: ExternalDealGetExternalDealCardParams): ExternalDealGetExternalDealCard$Params {
    if (!params) {
      return {} as ExternalDealGetExternalDealCard$Params;
    }
    return {
      dealId: params.dealId,
    };
  }
};
