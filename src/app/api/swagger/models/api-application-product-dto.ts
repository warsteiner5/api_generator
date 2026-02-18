/* tslint:disable */
/* eslint-disable */
import { ApiAuctionBidDto } from '../models/api-auction-bid-dto';
import { ApiLotItemApplicationCountryCodeDto } from '../models/api-lot-item-application-country-code-dto';
import { ApiManufactureTypeEnum } from '../models/api-manufacture-type-enum';
import { ApiProductDto2 } from '../models/api-product-dto-2';
export type ApiApplicationProductDto = ApiProductDto2 & {
'SumVat'?: number | null;
'AuctionBids'?: Array<ApiAuctionBidDto> | null;
'TaxPercent'?: number | null;
'CountryCodes'?: Array<ApiLotItemApplicationCountryCodeDto> | null;
'ManufacturerCountries'?: string | null;
'ManufacturerCountryCode'?: string | null;
'ManufacturerCountryName'?: string | null;
'ManufacturerType'?: ApiManufactureTypeEnum;
'CountryConfirmation'?: string | null;
'KtruInfo'?: string | null;
'CanEditKtruInfo'?: boolean;
};
