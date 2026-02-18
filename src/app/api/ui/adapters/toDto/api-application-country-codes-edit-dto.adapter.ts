import { ApplicationCountryCodesEdit } from '../../models/application-country-codes-edit.interface';
import { ApiApplicationCountryCodesEditDto } from '../../../swagger/models/api-application-country-codes-edit-dto';
import { adaptApiLotItemApplicationEditDto } from './api-lot-item-application-edit-dto.adapter';

export function adaptApiApplicationCountryCodesEditDto(source?: ApplicationCountryCodesEdit | null): ApiApplicationCountryCodesEditDto {
  return {
    Id: source?.id,
    LotItemApplications: (source?.lotItemApplications ?? []).map((item) => adaptApiLotItemApplicationEditDto(item)),
  };
}
