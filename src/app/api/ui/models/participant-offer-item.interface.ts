import { OrganizationCountryAltEnum } from '../enums/organization-country-alt.enum';
import { ParticipantOfferSourceEnum } from '../enums/participant-offer-source.enum';
import { ParticipantOfferSpecificFlagEnum } from '../enums/participant-offer-specific-flag.enum';
import { ParticipantOfferStateEnum } from '../enums/participant-offer-state.enum';
import { VatRateStateEnum } from '../enums/vat-rate-state.enum';

// @ts-ignore
export interface ParticipantOfferItem {
  classificatorCode: string;
  deliveryPlace: string;
  externalSystemIdentifier: string;
  externalSystemIdentifierNumeric: number;
  id: number;
  isFromGuarnteeSupplier: boolean;
  isPublicOffer: boolean;
  offerState: ParticipantOfferStateEnum;
  offerStateDescription: string;
  offerTerms: string;
  okeiCode: string;
  okeiDescription: string;
  okpd2Codes: string[];
  participantGuid: string;
  participantId: number;
  participantInn: string;
  participantName: string;
  participantOfferSource: ParticipantOfferSourceEnum;
  participantOfferSpecific: ParticipantOfferSpecificFlagEnum;
  participantOrganizationCountry: OrganizationCountryAltEnum;
  priceListId: number;
  productName: string;
  quantity: number;
  unitPrice: number;
  usedClassificatorTypeDescription: string;
  vatRate: number;
  vatRateDescription: string;
  vatRateState: VatRateStateEnum;
}
