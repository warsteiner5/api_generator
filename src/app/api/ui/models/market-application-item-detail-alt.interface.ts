import { CommissionDecisionStatusEnum } from '../enums/commission-decision-status.enum';
import { ManufactureTypeEnum } from '../enums/manufacture-type.enum';
import { MeetsRequirementsEnum } from '../enums/meets-requirements.enum';

export interface MarketApplicationItemDetailAlt {
  countryConfirmation: string;
  decisionStatus: CommissionDecisionStatusEnum;
  id: number;
  incomplianceReason: string;
  isApproveBtnShown: boolean;
  isLotPriceWithVat: boolean;
  isParticipantOfferActive: boolean;
  isParticipantOfferToTradeSourceManual: boolean;
  isWinner: boolean;
  lotItemId: number;
  lotItemOrder: number;
  manufacturerCountryCode: string;
  manufacturerCountryName: string;
  manufacturerType: ManufactureTypeEnum;
  meetsRequirements: MeetsRequirementsEnum;
  participantOfferId: number;
  participantOfferPublishDate: string;
  price: number;
  priceWithVat: number;
  quantity: number;
  resultPosition: number;
  sumVat: number;
  taxPercent: number;
  tradeLotApplicationId: number;
  unitPrice: number;
  unitPriceWithVat: number;
}
