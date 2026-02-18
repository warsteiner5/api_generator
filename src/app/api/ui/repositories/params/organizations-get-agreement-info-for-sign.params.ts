import { GetFileInfoForSign } from '../../models/get-file-info-for-sign.interface';
import { OrganizationsGetAgreementInfoForSign$Params } from '../../../swagger/fn/organizations/organizations-get-agreement-info-for-sign';
import { adaptApiGetFileInfoForSignDto } from '../../adapters/toDto/api-get-file-info-for-sign-dto.adapter';

export interface OrganizationsGetAgreementInfoForSignParams {
  body?: GetFileInfoForSign;
}

export const organizationsGetAgreementInfoForSignParamsAdapter = {
  adapt(params?: OrganizationsGetAgreementInfoForSignParams): OrganizationsGetAgreementInfoForSign$Params {
    if (!params) {
      return {} as OrganizationsGetAgreementInfoForSign$Params;
    }
    return {
      body: adaptApiGetFileInfoForSignDto(params.body),
    };
  }
};
