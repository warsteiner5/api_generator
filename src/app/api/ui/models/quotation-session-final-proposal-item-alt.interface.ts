import { OkeiCodeMarket } from './okei-code-market.interface';

export interface QuotationSessionFinalProposalItemAlt {
  id: number;
  name: string;
  okei: OkeiCodeMarket;
  quantity: number;
  quotation: number;
}
