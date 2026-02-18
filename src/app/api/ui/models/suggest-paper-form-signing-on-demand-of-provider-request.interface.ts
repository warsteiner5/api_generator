import { DealObjectEnum } from '../enums/deal-object.enum';

export interface SuggestPaperFormSigningOnDemandOfProviderRequest {
  dealId: number;
  dealObject: DealObjectEnum;
  organizationId: number;
}
