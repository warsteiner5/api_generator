import { ExternalDealGetExternalDealCardForOperator$Params } from '../../../swagger/fn/external-deal/external-deal-get-external-deal-card-for-operator';

export interface ExternalDealGetExternalDealCardForOperatorParams {
  dealId: number;
}

export const externalDealGetExternalDealCardForOperatorParamsAdapter = {
  adapt(params?: ExternalDealGetExternalDealCardForOperatorParams): ExternalDealGetExternalDealCardForOperator$Params {
    if (!params) {
      return {} as ExternalDealGetExternalDealCardForOperator$Params;
    }
    return {
      dealId: params.dealId,
    };
  }
};
