import { AccountMakeOrganizationDocumentActual$Params } from '../../../swagger/fn/account/account-make-organization-document-actual';

export interface AccountMakeOrganizationDocumentActualParams {
  body?: string;
}

export const accountMakeOrganizationDocumentActualParamsAdapter = {
  adapt(params?: AccountMakeOrganizationDocumentActualParams): AccountMakeOrganizationDocumentActual$Params {
    if (!params) {
      return {} as AccountMakeOrganizationDocumentActual$Params;
    }
    return {
      body: params.body,
    };
  }
};
