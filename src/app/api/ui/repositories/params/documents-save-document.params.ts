import { DocumentsSaveDocument$Params } from '../../../swagger/fn/documents/documents-save-document';
import { OrganizationDocument } from '../../models/organization-document.interface';
import { apiOrganizationDocumentDtoAdapter } from '../../adapters/models/api-organization-document-dto.adapter';

// @ts-ignore
export interface DocumentsSaveDocumentParams {
  body?: OrganizationDocument;
}

export function documentsSaveDocumentAdapter(params?: DocumentsSaveDocumentParams): DocumentsSaveDocument$Params {
  if (!params) {
    return {} as DocumentsSaveDocument$Params;
  }
  return {
      body: apiOrganizationDocumentDtoAdapter(params.body),
  };
}
