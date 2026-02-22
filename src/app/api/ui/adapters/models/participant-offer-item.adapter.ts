import { ApiParticipantOfferItemDto } from '../../../swagger/models/api-participant-offer-item-dto';
import { ParticipantOfferItem } from '../../models/participant-offer-item.interface';
import { organizationCountryAltEnumAdapter } from '../enums/organization-country-alt-enum.adapter';
import { participantOfferSourceEnumAdapter } from '../enums/participant-offer-source-enum.adapter';
import { participantOfferSpecificFlagEnumAdapter } from '../enums/participant-offer-specific-flag-enum.adapter';
import { participantOfferStateEnumAdapter } from '../enums/participant-offer-state-enum.adapter';
import { vatRateStateEnumAdapter } from '../enums/vat-rate-state-enum.adapter';

export const participantOfferItemAdapter = (source?: ApiParticipantOfferItemDto | null): ParticipantOfferItem => {
  return {
    classificatorCode: source?.ClassificatorCode,
    deliveryPlace: source?.DeliveryPlace,
    externalSystemIdentifier: source?.ExternalSystemIdentifier,
    externalSystemIdentifierNumeric: source?.ExternalSystemIdentifierNumeric,
    id: source?.Id,
    isFromGuarnteeSupplier: source?.IsFromGuarnteeSupplier,
    isPublicOffer: source?.IsPublicOffer,
    offerState: source?.OfferState === null ? undefined : participantOfferStateEnumAdapter(source?.OfferState),
    offerStateDescription: source?.OfferStateDescription,
    offerTerms: source?.OfferTerms,
    okeiCode: source?.OkeiCode,
    okeiDescription: source?.OkeiDescription,
    okpd2Codes: source?.Okpd2Codes,
    participantGuid: source?.ParticipantGuid,
    participantId: source?.ParticipantId,
    participantInn: source?.ParticipantInn,
    participantName: source?.ParticipantName,
    participantOfferSource: source?.ParticipantOfferSource === null ? undefined : participantOfferSourceEnumAdapter(source?.ParticipantOfferSource),
    participantOfferSpecific: source?.ParticipantOfferSpecific === null ? undefined : participantOfferSpecificFlagEnumAdapter(source?.ParticipantOfferSpecific),
    participantOrganizationCountry: source?.ParticipantOrganizationCountry === null ? undefined : organizationCountryAltEnumAdapter(source?.ParticipantOrganizationCountry),
    priceListId: source?.PriceListId,
    productName: source?.ProductName,
    quantity: source?.Quantity,
    unitPrice: source?.UnitPrice,
    usedClassificatorTypeDescription: source?.UsedClassificatorTypeDescription,
    vatRate: source?.VatRate,
    vatRateDescription: source?.VatRateDescription,
    vatRateState: source?.VatRateState === null ? undefined : vatRateStateEnumAdapter(source?.VatRateState),
  };
}
