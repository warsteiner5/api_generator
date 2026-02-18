import { GetFileInfoForSign } from '../../models/get-file-info-for-sign.interface';
import { OrganizationGetDeclarationOfAccessionForSign$Params } from '../../../swagger/fn/organization/organization-get-declaration-of-accession-for-sign';
import { adaptApiGetFileInfoForSignDto } from '../../adapters/toDto/api-get-file-info-for-sign-dto.adapter';

export interface OrganizationGetDeclarationOfAccessionForSignParams {
  body?: GetFileInfoForSign;
}

export const organizationGetDeclarationOfAccessionForSignParamsAdapter = {
  adapt(params?: OrganizationGetDeclarationOfAccessionForSignParams): OrganizationGetDeclarationOfAccessionForSign$Params {
    if (!params) {
      return {} as OrganizationGetDeclarationOfAccessionForSign$Params;
    }
    return {
      body: adaptApiGetFileInfoForSignDto(params.body),
    };
  }
};
