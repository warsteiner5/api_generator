import { AcceptedPriceListInfo } from '../../models/accepted-price-list-info.interface';
import { ApiAcceptedPriceListInfoDto } from '../../../swagger/models/api-accepted-price-list-info-dto';
import { apiMarketDealStateEnumAdapter } from '../enums/api-market-deal-state-enum.adapter';
import { apiPriceRegionDetailDtoAdapter } from './api-price-region-detail-dto.adapter';
import { apiVatRateStateEnumAdapter } from '../enums/api-vat-rate-state-enum.adapter';

export const apiAcceptedPriceListInfoDtoAdapter = (source?: AcceptedPriceListInfo | null): ApiAcceptedPriceListInfoDto => {
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
    PriceRegionDetails: source?.priceRegionDetails?.map((item) => apiPriceRegionDetailDtoAdapter(item)),
    Quantity: source?.quantity,
    ShortOkeiName: source?.shortOkeiName,
    State: source?.state === null ? undefined : apiMarketDealStateEnumAdapter(source?.state),
    StateString: source?.stateString,
    UnitPrice: source?.unitPrice,
    VatRate: source?.vatRate,
    VatRateState: source?.vatRateState === null ? undefined : apiVatRateStateEnumAdapter(source?.vatRateState),
  };
}
