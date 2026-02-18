/* tslint:disable */
/* eslint-disable */
import { ApiManufacturerCountryRegistryTypeEnum } from '../models/api-manufacturer-country-registry-type-enum';
import { ApiVatRateStateEnum } from '../models/api-vat-rate-state-enum';
export interface ApiImportExcelParticipantOfferDto {
  Country?: string | null;
  CountryCode?: string | null;
  DeliveryRegionCodes?: Array<string> | null;
  IsCreated?: boolean;
  ItemOrderNumber?: number;
  ManufacturerCountryRegistryNumber?: string | null;
  ManufacturerCountryRegistryType?: ApiManufacturerCountryRegistryTypeEnum | null;
  ManufacturerCountryScore?: number | null;
  MinQuantity?: number | null;
  Okpd2Codes?: Array<string> | null;
  ParticipantOfferDescription?: string | null;
  ParticipantOfferId?: number | null;
  ParticipantOfferName?: string | null;
  ParticipantOfferOkei?: string | null;
  ParticipantOfferOkeiCode?: string | null;
  ParticipantOfferPrice?: number | null;
  ParticipantOfferTax?: number | null;
  ParticipantOfferTaxType?: ApiVatRateStateEnum;
  PriceListId?: number | null;
  Quantity?: number | null;
  RowIndex?: number;
  TradeLotItemId?: number | null;
}
