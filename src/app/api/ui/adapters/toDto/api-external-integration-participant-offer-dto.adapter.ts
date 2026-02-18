import { ExternalIntegrationParticipantOffer } from '../../models/external-integration-participant-offer.interface';
import { ApiExternalIntegrationParticipantOfferDto } from '../../../swagger/models/api-external-integration-participant-offer-dto';
import { adaptApiMinPromTorgCharacteristicDto } from './api-min-prom-torg-characteristic-dto.adapter';
import { adaptApiOfferCreatedMethodEnum } from './api-offer-created-method-enum.adapter';
import { adaptApiProductStatusAltEnum } from './api-product-status.adapter';

export function adaptApiExternalIntegrationParticipantOfferDto(source?: ExternalIntegrationParticipantOffer | null): ApiExternalIntegrationParticipantOfferDto {
  return {
    AdditionalPhotos: source?.additionalPhotos ?? [],
    CategoryId: source?.categoryId,
    Characteristics: (source?.characteristics ?? []).map((item) => adaptApiMinPromTorgCharacteristicDto(item)),
    Cost: source?.cost,
    Country: source?.country,
    DeliveryRegions: source?.deliveryRegions ?? [],
    Description: source?.description,
    Documents: source?.documents ?? [],
    Gost: source?.gost,
    Id: source?.id,
    IntegrationSource: adaptApiOfferCreatedMethodEnum(source?.integrationSource),
    IsCommodityProducer: source?.isCommodityProducer,
    Manufacturer: source?.manufacturer,
    ManufacturerRegion: source?.manufacturerRegion,
    MeasureUnit: source?.measureUnit,
    MeasureUnitId: source?.measureUnitId,
    Name: source?.name,
    NtdCode: source?.ntdCode,
    Okpd2Code: source?.okpd2Code,
    PhotoUrl: source?.photoUrl,
    Quantity: source?.quantity,
    Status: adaptApiProductStatusAltEnum(source?.status),
    VatInclude: source?.vatInclude,
    VatPercent: source?.vatPercent,
  };
}
