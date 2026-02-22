import { ApplicationDto2 } from '../../models/application-dto-2.interface';
import { TradesValidate$Params } from '../../../swagger/fn/trades/trades-validate';
import { apiApplicationDto2Adapter } from '../../adapters/models/api-application-dto-2.adapter';

// @ts-ignore
export interface TradesValidateParams {
  body?: ApplicationDto2;
}

export function tradesValidateAdapter(params?: TradesValidateParams): TradesValidate$Params {
  if (!params) {
    return {} as TradesValidate$Params;
  }
  return {
      body: apiApplicationDto2Adapter(params.body),
  };
}
