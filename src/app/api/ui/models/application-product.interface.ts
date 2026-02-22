import { AuctionBid } from './auction-bid.interface';
import { LotItemApplicationCountryCode } from './lot-item-application-country-code.interface';
import { ManufactureTypeEnum } from '../enums/manufacture-type.enum';
import { ProductDto2 } from './product-dto-2.interface';

// @ts-ignore
export interface ApplicationProduct extends ProductDto2 {
  sumVat: number;
  auctionBids: AuctionBid[];
  taxPercent: number;
  countryCodes: LotItemApplicationCountryCode[];
  manufacturerCountries: string;
  manufacturerCountryCode: string;
  manufacturerCountryName: string;
  manufacturerType: ManufactureTypeEnum;
  countryConfirmation: string;
  ktruInfo: string;
  canEditKtruInfo: boolean;
}
