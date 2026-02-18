import { ApiOffersTableCompetitiveListItemDto } from '../../../swagger/models/api-offers-table-competitive-list-item-dto';
import { OffersTableCompetitiveListItem } from '../../models/offers-table-competitive-list-item.interface';
import { adaptCompetitiveListItemDocumentToUI } from './competitive-list-item-document.adapter';
import { adaptCompetitiveListItemStateEnumToUI } from './competitive-list-item-state-enum.adapter';
import { adaptPriceRegionDetailToUI } from './price-region-detail.adapter';

export function adaptOffersTableCompetitiveListItemToUI(source?: ApiOffersTableCompetitiveListItemDto | null): OffersTableCompetitiveListItem {
  return {
    comment: source?.Comment ?? '',
    competitiveListItemId: source?.CompetitiveListItemId ?? 0,
    manufacturerCountries: source?.ManufacturerCountries ?? [],
    manufacturers: source?.Manufacturers ?? [],
    participantOfferDocuments: (source?.ParticipantOfferDocuments ?? []).map((item) => adaptCompetitiveListItemDocumentToUI(item)),
    participantOfferId: source?.ParticipantOfferId ?? 0,
    priceRegionDetails: (source?.PriceRegionDetails ?? []).map((item) => adaptPriceRegionDetailToUI(item)),
    state: adaptCompetitiveListItemStateEnumToUI(source?.State),
    supplierId: source?.SupplierId ?? 0,
    supplierName: source?.SupplierName ?? '',
    unitPrice: source?.UnitPrice ?? 0,
    usePriceForAllRegions: source?.UsePriceForAllRegions ?? false,
  };
}
