import { TradePlansUploadAndSavePlan$Params } from '../../../swagger/fn/trade-plans/trade-plans-upload-and-save-plan';

// @ts-ignore
export interface TradePlansUploadAndSavePlanParams {
  guid: string;
}

export function tradePlansUploadAndSavePlanAdapter(params?: TradePlansUploadAndSavePlanParams): TradePlansUploadAndSavePlan$Params {
  if (!params) {
    return {} as TradePlansUploadAndSavePlan$Params;
  }
  return {
      guid: params.guid,
  };
}
