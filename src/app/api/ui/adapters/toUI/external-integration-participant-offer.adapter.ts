import { ApiExternalIntegrationParticipantOfferDto } from '../../../swagger/models/api-external-integration-participant-offer-dto';
import { ExternalIntegrationParticipantOffer } from '../../models/external-integration-participant-offer.interface';
import { adaptMinPromTorgCharacteristicToUI } from './min-prom-torg-characteristic.adapter';
import { adaptOfferCreatedMethodEnumToUI } from './offer-created-method-enum.adapter';
import { adaptProductStatusAltEnumToUI } from './product-status-alt-enum.adapter';

export function adaptExternalIntegrationParticipantOfferToUI(source?: ApiExternalIntegrationParticipantOfferDto | null): ExternalIntegrationParticipantOffer {
  return {
    additionalPhotos: source?.AdditionalPhotos ?? [],
    categoryId: source?.CategoryId ?? '',
    characteristics: (source?.Characteristics ?? []).map((item) => adaptMinPromTorgCharacteristicToUI(item)),
    cost: source?.Cost ?? '',
    country: source?.Country ?? '',
    deliveryRegions: source?.DeliveryRegions ?? [],
    description: source?.Description ?? '',
    documents: source?.Documents ?? [],
    gost: source?.Gost ?? '',
    id: source?.Id ?? 0,
    integrationSource: adaptOfferCreatedMethodEnumToUI(source?.IntegrationSource),
    isCommodityProducer: source?.IsCommodityProducer ?? false,
    manufacturer: source?.Manufacturer ?? '',
    manufacturerRegion: source?.ManufacturerRegion ?? '',
    measureUnit: source?.MeasureUnit ?? '',
    measureUnitId: source?.MeasureUnitId ?? '',
    name: source?.Name ?? '',
    ntdCode: source?.NtdCode ?? '',
    okpd2Code: source?.Okpd2Code ?? '',
    photoUrl: source?.PhotoUrl ?? '',
    quantity: source?.Quantity ?? 0,
    status: adaptProductStatusAltEnumToUI(source?.Status),
    vatInclude: source?.VatInclude ?? false,
    vatPercent: source?.VatPercent ?? 0,
  };
}
