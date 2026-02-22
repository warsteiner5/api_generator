import { DealSentForSignOnDemandOfProvider$Params } from '../../../swagger/fn/deal/deal-sent-for-sign-on-demand-of-provider';
import { SentForSignOnDemandOfProviderRequest } from '../../models/sent-for-sign-on-demand-of-provider-request.interface';
import { apiSentForSignOnDemandOfProviderRequestDtoAdapter } from '../../adapters/models/api-sent-for-sign-on-demand-of-provider-request-dto.adapter';

// @ts-ignore
export interface DealSentForSignOnDemandOfProviderParams {
  body?: SentForSignOnDemandOfProviderRequest;
}

export function dealSentForSignOnDemandOfProviderAdapter(params?: DealSentForSignOnDemandOfProviderParams): DealSentForSignOnDemandOfProvider$Params {
  if (!params) {
    return {} as DealSentForSignOnDemandOfProvider$Params;
  }
  return {
      body: apiSentForSignOnDemandOfProviderRequestDtoAdapter(params.body),
  };
}
