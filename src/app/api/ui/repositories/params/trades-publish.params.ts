import { ApplicationDto2 } from '../../models/application-dto-2.interface';
import { TradesPublish$Params } from '../../../swagger/fn/trades/trades-publish';
import { adaptApiApplicationDto2 } from '../../adapters/toDto/api-application-dto-2.adapter';

export interface TradesPublishParams {
  body?: ApplicationDto2;
}

export const tradesPublishParamsAdapter = {
  adapt(params?: TradesPublishParams): TradesPublish$Params {
    if (!params) {
      return {} as TradesPublish$Params;
    }
    return {
      body: adaptApiApplicationDto2(params.body),
    };
  }
};
