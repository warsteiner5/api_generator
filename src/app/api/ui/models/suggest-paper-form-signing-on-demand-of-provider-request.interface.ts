import { DealObjectEnum } from '../enums/deal-object.enum';

// @ts-ignore
export interface SuggestPaperFormSigningOnDemandOfProviderRequest {
  dealId: number;
  dealObject: DealObjectEnum;
  organizationId: number;
}
