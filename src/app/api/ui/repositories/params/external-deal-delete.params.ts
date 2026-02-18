import { ExternalDealDelete$Params } from '../../../swagger/fn/external-deal/external-deal-delete';

export interface ExternalDealDeleteParams {
  id: number;
}

export const externalDealDeleteParamsAdapter = {
  adapt(params?: ExternalDealDeleteParams): ExternalDealDelete$Params {
    if (!params) {
      return {} as ExternalDealDelete$Params;
    }
    return {
      id: params.id,
    };
  }
};
