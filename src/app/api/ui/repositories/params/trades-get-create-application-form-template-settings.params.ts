import { TradesGetCreateApplicationFormTemplateSettings$Params } from '../../../swagger/fn/trades/trades-get-create-application-form-template-settings';

export interface TradesGetCreateApplicationFormTemplateSettingsParams {
  tradeId: number;
}

export const tradesGetCreateApplicationFormTemplateSettingsParamsAdapter = {
  adapt(params?: TradesGetCreateApplicationFormTemplateSettingsParams): TradesGetCreateApplicationFormTemplateSettings$Params {
    if (!params) {
      return {} as TradesGetCreateApplicationFormTemplateSettings$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
