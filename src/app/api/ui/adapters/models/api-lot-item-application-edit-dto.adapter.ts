import { LotItemApplicationEdit } from '../../models/lot-item-application-edit.interface';
import { ApiLotItemApplicationEditDto } from '../../../swagger/models/api-lot-item-application-edit-dto';
import { apiLotItemApplicationCountryCodeDtoAdapter } from './api-lot-item-application-country-code-dto.adapter';

export const apiLotItemApplicationEditDtoAdapter = (source?: LotItemApplicationEdit | null): ApiLotItemApplicationEditDto => {
  return {
    Id: source?.id,
    LotItemOrder: source?.lotItemOrder,
    ManufacturerCountryCodes: source?.manufacturerCountryCodes?.map((item) => apiLotItemApplicationCountryCodeDtoAdapter(item)),
  };
}
