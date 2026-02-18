import { ImportExcelParticipantOffer } from '../../models/import-excel-participant-offer.interface';
import { ApiImportExcelParticipantOfferDto } from '../../../swagger/models/api-import-excel-participant-offer-dto';
import { adaptApiManufacturerCountryRegistryTypeEnum } from './api-manufacturer-country-registry-type-enum.adapter';
import { adaptApiVatRateStateEnum } from './api-vat-rate-state-enum.adapter';

export function adaptApiImportExcelParticipantOfferDto(source?: ImportExcelParticipantOffer | null): ApiImportExcelParticipantOfferDto {
  return {
    Country: source?.country,
    CountryCode: source?.countryCode,
    DeliveryRegionCodes: source?.deliveryRegionCodes ?? [],
    IsCreated: source?.isCreated,
    ItemOrderNumber: source?.itemOrderNumber,
    ManufacturerCountryRegistryNumber: source?.manufacturerCountryRegistryNumber,
    ManufacturerCountryRegistryType: adaptApiManufacturerCountryRegistryTypeEnum(source?.manufacturerCountryRegistryType),
    ManufacturerCountryScore: source?.manufacturerCountryScore,
    MinQuantity: source?.minQuantity,
    Okpd2Codes: source?.okpd2Codes ?? [],
    ParticipantOfferDescription: source?.participantOfferDescription,
    ParticipantOfferId: source?.participantOfferId,
    ParticipantOfferName: source?.participantOfferName,
    ParticipantOfferOkei: source?.participantOfferOkei,
    ParticipantOfferOkeiCode: source?.participantOfferOkeiCode,
    ParticipantOfferPrice: source?.participantOfferPrice,
    ParticipantOfferTax: source?.participantOfferTax,
    ParticipantOfferTaxType: adaptApiVatRateStateEnum(source?.participantOfferTaxType),
    PriceListId: source?.priceListId,
    Quantity: source?.quantity,
    RowIndex: source?.rowIndex,
    TradeLotItemId: source?.tradeLotItemId,
  };
}
