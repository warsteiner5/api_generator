import { AuctionBid } from './auction-bid.interface';
import { LotItemApplicationCountryCode } from './lot-item-application-country-code.interface';
import { ManufactureTypeEnum } from '../enums/manufacture-type.enum';
import { ProductDto2 } from './product-dto-2.interface';

export type ApplicationProduct = ProductDto2 & { 'SumVat'?: number | null; 'AuctionBids'?: Array<AuctionBid> | null; 'TaxPercent'?: number | null; 'CountryCodes'?: Array<LotItemApplicationCountryCode> | null; 'ManufacturerCountries'?: string | null; 'ManufacturerCountryCode'?: string | null; 'ManufacturerCountryName'?: string | null; 'ManufacturerType'?: ManufactureTypeEnum; 'CountryConfirmation'?: string | null; 'KtruInfo'?: string | null; 'CanEditKtruInfo'?: boolean; };
