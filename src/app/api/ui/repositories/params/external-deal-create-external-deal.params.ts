import { ExternalDealCreateExternalDeal$Params } from '../../../swagger/fn/external-deal/external-deal-create-external-deal';
import { ExternalDealDtoForPublish } from '../../models/external-deal-dto-for-publish.interface';
import { apiExternalDealDtoForPublishAdapter } from '../../adapters/models/api-external-deal-dto-for-publish.adapter';

// @ts-ignore
export interface ExternalDealCreateExternalDealParams {
  body?: ExternalDealDtoForPublish;
}

export function externalDealCreateExternalDealAdapter(params?: ExternalDealCreateExternalDealParams): ExternalDealCreateExternalDeal$Params {
  if (!params) {
    return {} as ExternalDealCreateExternalDeal$Params;
  }
  return {
      body: apiExternalDealDtoForPublishAdapter(params.body),
  };
}
