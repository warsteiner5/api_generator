import { OffersTableCompetitiveListItem } from '../../models/offers-table-competitive-list-item.interface';
import { ApiOffersTableCompetitiveListItemDto } from '../../../swagger/models/api-offers-table-competitive-list-item-dto';
import { apiCompetitiveListItemDocumentDtoAdapter } from './api-competitive-list-item-document-dto.adapter';
import { apiCompetitiveListItemStateEnumAdapter } from '../enums/api-competitive-list-item-state-enum.adapter';
import { apiPriceRegionDetailDtoAdapter } from './api-price-region-detail-dto.adapter';

export const apiOffersTableCompetitiveListItemDtoAdapter = (source?: OffersTableCompetitiveListItem | null): ApiOffersTableCompetitiveListItemDto => {
  return {
    Comment: source?.comment,
    CompetitiveListItemId: source?.competitiveListItemId,
    ManufacturerCountries: source?.manufacturerCountries,
    Manufacturers: source?.manufacturers,
    ParticipantOfferDocuments: source?.participantOfferDocuments?.map((item) => apiCompetitiveListItemDocumentDtoAdapter(item)),
    ParticipantOfferId: source?.participantOfferId,
    PriceRegionDetails: source?.priceRegionDetails?.map((item) => apiPriceRegionDetailDtoAdapter(item)),
    State: source?.state === null ? undefined : apiCompetitiveListItemStateEnumAdapter(source?.state),
    SupplierId: source?.supplierId,
    SupplierName: source?.supplierName,
    UnitPrice: source?.unitPrice,
    UsePriceForAllRegions: source?.usePriceForAllRegions,
  };
}
