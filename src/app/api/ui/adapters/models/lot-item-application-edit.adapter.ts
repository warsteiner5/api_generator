import { ApiLotItemApplicationEditDto } from '../../../swagger/models/api-lot-item-application-edit-dto';
import { LotItemApplicationEdit } from '../../models/lot-item-application-edit.interface';
import { lotItemApplicationCountryCodeAdapter } from './lot-item-application-country-code.adapter';

export const lotItemApplicationEditAdapter = (source?: ApiLotItemApplicationEditDto | null): LotItemApplicationEdit => {
  return {
    id: source?.Id,
    lotItemOrder: source?.LotItemOrder,
    manufacturerCountryCodes: source?.ManufacturerCountryCodes?.map((item) => lotItemApplicationCountryCodeAdapter(item)),
  };
}
