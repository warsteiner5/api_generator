import { CompetitiveListItem } from '../../models/competitive-list-item.interface';
import { ApiCompetitiveListItemDto } from '../../../swagger/models/api-competitive-list-item-dto';
import { apiCharacteristicValuesDtoAdapter } from './api-characteristic-values-dto.adapter';
import { apiCompetitiveListItemDocumentDtoAdapter } from './api-competitive-list-item-document-dto.adapter';
import { apiCompetitiveListItemStateEnumAdapter } from '../enums/api-competitive-list-item-state-enum.adapter';
import { apiParticipantOfferDtoAdapter } from './api-participant-offer-dto.adapter';
import { apiPriceRegionDetailDtoAdapter } from './api-price-region-detail-dto.adapter';
import { apiVatRateStateEnumAdapter } from '../enums/api-vat-rate-state-enum.adapter';

export const apiCompetitiveListItemDtoAdapter = (source?: CompetitiveListItem | null): ApiCompetitiveListItemDto => {
  return {
    CharacteristicsValues: source?.characteristicsValues?.map((item) => apiCharacteristicValuesDtoAdapter(item)),
    ChatId: source?.chatId,
    Comment: source?.comment,
    CreatedDate: source?.createdDate,
    DeliveryRegion: source?.deliveryRegion,
    Id: source?.id,
    ManufacturerCountries: source?.manufacturerCountries,
    Manufacturers: source?.manufacturers,
    Offers: source?.offers?.map((item) => apiParticipantOfferDtoAdapter(item)),
    OkeiCode: source?.okeiCode,
    OkeiName: source?.okeiName,
    ParticipantOfferId: source?.participantOfferId,
    ParticipantOrganizationGuid: source?.participantOrganizationGuid,
    ParticipantOrganizationId: source?.participantOrganizationId,
    ParticipantOrganizationName: source?.participantOrganizationName,
    PriceListDocuments: source?.priceListDocuments?.map((item) => apiCompetitiveListItemDocumentDtoAdapter(item)),
    PriceListProductName: source?.priceListProductName,
    PriceRegionDetails: source?.priceRegionDetails?.map((item) => apiPriceRegionDetailDtoAdapter(item)),
    Quantity: source?.quantity,
    State: source?.state === null ? undefined : apiCompetitiveListItemStateEnumAdapter(source?.state),
    SupplierId: source?.supplierId,
    UnitPrice: source?.unitPrice,
    UsePriceForAllRegions: source?.usePriceForAllRegions,
    VatRate: source?.vatRate,
    VatState: source?.vatState === null ? undefined : apiVatRateStateEnumAdapter(source?.vatState),
  };
}
