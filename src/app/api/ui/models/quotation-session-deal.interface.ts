import { DealStateEnum } from '../enums/deal-state.enum';

// @ts-ignore
export interface QuotationSessionDeal {
  dealId: number;
  dealState: DealStateEnum;
  participantFullName: string;
}
