import { ExternalDealGetExternalDealCardForOperator$Params } from '../../../swagger/fn/external-deal/external-deal-get-external-deal-card-for-operator';

// @ts-ignore
export interface ExternalDealGetExternalDealCardForOperatorParams {
  dealId: number;
}

export function externalDealGetExternalDealCardForOperatorAdapter(params?: ExternalDealGetExternalDealCardForOperatorParams): ExternalDealGetExternalDealCardForOperator$Params {
  if (!params) {
    return {} as ExternalDealGetExternalDealCardForOperator$Params;
  }
  return {
      dealId: params.dealId,
  };
}
