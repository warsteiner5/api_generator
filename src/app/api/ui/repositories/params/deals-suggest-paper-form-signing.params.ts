import { DealInfoRequest } from '../../models/deal-info-request.interface';
import { DealsSuggestPaperFormSigning$Params } from '../../../swagger/fn/deals/deals-suggest-paper-form-signing';
import { apiDealInfoRequestDtoAdapter } from '../../adapters/models/api-deal-info-request-dto.adapter';

// @ts-ignore
export interface DealsSuggestPaperFormSigningParams {
  body?: DealInfoRequest;
}

export function dealsSuggestPaperFormSigningAdapter(params?: DealsSuggestPaperFormSigningParams): DealsSuggestPaperFormSigning$Params {
  if (!params) {
    return {} as DealsSuggestPaperFormSigning$Params;
  }
  return {
      body: apiDealInfoRequestDtoAdapter(params.body),
  };
}
