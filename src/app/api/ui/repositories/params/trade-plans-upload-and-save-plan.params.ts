import { TradePlansUploadAndSavePlan$Params } from '../../../swagger/fn/trade-plans/trade-plans-upload-and-save-plan';

export interface TradePlansUploadAndSavePlanParams {
  guid: string;
}

export const tradePlansUploadAndSavePlanParamsAdapter = {
  adapt(params?: TradePlansUploadAndSavePlanParams): TradePlansUploadAndSavePlan$Params {
    if (!params) {
      return {} as TradePlansUploadAndSavePlan$Params;
    }
    return {
      guid: params.guid,
    };
  }
};
