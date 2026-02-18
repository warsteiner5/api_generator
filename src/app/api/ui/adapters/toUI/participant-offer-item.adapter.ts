import { ApiParticipantOfferItemDto } from '../../../swagger/models/api-participant-offer-item-dto';
import { ParticipantOfferItem } from '../../models/participant-offer-item.interface';
import { adaptOrganizationCountryAltEnumToUI } from './organization-country-alt-enum.adapter';
import { adaptParticipantOfferSourceEnumToUI } from './participant-offer-source-enum.adapter';
import { adaptParticipantOfferSpecificFlagEnumToUI } from './participant-offer-specific-flag-enum.adapter';
import { adaptParticipantOfferStateEnumToUI } from './participant-offer-state-enum.adapter';
import { adaptVatRateStateEnumToUI } from './vat-rate-state-enum.adapter';

export function adaptParticipantOfferItemToUI(source?: ApiParticipantOfferItemDto | null): ParticipantOfferItem {
  return {
    classificatorCode: source?.ClassificatorCode ?? '',
    deliveryPlace: source?.DeliveryPlace ?? '',
    externalSystemIdentifier: source?.ExternalSystemIdentifier ?? '',
    externalSystemIdentifierNumeric: source?.ExternalSystemIdentifierNumeric ?? 0,
    id: source?.Id ?? 0,
    isFromGuarnteeSupplier: source?.IsFromGuarnteeSupplier ?? false,
    isPublicOffer: source?.IsPublicOffer ?? false,
    offerState: adaptParticipantOfferStateEnumToUI(source?.OfferState),
    offerStateDescription: source?.OfferStateDescription ?? '',
    offerTerms: source?.OfferTerms ?? '',
    okeiCode: source?.OkeiCode ?? '',
    okeiDescription: source?.OkeiDescription ?? '',
    okpd2Codes: source?.Okpd2Codes ?? [],
    participantGuid: source?.ParticipantGuid ?? '',
    participantId: source?.ParticipantId ?? 0,
    participantInn: source?.ParticipantInn ?? '',
    participantName: source?.ParticipantName ?? '',
    participantOfferSource: adaptParticipantOfferSourceEnumToUI(source?.ParticipantOfferSource),
    participantOfferSpecific: adaptParticipantOfferSpecificFlagEnumToUI(source?.ParticipantOfferSpecific),
    participantOrganizationCountry: adaptOrganizationCountryAltEnumToUI(source?.ParticipantOrganizationCountry),
    priceListId: source?.PriceListId ?? 0,
    productName: source?.ProductName ?? '',
    quantity: source?.Quantity ?? 0,
    unitPrice: source?.UnitPrice ?? 0,
    usedClassificatorTypeDescription: source?.UsedClassificatorTypeDescription ?? '',
    vatRate: source?.VatRate ?? 0,
    vatRateDescription: source?.VatRateDescription ?? '',
    vatRateState: adaptVatRateStateEnumToUI(source?.VatRateState),
  };
}
