import { DealInfoRequest } from '../../models/deal-info-request.interface';
import { DealSuggestElectronicFormSigning$Params } from '../../../swagger/fn/deal/deal-suggest-electronic-form-signing';
import { adaptApiDealInfoRequestDto } from '../../adapters/toDto/api-deal-info-request-dto.adapter';

export interface DealSuggestElectronicFormSigningParams {
  body?: DealInfoRequest;
}

export const dealSuggestElectronicFormSigningParamsAdapter = {
  adapt(params?: DealSuggestElectronicFormSigningParams): DealSuggestElectronicFormSigning$Params {
    if (!params) {
      return {} as DealSuggestElectronicFormSigning$Params;
    }
    return {
      body: adaptApiDealInfoRequestDto(params.body),
    };
  }
};
