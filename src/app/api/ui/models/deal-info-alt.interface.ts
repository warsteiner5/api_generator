import { DealFormEnum } from '../enums/deal-form.enum';
import { DealObjectEnum } from '../enums/deal-object.enum';
import { DealStateEnum } from '../enums/deal-state.enum';

// @ts-ignore
export interface DealInfoAlt {
  conclusionDate: string;
  customerId: number;
  customerName: string;
  dealForm: DealFormEnum;
  dealFormName: string;
  dealObject: DealObjectEnum;
  dealSignedOutsideEShop: boolean;
  dealState: DealStateEnum;
  dealStateName: string;
  dealSubject: string;
  id: number;
  initialPrice: number;
  participantId: number;
  participantInn: string;
  participantName: string;
  participantWarningMessage: string;
  price: number;
  priceWarningMessage: string;
  tradeNumber: number;
  tradeOrganizerName: string;
}
