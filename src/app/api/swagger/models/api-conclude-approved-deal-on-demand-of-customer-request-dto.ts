/* tslint:disable */
/* eslint-disable */
import { ApiSignatureForDealDto } from '../models/api-signature-for-deal-dto';
export interface ApiConcludeApprovedDealOnDemandOfCustomerRequestDto {
  OrganizationId?: number;
  SignatureForDealDto?: ApiSignatureForDealDto | null;
  UserId?: number;
}
