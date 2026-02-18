import { LotItemApplicationEdit } from '../../models/lot-item-application-edit.interface';
import { ApiLotItemApplicationEditDto } from '../../../swagger/models/api-lot-item-application-edit-dto';
import { adaptApiLotItemApplicationCountryCodeDto } from './api-lot-item-application-country-code-dto.adapter';

export function adaptApiLotItemApplicationEditDto(source?: LotItemApplicationEdit | null): ApiLotItemApplicationEditDto {
  return {
    Id: source?.id,
    LotItemOrder: source?.lotItemOrder,
    ManufacturerCountryCodes: (source?.manufacturerCountryCodes ?? []).map((item) => adaptApiLotItemApplicationCountryCodeDto(item)),
  };
}
