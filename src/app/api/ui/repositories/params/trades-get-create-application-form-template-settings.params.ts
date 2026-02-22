import { TradesGetCreateApplicationFormTemplateSettings$Params } from '../../../swagger/fn/trades/trades-get-create-application-form-template-settings';

// @ts-ignore
export interface TradesGetCreateApplicationFormTemplateSettingsParams {
  tradeId: number;
}

export function tradesGetCreateApplicationFormTemplateSettingsAdapter(params?: TradesGetCreateApplicationFormTemplateSettingsParams): TradesGetCreateApplicationFormTemplateSettings$Params {
  if (!params) {
    return {} as TradesGetCreateApplicationFormTemplateSettings$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
