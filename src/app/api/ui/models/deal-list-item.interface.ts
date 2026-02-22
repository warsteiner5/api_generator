import { DealObjectEnum } from '../enums/deal-object.enum';
import { PurchaseMethodTypeEnum } from '../enums/purchase-method-type.enum';
import { TradeBusinessFlowEnum } from '../enums/trade-business-flow.enum';

// @ts-ignore
export interface DealListItem {
  additionalAgreementConclusionDate: string;
  additionalAgreementStateId: number;
  additionalAgreementStateName: string;
  businessFlowType: TradeBusinessFlowEnum;
  conclusionDate: string;
  customDealNumber: string;
  customerGuid: string;
  customerId: number;
  customerInn: string;
  customerName: string;
  dealNumber: string;
  dealObject: DealObjectEnum;
  dealSignedOutsideEShop: boolean;
  dealStateId: number;
  dealStateName: string;
  dealSubject: string;
  deliveryPlace: string;
  id: number;
  isExternal: boolean;
  isNonElectronicForm: boolean;
  isPriceWithVat: boolean;
  participantGuid: string;
  participantId: number;
  participantInn: string;
  participantName: string;
  price: number;
  purchaseMethodType: PurchaseMethodTypeEnum;
  signedOutOfEpReason: string;
  startPrice: number;
  sumVat: number;
  terminationReason: string;
  tradeId: number;
  tradeLotStateId: number;
  tradeLotStateName: string;
  tradeNumber: string;
  tradeOrganizerId: number;
  tradeOrganizerName: string;
}
