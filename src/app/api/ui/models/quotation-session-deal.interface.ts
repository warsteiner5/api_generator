import { DealStateEnum } from '../enums/deal-state.enum';

export interface QuotationSessionDeal {
  dealId: number;
  dealState: DealStateEnum;
  participantFullName: string;
}
