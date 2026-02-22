import { DealInfoRequest } from '../../models/deal-info-request.interface';
import { DealSuggestElectronicFormSigning$Params } from '../../../swagger/fn/deal/deal-suggest-electronic-form-signing';
import { apiDealInfoRequestDtoAdapter } from '../../adapters/models/api-deal-info-request-dto.adapter';

// @ts-ignore
export interface DealSuggestElectronicFormSigningParams {
  body?: DealInfoRequest;
}

export function dealSuggestElectronicFormSigningAdapter(params?: DealSuggestElectronicFormSigningParams): DealSuggestElectronicFormSigning$Params {
  if (!params) {
    return {} as DealSuggestElectronicFormSigning$Params;
  }
  return {
      body: apiDealInfoRequestDtoAdapter(params.body),
  };
}
