import { CompetitiveListItem } from '../../models/competitive-list-item.interface';
import { ApiCompetitiveListItemDto } from '../../../swagger/models/api-competitive-list-item-dto';
import { adaptApiCharacteristicValuesDto } from './api-characteristic-values-dto.adapter';
import { adaptApiCompetitiveListItemDocumentDto } from './api-competitive-list-item-document-dto.adapter';
import { adaptApiCompetitiveListItemStateEnum } from './api-competitive-list-item-state-enum.adapter';
import { adaptApiParticipantOfferDto } from './api-participant-offer-dto.adapter';
import { adaptApiPriceRegionDetailDto } from './api-price-region-detail-dto.adapter';
import { adaptApiVatRateStateEnum } from './api-vat-rate-state-enum.adapter';

export function adaptApiCompetitiveListItemDto(source?: CompetitiveListItem | null): ApiCompetitiveListItemDto {
  return {
    CharacteristicsValues: (source?.characteristicsValues ?? []).map((item) => adaptApiCharacteristicValuesDto(item)),
    ChatId: source?.chatId,
    Comment: source?.comment,
    CreatedDate: source?.createdDate,
    DeliveryRegion: source?.deliveryRegion,
    Id: source?.id,
    ManufacturerCountries: source?.manufacturerCountries ?? [],
    Manufacturers: source?.manufacturers ?? [],
    Offers: (source?.offers ?? []).map((item) => adaptApiParticipantOfferDto(item)),
    OkeiCode: source?.okeiCode,
    OkeiName: source?.okeiName,
    ParticipantOfferId: source?.participantOfferId,
    ParticipantOrganizationGuid: source?.participantOrganizationGuid,
    ParticipantOrganizationId: source?.participantOrganizationId,
    ParticipantOrganizationName: source?.participantOrganizationName,
    PriceListDocuments: (source?.priceListDocuments ?? []).map((item) => adaptApiCompetitiveListItemDocumentDto(item)),
    PriceListProductName: source?.priceListProductName,
    PriceRegionDetails: (source?.priceRegionDetails ?? []).map((item) => adaptApiPriceRegionDetailDto(item)),
    Quantity: source?.quantity,
    State: adaptApiCompetitiveListItemStateEnum(source?.state),
    SupplierId: source?.supplierId,
    UnitPrice: source?.unitPrice,
    UsePriceForAllRegions: source?.usePriceForAllRegions,
    VatRate: source?.vatRate,
    VatState: adaptApiVatRateStateEnum(source?.vatState),
  };
}
