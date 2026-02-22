import { AccountMakeOrganizationDocumentActual$Params } from '../../../swagger/fn/account/account-make-organization-document-actual';

// @ts-ignore
export interface AccountMakeOrganizationDocumentActualParams {
  body?: string;
}

export function accountMakeOrganizationDocumentActualAdapter(params?: AccountMakeOrganizationDocumentActualParams): AccountMakeOrganizationDocumentActual$Params {
  if (!params) {
    return {} as AccountMakeOrganizationDocumentActual$Params;
  }
  return {
      body: params.body,
  };
}
