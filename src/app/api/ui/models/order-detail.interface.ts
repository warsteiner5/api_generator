import { ParticipantOfferSpecificFlagEnum } from '../enums/participant-offer-specific-flag.enum';
import { TruTypeEnum } from '../enums/tru-type.enum';
import { UsedClassificatorTypeEnum } from '../enums/used-classificator-type.enum';
import { VatRateStateEnum } from '../enums/vat-rate-state.enum';

export interface OrderDetail {
  classificatorCode: string;
  classificatorDescription: string;
  id: number;
  ksrCode: string;
  ksrUnitQuantity: number;
  lotItemId: number;
  okeiCode: string;
  okeiDescription: string;
  okpd2Codes: string[];
  participantOfferSpecific: ParticipantOfferSpecificFlagEnum;
  positionNumber: string;
  productName: string;
  quantity: number;
  type: TruTypeEnum;
  unitPrice: number;
  unitPriceRegion: string;
  usedClassificatorType: UsedClassificatorTypeEnum;
  usedClassificatorTypeDescription: string;
  vatRate: number;
  vatRateDescription: string;
  vatRateState: VatRateStateEnum;
}
