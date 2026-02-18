import { DealSuggestPaperFormSigningOnDemandOfProvider$Params } from '../../../swagger/fn/deal/deal-suggest-paper-form-signing-on-demand-of-provider';
import { SuggestPaperFormSigningOnDemandOfProviderRequest } from '../../models/suggest-paper-form-signing-on-demand-of-provider-request.interface';
import { adaptApiSuggestPaperFormSigningOnDemandOfProviderRequestDto } from '../../adapters/toDto/api-suggest-paper-form-signing-on-demand-of-provider-request-dto.adapter';

export interface DealSuggestPaperFormSigningOnDemandOfProviderParams {
  body?: SuggestPaperFormSigningOnDemandOfProviderRequest;
}

export const dealSuggestPaperFormSigningOnDemandOfProviderParamsAdapter = {
  adapt(params?: DealSuggestPaperFormSigningOnDemandOfProviderParams): DealSuggestPaperFormSigningOnDemandOfProvider$Params {
    if (!params) {
      return {} as DealSuggestPaperFormSigningOnDemandOfProvider$Params;
    }
    return {
      body: adaptApiSuggestPaperFormSigningOnDemandOfProviderRequestDto(params.body),
    };
  }
};
