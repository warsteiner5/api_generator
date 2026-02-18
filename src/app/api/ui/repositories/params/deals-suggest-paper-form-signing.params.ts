import { DealInfoRequest } from '../../models/deal-info-request.interface';
import { DealsSuggestPaperFormSigning$Params } from '../../../swagger/fn/deals/deals-suggest-paper-form-signing';
import { adaptApiDealInfoRequestDto } from '../../adapters/toDto/api-deal-info-request-dto.adapter';

export interface DealsSuggestPaperFormSigningParams {
  body?: DealInfoRequest;
}

export const dealsSuggestPaperFormSigningParamsAdapter = {
  adapt(params?: DealsSuggestPaperFormSigningParams): DealsSuggestPaperFormSigning$Params {
    if (!params) {
      return {} as DealsSuggestPaperFormSigning$Params;
    }
    return {
      body: adaptApiDealInfoRequestDto(params.body),
    };
  }
};
