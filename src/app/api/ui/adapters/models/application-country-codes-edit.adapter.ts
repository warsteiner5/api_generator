import { ApiApplicationCountryCodesEditDto } from '../../../swagger/models/api-application-country-codes-edit-dto';
import { ApplicationCountryCodesEdit } from '../../models/application-country-codes-edit.interface';
import { lotItemApplicationEditAdapter } from './lot-item-application-edit.adapter';

export const applicationCountryCodesEditAdapter = (source?: ApiApplicationCountryCodesEditDto | null): ApplicationCountryCodesEdit => {
  return {
    id: source?.Id,
    lotItemApplications: source?.LotItemApplications?.map((item) => lotItemApplicationEditAdapter(item)),
  };
}
