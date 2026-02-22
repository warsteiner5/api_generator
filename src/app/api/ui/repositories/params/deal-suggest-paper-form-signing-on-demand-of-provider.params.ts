import { DealSuggestPaperFormSigningOnDemandOfProvider$Params } from '../../../swagger/fn/deal/deal-suggest-paper-form-signing-on-demand-of-provider';
import { SuggestPaperFormSigningOnDemandOfProviderRequest } from '../../models/suggest-paper-form-signing-on-demand-of-provider-request.interface';
import { apiSuggestPaperFormSigningOnDemandOfProviderRequestDtoAdapter } from '../../adapters/models/api-suggest-paper-form-signing-on-demand-of-provider-request-dto.adapter';

// @ts-ignore
export interface DealSuggestPaperFormSigningOnDemandOfProviderParams {
  body?: SuggestPaperFormSigningOnDemandOfProviderRequest;
}

export function dealSuggestPaperFormSigningOnDemandOfProviderAdapter(params?: DealSuggestPaperFormSigningOnDemandOfProviderParams): DealSuggestPaperFormSigningOnDemandOfProvider$Params {
  if (!params) {
    return {} as DealSuggestPaperFormSigningOnDemandOfProvider$Params;
  }
  return {
      body: apiSuggestPaperFormSigningOnDemandOfProviderRequestDtoAdapter(params.body),
  };
}
