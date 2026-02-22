import { FileSign } from '../../models/file-sign.interface';
import { OrganizationSignAndAgreeDeclarationOfAccession$Params } from '../../../swagger/fn/organization/organization-sign-and-agree-declaration-of-accession';
import { apiFileSignDtoAdapter } from '../../adapters/models/api-file-sign-dto.adapter';

// @ts-ignore
export interface OrganizationSignAndAgreeDeclarationOfAccessionParams {
  body?: FileSign;
}

export function organizationSignAndAgreeDeclarationOfAccessionAdapter(params?: OrganizationSignAndAgreeDeclarationOfAccessionParams): OrganizationSignAndAgreeDeclarationOfAccession$Params {
  if (!params) {
    return {} as OrganizationSignAndAgreeDeclarationOfAccession$Params;
  }
  return {
      body: apiFileSignDtoAdapter(params.body),
  };
}
