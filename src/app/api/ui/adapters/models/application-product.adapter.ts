import { ApiApplicationProductDto } from '../../../swagger/models/api-application-product-dto';
import { ApplicationProduct } from '../../models/application-product.interface';
import { auctionBidAdapter } from './auction-bid.adapter';
import { lotItemApplicationCountryCodeAdapter } from './lot-item-application-country-code.adapter';
import { manufactureTypeEnumAdapter } from '../enums/manufacture-type-enum.adapter';
import { productDto2Adapter } from './product-dto-2.adapter';

export const applicationProductAdapter = (source?: ApiApplicationProductDto | null): ApplicationProduct => {
  return {
    ...productDto2Adapter(source as unknown as Parameters<typeof productDto2Adapter>[0]),
    sumVat: source?.SumVat,
    auctionBids: source?.AuctionBids?.map((item) => auctionBidAdapter(item)),
    taxPercent: source?.TaxPercent,
    countryCodes: source?.CountryCodes?.map((item) => lotItemApplicationCountryCodeAdapter(item)),
    manufacturerCountries: source?.ManufacturerCountries,
    manufacturerCountryCode: source?.ManufacturerCountryCode,
    manufacturerCountryName: source?.ManufacturerCountryName,
    manufacturerType: source?.ManufacturerType === null ? undefined : manufactureTypeEnumAdapter(source?.ManufacturerType),
    countryConfirmation: source?.CountryConfirmation,
    ktruInfo: source?.KtruInfo,
    canEditKtruInfo: source?.CanEditKtruInfo,
  };
}
