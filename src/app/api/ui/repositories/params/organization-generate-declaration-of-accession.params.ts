import { OrganizationGenerateDeclarationOfAccession$Params } from '../../../swagger/fn/organization/organization-generate-declaration-of-accession';

export interface OrganizationGenerateDeclarationOfAccessionParams {
}

export const organizationGenerateDeclarationOfAccessionParamsAdapter = {
  adapt(params?: OrganizationGenerateDeclarationOfAccessionParams): OrganizationGenerateDeclarationOfAccession$Params {
    if (!params) {
      return {} as OrganizationGenerateDeclarationOfAccession$Params;
    }
    return {
    };
  }
};
