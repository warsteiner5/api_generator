import { StopListItemCheckIfIamBanned$Params } from '../../../swagger/fn/stop-list-item/stop-list-item-check-if-iam-banned';

export interface StopListItemCheckIfIamBannedParams {
  customerId: number;
}

export const stopListItemCheckIfIamBannedParamsAdapter = {
  adapt(params?: StopListItemCheckIfIamBannedParams): StopListItemCheckIfIamBanned$Params {
    if (!params) {
      return {} as StopListItemCheckIfIamBanned$Params;
    }
    return {
      customerId: params.customerId,
    };
  }
};
