import { ApiApplicationCountryCodesEditDto } from '../../../swagger/models/api-application-country-codes-edit-dto';
import { ApplicationCountryCodesEdit } from '../../models/application-country-codes-edit.interface';
import { adaptLotItemApplicationEditToUI } from './lot-item-application-edit.adapter';

export function adaptApplicationCountryCodesEditToUI(source?: ApiApplicationCountryCodesEditDto | null): ApplicationCountryCodesEdit {
  return {
    id: source?.Id ?? 0,
    lotItemApplications: (source?.LotItemApplications ?? []).map((item) => adaptLotItemApplicationEditToUI(item)),
  };
}
