import { ApiImportExcelParticipantOfferDto } from '../../../swagger/models/api-import-excel-participant-offer-dto';
import { ImportExcelParticipantOffer } from '../../models/import-excel-participant-offer.interface';
import { manufacturerCountryRegistryTypeEnumAdapter } from '../enums/manufacturer-country-registry-type-enum.adapter';
import { vatRateStateEnumAdapter } from '../enums/vat-rate-state-enum.adapter';

export const importExcelParticipantOfferAdapter = (source?: ApiImportExcelParticipantOfferDto | null): ImportExcelParticipantOffer => {
  return {
    country: source?.Country,
    countryCode: source?.CountryCode,
    deliveryRegionCodes: source?.DeliveryRegionCodes,
    isCreated: source?.IsCreated,
    itemOrderNumber: source?.ItemOrderNumber,
    manufacturerCountryRegistryNumber: source?.ManufacturerCountryRegistryNumber,
    manufacturerCountryRegistryType: source?.ManufacturerCountryRegistryType === null ? undefined : manufacturerCountryRegistryTypeEnumAdapter(source?.ManufacturerCountryRegistryType),
    manufacturerCountryScore: source?.ManufacturerCountryScore,
    minQuantity: source?.MinQuantity,
    okpd2Codes: source?.Okpd2Codes,
    participantOfferDescription: source?.ParticipantOfferDescription,
    participantOfferId: source?.ParticipantOfferId,
    participantOfferName: source?.ParticipantOfferName,
    participantOfferOkei: source?.ParticipantOfferOkei,
    participantOfferOkeiCode: source?.ParticipantOfferOkeiCode,
    participantOfferPrice: source?.ParticipantOfferPrice,
    participantOfferTax: source?.ParticipantOfferTax,
    participantOfferTaxType: source?.ParticipantOfferTaxType === null ? undefined : vatRateStateEnumAdapter(source?.ParticipantOfferTaxType),
    priceListId: source?.PriceListId,
    quantity: source?.Quantity,
    rowIndex: source?.RowIndex,
    tradeLotItemId: source?.TradeLotItemId,
  };
}
