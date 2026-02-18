import { DealInfoRequest } from '../../models/deal-info-request.interface';
import { DealSuggestPaperFormSigning$Params } from '../../../swagger/fn/deal/deal-suggest-paper-form-signing';
import { adaptApiDealInfoRequestDto } from '../../adapters/toDto/api-deal-info-request-dto.adapter';

export interface DealSuggestPaperFormSigningParams {
  body?: DealInfoRequest;
}

export const dealSuggestPaperFormSigningParamsAdapter = {
  adapt(params?: DealSuggestPaperFormSigningParams): DealSuggestPaperFormSigning$Params {
    if (!params) {
      return {} as DealSuggestPaperFormSigning$Params;
    }
    return {
      body: adaptApiDealInfoRequestDto(params.body),
    };
  }
};
