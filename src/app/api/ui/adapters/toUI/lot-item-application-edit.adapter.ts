import { ApiLotItemApplicationEditDto } from '../../../swagger/models/api-lot-item-application-edit-dto';
import { LotItemApplicationEdit } from '../../models/lot-item-application-edit.interface';
import { adaptLotItemApplicationCountryCodeToUI } from './lot-item-application-country-code.adapter';

export function adaptLotItemApplicationEditToUI(source?: ApiLotItemApplicationEditDto | null): LotItemApplicationEdit {
  return {
    id: source?.Id ?? 0,
    lotItemOrder: source?.LotItemOrder ?? 0,
    manufacturerCountryCodes: (source?.ManufacturerCountryCodes ?? []).map((item) => adaptLotItemApplicationCountryCodeToUI(item)),
  };
}
