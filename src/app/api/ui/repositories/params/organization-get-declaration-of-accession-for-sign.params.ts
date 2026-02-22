import { GetFileInfoForSign } from '../../models/get-file-info-for-sign.interface';
import { OrganizationGetDeclarationOfAccessionForSign$Params } from '../../../swagger/fn/organization/organization-get-declaration-of-accession-for-sign';
import { apiGetFileInfoForSignDtoAdapter } from '../../adapters/models/api-get-file-info-for-sign-dto.adapter';

// @ts-ignore
export interface OrganizationGetDeclarationOfAccessionForSignParams {
  body?: GetFileInfoForSign;
}

export function organizationGetDeclarationOfAccessionForSignAdapter(params?: OrganizationGetDeclarationOfAccessionForSignParams): OrganizationGetDeclarationOfAccessionForSign$Params {
  if (!params) {
    return {} as OrganizationGetDeclarationOfAccessionForSign$Params;
  }
  return {
      body: apiGetFileInfoForSignDtoAdapter(params.body),
  };
}
