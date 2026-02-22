import { ParticipantOfferItem } from '../../models/participant-offer-item.interface';
import { ApiParticipantOfferItemDto } from '../../../swagger/models/api-participant-offer-item-dto';
import { apiOrganizationCountryAltEnumAdapter } from '../enums/api-organization-country.adapter';
import { apiParticipantOfferSourceEnumAdapter } from '../enums/api-participant-offer-source-enum.adapter';
import { apiParticipantOfferSpecificFlagEnumAdapter } from '../enums/api-participant-offer-specific-flag-enum.adapter';
import { apiParticipantOfferStateEnumAdapter } from '../enums/api-participant-offer-state-enum.adapter';
import { apiVatRateStateEnumAdapter } from '../enums/api-vat-rate-state-enum.adapter';

export const apiParticipantOfferItemDtoAdapter = (source?: ParticipantOfferItem | null): ApiParticipantOfferItemDto => {
  return {
    ClassificatorCode: source?.classificatorCode,
    DeliveryPlace: source?.deliveryPlace,
    ExternalSystemIdentifier: source?.externalSystemIdentifier,
    ExternalSystemIdentifierNumeric: source?.externalSystemIdentifierNumeric,
    Id: source?.id,
    IsFromGuarnteeSupplier: source?.isFromGuarnteeSupplier,
    IsPublicOffer: source?.isPublicOffer,
    OfferState: source?.offerState === null ? undefined : apiParticipantOfferStateEnumAdapter(source?.offerState),
    OfferStateDescription: source?.offerStateDescription,
    OfferTerms: source?.offerTerms,
    OkeiCode: source?.okeiCode,
    OkeiDescription: source?.okeiDescription,
    Okpd2Codes: source?.okpd2Codes,
    ParticipantGuid: source?.participantGuid,
    ParticipantId: source?.participantId,
    ParticipantInn: source?.participantInn,
    ParticipantName: source?.participantName,
    ParticipantOfferSource: source?.participantOfferSource === null ? undefined : apiParticipantOfferSourceEnumAdapter(source?.participantOfferSource),
    ParticipantOfferSpecific: source?.participantOfferSpecific === null ? undefined : apiParticipantOfferSpecificFlagEnumAdapter(source?.participantOfferSpecific),
    ParticipantOrganizationCountry: source?.participantOrganizationCountry === null ? undefined : apiOrganizationCountryAltEnumAdapter(source?.participantOrganizationCountry),
    PriceListId: source?.priceListId,
    ProductName: source?.productName,
    Quantity: source?.quantity,
    UnitPrice: source?.unitPrice,
    UsedClassificatorTypeDescription: source?.usedClassificatorTypeDescription,
    VatRate: source?.vatRate,
    VatRateDescription: source?.vatRateDescription,
    VatRateState: source?.vatRateState === null ? undefined : apiVatRateStateEnumAdapter(source?.vatRateState),
  };
}
