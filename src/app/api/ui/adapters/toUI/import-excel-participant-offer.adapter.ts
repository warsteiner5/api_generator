import { ApiImportExcelParticipantOfferDto } from '../../../swagger/models/api-import-excel-participant-offer-dto';
import { ImportExcelParticipantOffer } from '../../models/import-excel-participant-offer.interface';
import { adaptManufacturerCountryRegistryTypeEnumToUI } from './manufacturer-country-registry-type-enum.adapter';
import { adaptVatRateStateEnumToUI } from './vat-rate-state-enum.adapter';

export function adaptImportExcelParticipantOfferToUI(source?: ApiImportExcelParticipantOfferDto | null): ImportExcelParticipantOffer {
  return {
    country: source?.Country ?? '',
    countryCode: source?.CountryCode ?? '',
    deliveryRegionCodes: source?.DeliveryRegionCodes ?? [],
    isCreated: source?.IsCreated ?? false,
    itemOrderNumber: source?.ItemOrderNumber ?? 0,
    manufacturerCountryRegistryNumber: source?.ManufacturerCountryRegistryNumber ?? '',
    manufacturerCountryRegistryType: adaptManufacturerCountryRegistryTypeEnumToUI(source?.ManufacturerCountryRegistryType),
    manufacturerCountryScore: source?.ManufacturerCountryScore ?? 0,
    minQuantity: source?.MinQuantity ?? 0,
    okpd2Codes: source?.Okpd2Codes ?? [],
    participantOfferDescription: source?.ParticipantOfferDescription ?? '',
    participantOfferId: source?.ParticipantOfferId ?? 0,
    participantOfferName: source?.ParticipantOfferName ?? '',
    participantOfferOkei: source?.ParticipantOfferOkei ?? '',
    participantOfferOkeiCode: source?.ParticipantOfferOkeiCode ?? '',
    participantOfferPrice: source?.ParticipantOfferPrice ?? 0,
    participantOfferTax: source?.ParticipantOfferTax ?? 0,
    participantOfferTaxType: adaptVatRateStateEnumToUI(source?.ParticipantOfferTaxType),
    priceListId: source?.PriceListId ?? 0,
    quantity: source?.Quantity ?? 0,
    rowIndex: source?.RowIndex ?? 0,
    tradeLotItemId: source?.TradeLotItemId ?? 0,
  };
}
