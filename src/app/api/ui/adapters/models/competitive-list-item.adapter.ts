import { ApiCompetitiveListItemDto } from '../../../swagger/models/api-competitive-list-item-dto';
import { CompetitiveListItem } from '../../models/competitive-list-item.interface';
import { characteristicValuesAdapter } from './characteristic-values.adapter';
import { competitiveListItemDocumentAdapter } from './competitive-list-item-document.adapter';
import { competitiveListItemStateEnumAdapter } from '../enums/competitive-list-item-state-enum.adapter';
import { participantOfferAdapter } from './participant-offer.adapter';
import { priceRegionDetailAdapter } from './price-region-detail.adapter';
import { vatRateStateEnumAdapter } from '../enums/vat-rate-state-enum.adapter';

export const competitiveListItemAdapter = (source?: ApiCompetitiveListItemDto | null): CompetitiveListItem => {
  return {
    characteristicsValues: source?.CharacteristicsValues?.map((item) => characteristicValuesAdapter(item)),
    chatId: source?.ChatId,
    comment: source?.Comment,
    createdDate: source?.CreatedDate,
    deliveryRegion: source?.DeliveryRegion,
    id: source?.Id,
    manufacturerCountries: source?.ManufacturerCountries,
    manufacturers: source?.Manufacturers,
    offers: source?.Offers?.map((item) => participantOfferAdapter(item)),
    okeiCode: source?.OkeiCode,
    okeiName: source?.OkeiName,
    participantOfferId: source?.ParticipantOfferId,
    participantOrganizationGuid: source?.ParticipantOrganizationGuid,
    participantOrganizationId: source?.ParticipantOrganizationId,
    participantOrganizationName: source?.ParticipantOrganizationName,
    priceListDocuments: source?.PriceListDocuments?.map((item) => competitiveListItemDocumentAdapter(item)),
    priceListProductName: source?.PriceListProductName,
    priceRegionDetails: source?.PriceRegionDetails?.map((item) => priceRegionDetailAdapter(item)),
    quantity: source?.Quantity,
    state: source?.State === null ? undefined : competitiveListItemStateEnumAdapter(source?.State),
    supplierId: source?.SupplierId,
    unitPrice: source?.UnitPrice,
    usePriceForAllRegions: source?.UsePriceForAllRegions,
    vatRate: source?.VatRate,
    vatState: source?.VatState === null ? undefined : vatRateStateEnumAdapter(source?.VatState),
  };
}
