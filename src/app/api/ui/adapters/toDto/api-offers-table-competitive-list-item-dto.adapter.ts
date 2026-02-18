import { OffersTableCompetitiveListItem } from '../../models/offers-table-competitive-list-item.interface';
import { ApiOffersTableCompetitiveListItemDto } from '../../../swagger/models/api-offers-table-competitive-list-item-dto';
import { adaptApiCompetitiveListItemDocumentDto } from './api-competitive-list-item-document-dto.adapter';
import { adaptApiCompetitiveListItemStateEnum } from './api-competitive-list-item-state-enum.adapter';
import { adaptApiPriceRegionDetailDto } from './api-price-region-detail-dto.adapter';

export function adaptApiOffersTableCompetitiveListItemDto(source?: OffersTableCompetitiveListItem | null): ApiOffersTableCompetitiveListItemDto {
  return {
    Comment: source?.comment,
    CompetitiveListItemId: source?.competitiveListItemId,
    ManufacturerCountries: source?.manufacturerCountries ?? [],
    Manufacturers: source?.manufacturers ?? [],
    ParticipantOfferDocuments: (source?.participantOfferDocuments ?? []).map((item) => adaptApiCompetitiveListItemDocumentDto(item)),
    ParticipantOfferId: source?.participantOfferId,
    PriceRegionDetails: (source?.priceRegionDetails ?? []).map((item) => adaptApiPriceRegionDetailDto(item)),
    State: adaptApiCompetitiveListItemStateEnum(source?.state),
    SupplierId: source?.supplierId,
    SupplierName: source?.supplierName,
    UnitPrice: source?.unitPrice,
    UsePriceForAllRegions: source?.usePriceForAllRegions,
  };
}
