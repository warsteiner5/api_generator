import { SignatureForDeal } from './signature-for-deal.interface';

export interface ApproveCustomerDealOnDemandOfProviderRequest {
  organizationId: number;
  signatureForDealDto: SignatureForDeal;
}
