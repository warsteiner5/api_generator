import { ManufacturerCountryRegistryTypeEnum } from '../enums/manufacturer-country-registry-type.enum';
import { VatRateStateEnum } from '../enums/vat-rate-state.enum';

// @ts-ignore
export interface ImportExcelParticipantOffer {
  country: string;
  countryCode: string;
  deliveryRegionCodes: string[];
  isCreated: boolean;
  itemOrderNumber: number;
  manufacturerCountryRegistryNumber: string;
  manufacturerCountryRegistryType: ManufacturerCountryRegistryTypeEnum;
  manufacturerCountryScore: number;
  minQuantity: number;
  okpd2Codes: string[];
  participantOfferDescription: string;
  participantOfferId: number;
  participantOfferName: string;
  participantOfferOkei: string;
  participantOfferOkeiCode: string;
  participantOfferPrice: number;
  participantOfferTax: number;
  participantOfferTaxType: VatRateStateEnum;
  priceListId: number;
  quantity: number;
  rowIndex: number;
  tradeLotItemId: number;
}
