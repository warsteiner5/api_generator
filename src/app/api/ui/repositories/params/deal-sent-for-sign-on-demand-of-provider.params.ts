import { DealSentForSignOnDemandOfProvider$Params } from '../../../swagger/fn/deal/deal-sent-for-sign-on-demand-of-provider';
import { SentForSignOnDemandOfProviderRequest } from '../../models/sent-for-sign-on-demand-of-provider-request.interface';
import { adaptApiSentForSignOnDemandOfProviderRequestDto } from '../../adapters/toDto/api-sent-for-sign-on-demand-of-provider-request-dto.adapter';

export interface DealSentForSignOnDemandOfProviderParams {
  body?: SentForSignOnDemandOfProviderRequest;
}

export const dealSentForSignOnDemandOfProviderParamsAdapter = {
  adapt(params?: DealSentForSignOnDemandOfProviderParams): DealSentForSignOnDemandOfProvider$Params {
    if (!params) {
      return {} as DealSentForSignOnDemandOfProvider$Params;
    }
    return {
      body: adaptApiSentForSignOnDemandOfProviderRequestDto(params.body),
    };
  }
};
