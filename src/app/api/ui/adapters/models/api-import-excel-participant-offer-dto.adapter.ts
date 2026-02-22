import { ImportExcelParticipantOffer } from '../../models/import-excel-participant-offer.interface';
import { ApiImportExcelParticipantOfferDto } from '../../../swagger/models/api-import-excel-participant-offer-dto';
import { apiManufacturerCountryRegistryTypeEnumAdapter } from '../enums/api-manufacturer-country-registry-type-enum.adapter';
import { apiVatRateStateEnumAdapter } from '../enums/api-vat-rate-state-enum.adapter';

export const apiImportExcelParticipantOfferDtoAdapter = (source?: ImportExcelParticipantOffer | null): ApiImportExcelParticipantOfferDto => {
  return {
    Country: source?.country,
    CountryCode: source?.countryCode,
    DeliveryRegionCodes: source?.deliveryRegionCodes,
    IsCreated: source?.isCreated,
    ItemOrderNumber: source?.itemOrderNumber,
    ManufacturerCountryRegistryNumber: source?.manufacturerCountryRegistryNumber,
    ManufacturerCountryRegistryType: source?.manufacturerCountryRegistryType === null ? undefined : apiManufacturerCountryRegistryTypeEnumAdapter(source?.manufacturerCountryRegistryType),
    ManufacturerCountryScore: source?.manufacturerCountryScore,
    MinQuantity: source?.minQuantity,
    Okpd2Codes: source?.okpd2Codes,
    ParticipantOfferDescription: source?.participantOfferDescription,
    ParticipantOfferId: source?.participantOfferId,
    ParticipantOfferName: source?.participantOfferName,
    ParticipantOfferOkei: source?.participantOfferOkei,
    ParticipantOfferOkeiCode: source?.participantOfferOkeiCode,
    ParticipantOfferPrice: source?.participantOfferPrice,
    ParticipantOfferTax: source?.participantOfferTax,
    ParticipantOfferTaxType: source?.participantOfferTaxType === null ? undefined : apiVatRateStateEnumAdapter(source?.participantOfferTaxType),
    PriceListId: source?.priceListId,
    Quantity: source?.quantity,
    RowIndex: source?.rowIndex,
    TradeLotItemId: source?.tradeLotItemId,
  };
}
