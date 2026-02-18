/* tslint:disable */
/* eslint-disable */
import { ApiOrganizationCountryAltEnum } from '../models/api-organization-country';
import { ApiParticipantOfferSourceEnum } from '../models/api-participant-offer-source-enum';
import { ApiParticipantOfferSpecificFlagEnum } from '../models/api-participant-offer-specific-flag-enum';
import { ApiParticipantOfferStateEnum } from '../models/api-participant-offer-state-enum';
import { ApiVatRateStateEnum } from '../models/api-vat-rate-state-enum';
export interface ApiParticipantOfferItemDto {
  ClassificatorCode?: string | null;
  DeliveryPlace?: string | null;
  ExternalSystemIdentifier?: string | null;
  ExternalSystemIdentifierNumeric?: number | null;
  Id?: number;
  IsFromGuarnteeSupplier?: boolean;
  IsPublicOffer?: boolean;
  OfferState?: ApiParticipantOfferStateEnum | null;
  OfferStateDescription?: string | null;
  OfferTerms?: string | null;
  OkeiCode?: string | null;
  OkeiDescription?: string | null;
  Okpd2Codes?: Array<string> | null;
  ParticipantGuid?: string;
  ParticipantId?: number;
  ParticipantInn?: string | null;
  ParticipantName?: string | null;
  ParticipantOfferSource?: ApiParticipantOfferSourceEnum;
  ParticipantOfferSpecific?: ApiParticipantOfferSpecificFlagEnum | null;
  ParticipantOrganizationCountry?: ApiOrganizationCountryAltEnum;
  PriceListId?: number | null;
  ProductName?: string | null;
  Quantity?: number | null;
  UnitPrice?: number | null;
  UsedClassificatorTypeDescription?: string | null;
  VatRate?: number | null;
  VatRateDescription?: string | null;
  VatRateState?: ApiVatRateStateEnum;
}
