import { DealConcludeApprovedDeal$Params } from '../../../swagger/fn/deal/deal-conclude-approved-deal';
import { SignatureForDeal } from '../../models/signature-for-deal.interface';
import { adaptApiSignatureForDealDto } from '../../adapters/toDto/api-signature-for-deal-dto.adapter';

export interface DealConcludeApprovedDealParams {
  body?: SignatureForDeal;
}

export const dealConcludeApprovedDealParamsAdapter = {
  adapt(params?: DealConcludeApprovedDealParams): DealConcludeApprovedDeal$Params {
    if (!params) {
      return {} as DealConcludeApprovedDeal$Params;
    }
    return {
      body: adaptApiSignatureForDealDto(params.body),
    };
  }
};
