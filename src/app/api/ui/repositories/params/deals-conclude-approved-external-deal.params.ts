import { DealsConcludeApprovedExternalDeal$Params } from '../../../swagger/fn/deals/deals-conclude-approved-external-deal';
import { SignatureForDeal } from '../../models/signature-for-deal.interface';
import { adaptApiSignatureForDealDto } from '../../adapters/toDto/api-signature-for-deal-dto.adapter';

export interface DealsConcludeApprovedExternalDealParams {
  dealId: number;
  organizationId: number;
  userId: number;
  body?: SignatureForDeal;
}

export const dealsConcludeApprovedExternalDealParamsAdapter = {
  adapt(params?: DealsConcludeApprovedExternalDealParams): DealsConcludeApprovedExternalDeal$Params {
    if (!params) {
      return {} as DealsConcludeApprovedExternalDeal$Params;
    }
    return {
      dealId: params.dealId,
      organizationId: params.organizationId,
      userId: params.userId,
      body: adaptApiSignatureForDealDto(params.body),
    };
  }
};
