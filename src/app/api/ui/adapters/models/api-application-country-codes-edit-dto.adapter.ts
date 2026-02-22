import { ApplicationCountryCodesEdit } from '../../models/application-country-codes-edit.interface';
import { ApiApplicationCountryCodesEditDto } from '../../../swagger/models/api-application-country-codes-edit-dto';
import { apiLotItemApplicationEditDtoAdapter } from './api-lot-item-application-edit-dto.adapter';

export const apiApplicationCountryCodesEditDtoAdapter = (source?: ApplicationCountryCodesEdit | null): ApiApplicationCountryCodesEditDto => {
  return {
    Id: source?.id,
    LotItemApplications: source?.lotItemApplications?.map((item) => apiLotItemApplicationEditDtoAdapter(item)),
  };
}
