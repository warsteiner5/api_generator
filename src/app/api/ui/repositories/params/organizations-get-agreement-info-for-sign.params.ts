import { GetFileInfoForSign } from '../../models/get-file-info-for-sign.interface';
import { OrganizationsGetAgreementInfoForSign$Params } from '../../../swagger/fn/organizations/organizations-get-agreement-info-for-sign';
import { apiGetFileInfoForSignDtoAdapter } from '../../adapters/models/api-get-file-info-for-sign-dto.adapter';

// @ts-ignore
export interface OrganizationsGetAgreementInfoForSignParams {
  body?: GetFileInfoForSign;
}

export function organizationsGetAgreementInfoForSignAdapter(params?: OrganizationsGetAgreementInfoForSignParams): OrganizationsGetAgreementInfoForSign$Params {
  if (!params) {
    return {} as OrganizationsGetAgreementInfoForSign$Params;
  }
  return {
      body: apiGetFileInfoForSignDtoAdapter(params.body),
  };
}
