import { ApiOffersTableCompetitiveListItemDto } from '../../../swagger/models/api-offers-table-competitive-list-item-dto';
import { OffersTableCompetitiveListItem } from '../../models/offers-table-competitive-list-item.interface';
import { competitiveListItemDocumentAdapter } from './competitive-list-item-document.adapter';
import { competitiveListItemStateEnumAdapter } from '../enums/competitive-list-item-state-enum.adapter';
import { priceRegionDetailAdapter } from './price-region-detail.adapter';

export const offersTableCompetitiveListItemAdapter = (source?: ApiOffersTableCompetitiveListItemDto | null): OffersTableCompetitiveListItem => {
  return {
    comment: source?.Comment,
    competitiveListItemId: source?.CompetitiveListItemId,
    manufacturerCountries: source?.ManufacturerCountries,
    manufacturers: source?.Manufacturers,
    participantOfferDocuments: source?.ParticipantOfferDocuments?.map((item) => competitiveListItemDocumentAdapter(item)),
    participantOfferId: source?.ParticipantOfferId,
    priceRegionDetails: source?.PriceRegionDetails?.map((item) => priceRegionDetailAdapter(item)),
    state: source?.State === null ? undefined : competitiveListItemStateEnumAdapter(source?.State),
    supplierId: source?.SupplierId,
    supplierName: source?.SupplierName,
    unitPrice: source?.UnitPrice,
    usePriceForAllRegions: source?.UsePriceForAllRegions,
  };
}
