import { AccountMakeOrganizationDocumentNotActual$Params } from '../../../swagger/fn/account/account-make-organization-document-not-actual';

// @ts-ignore
export interface AccountMakeOrganizationDocumentNotActualParams {
  body?: string;
}

export function accountMakeOrganizationDocumentNotActualAdapter(params?: AccountMakeOrganizationDocumentNotActualParams): AccountMakeOrganizationDocumentNotActual$Params {
  if (!params) {
    return {} as AccountMakeOrganizationDocumentNotActual$Params;
  }
  return {
      body: params.body,
  };
}
