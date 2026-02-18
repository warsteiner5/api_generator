import { AcceptedPriceListInfo } from '../../models/accepted-price-list-info.interface';
import { ApiAcceptedPriceListInfoDto } from '../../../swagger/models/api-accepted-price-list-info-dto';
import { adaptApiMarketDealStateEnum } from './api-market-deal-state-enum.adapter';
import { adaptApiPriceRegionDetailDto } from './api-price-region-detail-dto.adapter';
import { adaptApiVatRateStateEnum } from './api-vat-rate-state-enum.adapter';

export function adaptApiAcceptedPriceListInfoDto(source?: AcceptedPriceListInfo | null): ApiAcceptedPriceListInfoDto {
  return {
    CustomerName: source?.customerName,
    DuringDays: source?.duringDays,
    Id: source?.id,
    IsFavorite: source?.isFavorite,
    Manufacturer: source?.manufacturer,
    MinQuantity: source?.minQuantity,
    Name: source?.name,
    OfferTerms: source?.offerTerms,
    OrganizerId: source?.organizerId,
    Participant: source?.participant,
    PictureGuid: source?.pictureGuid,
    Price: source?.price,
    PriceRegionDetails: (source?.priceRegionDetails ?? []).map((item) => adaptApiPriceRegionDetailDto(item)),
    Quantity: source?.quantity,
    ShortOkeiName: source?.shortOkeiName,
    State: adaptApiMarketDealStateEnum(source?.state),
    StateString: source?.stateString,
    UnitPrice: source?.unitPrice,
    VatRate: source?.vatRate,
    VatRateState: adaptApiVatRateStateEnum(source?.vatRateState),
  };
}
