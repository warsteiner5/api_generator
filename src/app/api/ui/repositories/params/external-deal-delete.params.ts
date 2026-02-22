import { ExternalDealDelete$Params } from '../../../swagger/fn/external-deal/external-deal-delete';

// @ts-ignore
export interface ExternalDealDeleteParams {
  id: number;
}

export function externalDealDeleteAdapter(params?: ExternalDealDeleteParams): ExternalDealDelete$Params {
  if (!params) {
    return {} as ExternalDealDelete$Params;
  }
  return {
      id: params.id,
  };
}
