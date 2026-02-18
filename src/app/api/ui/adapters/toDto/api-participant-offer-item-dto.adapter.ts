import { ParticipantOfferItem } from '../../models/participant-offer-item.interface';
import { ApiParticipantOfferItemDto } from '../../../swagger/models/api-participant-offer-item-dto';
import { adaptApiOrganizationCountryAltEnum } from './api-organization-country.adapter';
import { adaptApiParticipantOfferSourceEnum } from './api-participant-offer-source-enum.adapter';
import { adaptApiParticipantOfferSpecificFlagEnum } from './api-participant-offer-specific-flag-enum.adapter';
import { adaptApiParticipantOfferStateEnum } from './api-participant-offer-state-enum.adapter';
import { adaptApiVatRateStateEnum } from './api-vat-rate-state-enum.adapter';

export function adaptApiParticipantOfferItemDto(source?: ParticipantOfferItem | null): ApiParticipantOfferItemDto {
  return {
    ClassificatorCode: source?.classificatorCode,
    DeliveryPlace: source?.deliveryPlace,
    ExternalSystemIdentifier: source?.externalSystemIdentifier,
    ExternalSystemIdentifierNumeric: source?.externalSystemIdentifierNumeric,
    Id: source?.id,
    IsFromGuarnteeSupplier: source?.isFromGuarnteeSupplier,
    IsPublicOffer: source?.isPublicOffer,
    OfferState: adaptApiParticipantOfferStateEnum(source?.offerState),
    OfferStateDescription: source?.offerStateDescription,
    OfferTerms: source?.offerTerms,
    OkeiCode: source?.okeiCode,
    OkeiDescription: source?.okeiDescription,
    Okpd2Codes: source?.okpd2Codes ?? [],
    ParticipantGuid: source?.participantGuid,
    ParticipantId: source?.participantId,
    ParticipantInn: source?.participantInn,
    ParticipantName: source?.participantName,
    ParticipantOfferSource: adaptApiParticipantOfferSourceEnum(source?.participantOfferSource),
    ParticipantOfferSpecific: adaptApiParticipantOfferSpecificFlagEnum(source?.participantOfferSpecific),
    ParticipantOrganizationCountry: adaptApiOrganizationCountryAltEnum(source?.participantOrganizationCountry),
    PriceListId: source?.priceListId,
    ProductName: source?.productName,
    Quantity: source?.quantity,
    UnitPrice: source?.unitPrice,
    UsedClassificatorTypeDescription: source?.usedClassificatorTypeDescription,
    VatRate: source?.vatRate,
    VatRateDescription: source?.vatRateDescription,
    VatRateState: adaptApiVatRateStateEnum(source?.vatRateState),
  };
}
