import { SignatureForDeal } from './signature-for-deal.interface';

// @ts-ignore
export interface ApproveCustomerDealOnDemandOfProviderRequest {
  organizationId: number;
  signatureForDealDto: SignatureForDeal;
}
