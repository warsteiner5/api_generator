import { ApiExternalIntegrationParticipantOfferDto } from '../../../swagger/models/api-external-integration-participant-offer-dto';
import { ExternalIntegrationParticipantOffer } from '../../models/external-integration-participant-offer.interface';
import { minPromTorgCharacteristicAdapter } from './min-prom-torg-characteristic.adapter';
import { offerCreatedMethodEnumAdapter } from '../enums/offer-created-method-enum.adapter';
import { productStatusAltEnumAdapter } from '../enums/product-status-alt-enum.adapter';

export const externalIntegrationParticipantOfferAdapter = (source?: ApiExternalIntegrationParticipantOfferDto | null): ExternalIntegrationParticipantOffer => {
  return {
    additionalPhotos: source?.AdditionalPhotos,
    categoryId: source?.CategoryId,
    characteristics: source?.Characteristics?.map((item) => minPromTorgCharacteristicAdapter(item)),
    cost: source?.Cost,
    country: source?.Country,
    deliveryRegions: source?.DeliveryRegions,
    description: source?.Description,
    documents: source?.Documents,
    gost: source?.Gost,
    id: source?.Id,
    integrationSource: source?.IntegrationSource === null ? undefined : offerCreatedMethodEnumAdapter(source?.IntegrationSource),
    isCommodityProducer: source?.IsCommodityProducer,
    manufacturer: source?.Manufacturer,
    manufacturerRegion: source?.ManufacturerRegion,
    measureUnit: source?.MeasureUnit,
    measureUnitId: source?.MeasureUnitId,
    name: source?.Name,
    ntdCode: source?.NtdCode,
    okpd2Code: source?.Okpd2Code,
    photoUrl: source?.PhotoUrl,
    quantity: source?.Quantity,
    status: source?.Status === null ? undefined : productStatusAltEnumAdapter(source?.Status),
    vatInclude: source?.VatInclude,
    vatPercent: source?.VatPercent,
  };
}
