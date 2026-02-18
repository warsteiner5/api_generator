import { FileSign } from '../../models/file-sign.interface';
import { OrganizationSignAndAgreeDeclarationOfAccession$Params } from '../../../swagger/fn/organization/organization-sign-and-agree-declaration-of-accession';
import { adaptApiFileSignDto } from '../../adapters/toDto/api-file-sign-dto.adapter';

export interface OrganizationSignAndAgreeDeclarationOfAccessionParams {
  body?: FileSign;
}

export const organizationSignAndAgreeDeclarationOfAccessionParamsAdapter = {
  adapt(params?: OrganizationSignAndAgreeDeclarationOfAccessionParams): OrganizationSignAndAgreeDeclarationOfAccession$Params {
    if (!params) {
      return {} as OrganizationSignAndAgreeDeclarationOfAccession$Params;
    }
    return {
      body: adaptApiFileSignDto(params.body),
    };
  }
};
