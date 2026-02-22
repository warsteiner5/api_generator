import { DealStateEnum } from '../enums/deal-state.enum';

// @ts-ignore
export interface HmaoExternalDealInfo {
  conclusionDate: string;
  contractSignDate: string;
  customerId: number;
  customerName: string;
  dealCustomNumber: string;
  dealState: DealStateEnum;
  dealStateString: string;
  id: number;
  isNonElectronicForm: boolean;
  participantId: number;
  participantName: string;
  price: number;
  signByProviderDate: string;
  tradeId: number;
  tradeName: string;
  tradeOrganizerName: string;
}
