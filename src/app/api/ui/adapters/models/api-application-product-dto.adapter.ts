import { ApplicationProduct } from '../../models/application-product.interface';
import { ApiApplicationProductDto } from '../../../swagger/models/api-application-product-dto';
import { apiAuctionBidDtoAdapter } from './api-auction-bid-dto.adapter';
import { apiLotItemApplicationCountryCodeDtoAdapter } from './api-lot-item-application-country-code-dto.adapter';
import { apiManufactureTypeEnumAdapter } from '../enums/api-manufacture-type-enum.adapter';
import { apiProductDto2Adapter } from './api-product-dto-2.adapter';

export const apiApplicationProductDtoAdapter = (source?: ApplicationProduct | null): ApiApplicationProductDto => {
  return {
    ...apiProductDto2Adapter(source as unknown as Parameters<typeof apiProductDto2Adapter>[0]),
    SumVat: source?.sumVat,
    AuctionBids: source?.auctionBids?.map((item) => apiAuctionBidDtoAdapter(item)),
    TaxPercent: source?.taxPercent,
    CountryCodes: source?.countryCodes?.map((item) => apiLotItemApplicationCountryCodeDtoAdapter(item)),
    ManufacturerCountries: source?.manufacturerCountries,
    ManufacturerCountryCode: source?.manufacturerCountryCode,
    ManufacturerCountryName: source?.manufacturerCountryName,
    ManufacturerType: source?.manufacturerType === null ? undefined : apiManufactureTypeEnumAdapter(source?.manufacturerType),
    CountryConfirmation: source?.countryConfirmation,
    KtruInfo: source?.ktruInfo,
    CanEditKtruInfo: source?.canEditKtruInfo,
  };
}
