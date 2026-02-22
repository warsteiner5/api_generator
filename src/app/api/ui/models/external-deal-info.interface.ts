import { DealDocument } from './deal-document.interface';
import { DealStateEnum } from '../enums/deal-state.enum';

// @ts-ignore
export interface ExternalDealInfo {
  conclusionDate: string;
  customerOrganizationFullName: string;
  customerOrganizationPostalAddress: string;
  customerOrganizationRegNumber: string;
  dealCustomNumber: string;
  documents: DealDocument[];
  executionFrom: string;
  executionTo: string;
  id: number;
  isElectronicForm: boolean;
  participantOrganizationId: string;
  participantOrganizationName: string;
  price: number;
  signByCustomer: string;
  signBySupplier: string;
  state: DealStateEnum;
  tradeName: string;
  tradeNotificationNumber: string;
}
