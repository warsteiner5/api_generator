import { DealsConcludeApprovedDeal$Params } from '../../../swagger/fn/deals/deals-conclude-approved-deal';
import { SignatureForDeal } from '../../models/signature-for-deal.interface';
import { adaptApiSignatureForDealDto } from '../../adapters/toDto/api-signature-for-deal-dto.adapter';

export interface DealsConcludeApprovedDealParams {
  body?: SignatureForDeal;
}

export const dealsConcludeApprovedDealParamsAdapter = {
  adapt(params?: DealsConcludeApprovedDealParams): DealsConcludeApprovedDeal$Params {
    if (!params) {
      return {} as DealsConcludeApprovedDeal$Params;
    }
    return {
      body: adaptApiSignatureForDealDto(params.body),
    };
  }
};
