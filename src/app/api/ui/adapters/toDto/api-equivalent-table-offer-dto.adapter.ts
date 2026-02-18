import { EquivalentTableOffer } from '../../models/equivalent-table-offer.interface';
import { ApiEquivalentTableOfferDto } from '../../../swagger/models/api-equivalent-table-offer-dto';
import { adaptApiEquivalentTablePriceRegionDetailDto } from './api-equivalent-table-price-region-detail-dto.adapter';

export function adaptApiEquivalentTableOfferDto(source?: EquivalentTableOffer | null): ApiEquivalentTableOfferDto {
  return {
    Id: source?.id,
    MinQuantity: source?.minQuantity,
    OfferTerms: source?.offerTerms,
    OkeiCode: source?.okeiCode,
    PictureGuid: source?.pictureGuid,
    Price: source?.price,
    PriceListId: source?.priceListId,
    PriceRegionDetails: (source?.priceRegionDetails ?? []).map((item) => adaptApiEquivalentTablePriceRegionDetailDto(item)),
    ProductName: source?.productName,
    Quantity: source?.quantity,
    ShortOkeiName: source?.shortOkeiName,
  };
}
