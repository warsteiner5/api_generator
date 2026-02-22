import { ApplicationDto2 } from '../../models/application-dto-2.interface';
import { TradesPublish$Params } from '../../../swagger/fn/trades/trades-publish';
import { apiApplicationDto2Adapter } from '../../adapters/models/api-application-dto-2.adapter';

// @ts-ignore
export interface TradesPublishParams {
  body?: ApplicationDto2;
}

export function tradesPublishAdapter(params?: TradesPublishParams): TradesPublish$Params {
  if (!params) {
    return {} as TradesPublish$Params;
  }
  return {
      body: apiApplicationDto2Adapter(params.body),
  };
}
