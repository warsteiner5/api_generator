import { DealInfoRequest } from '../../models/deal-info-request.interface';
import { DealSuggestPaperFormSigning$Params } from '../../../swagger/fn/deal/deal-suggest-paper-form-signing';
import { apiDealInfoRequestDtoAdapter } from '../../adapters/models/api-deal-info-request-dto.adapter';

// @ts-ignore
export interface DealSuggestPaperFormSigningParams {
  body?: DealInfoRequest;
}

export function dealSuggestPaperFormSigningAdapter(params?: DealSuggestPaperFormSigningParams): DealSuggestPaperFormSigning$Params {
  if (!params) {
    return {} as DealSuggestPaperFormSigning$Params;
  }
  return {
      body: apiDealInfoRequestDtoAdapter(params.body),
  };
}
