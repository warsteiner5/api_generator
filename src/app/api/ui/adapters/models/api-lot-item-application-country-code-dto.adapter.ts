import { LotItemApplicationCountryCode } from '../../models/lot-item-application-country-code.interface';
import { ApiLotItemApplicationCountryCodeDto } from '../../../swagger/models/api-lot-item-application-country-code-dto';

export const apiLotItemApplicationCountryCodeDtoAdapter = (source?: LotItemApplicationCountryCode | null): ApiLotItemApplicationCountryCodeDto => {
  return {
    ManufacturerCountryCode: source?.manufacturerCountryCode,
    ManufacturerCountryNameShort: source?.manufacturerCountryNameShort,
  };
}
