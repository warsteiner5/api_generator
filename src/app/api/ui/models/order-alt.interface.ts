import { AdditionalRequirementAlt } from './additional-requirement-alt.interface';
import { ContactInformation } from './contact-information.interface';
import { DeliveryMethodAltEnum } from '../enums/delivery-method-alt.enum';
import { OrderDetailAlt } from './order-detail-alt.interface';
import { OrderDocument } from './order-document.interface';
import { ZmoFinanceSourceEnum } from '../enums/zmo-finance-source.enum';

// @ts-ignore
export interface OrderAlt {
  additionalRequirements: AdditionalRequirementAlt[];
  comment: string;
  contactInfo: ContactInformation;
  currencyCode: string;
  dealConclusionTermInfo: string;
  deliveryMethod: DeliveryMethodAltEnum;
  deliveryPlace: string;
  deliveryTerms: string;
  description: string;
  id: number;
  initialPrice: number;
  isAutoCompleteDeal: boolean;
  isContractInElectronicForm: boolean;
  isCustomPrice: boolean;
  isFederalLawsEnable: boolean;
  isParentContractNumberNotSpecified: boolean;
  isSanctionedPurchase: boolean;
  isUnitBidding: boolean;
  kladrRegionCode: string;
  maxDealPrice: number;
  orderDetails: OrderDetailAlt[];
  orderDocuments: OrderDocument[];
  orderName: string;
  parentContractNumber: string;
  parentNotTookPlaceTradeId: number;
  planedDealSignDate: string;
  zmoFinanceSource: ZmoFinanceSourceEnum;
  zmoFzType: number;
}
