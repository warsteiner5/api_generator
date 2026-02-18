import { ApplicationDto2 } from '../../models/application-dto-2.interface';
import { TradesValidate$Params } from '../../../swagger/fn/trades/trades-validate';
import { adaptApiApplicationDto2 } from '../../adapters/toDto/api-application-dto-2.adapter';

export interface TradesValidateParams {
  body?: ApplicationDto2;
}

export const tradesValidateParamsAdapter = {
  adapt(params?: TradesValidateParams): TradesValidate$Params {
    if (!params) {
      return {} as TradesValidate$Params;
    }
    return {
      body: adaptApiApplicationDto2(params.body),
    };
  }
};
