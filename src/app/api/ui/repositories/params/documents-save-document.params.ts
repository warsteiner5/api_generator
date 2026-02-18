import { DocumentsSaveDocument$Params } from '../../../swagger/fn/documents/documents-save-document';
import { OrganizationDocument } from '../../models/organization-document.interface';
import { adaptApiOrganizationDocumentDto } from '../../adapters/toDto/api-organization-document-dto.adapter';

export interface DocumentsSaveDocumentParams {
  body?: OrganizationDocument;
}

export const documentsSaveDocumentParamsAdapter = {
  adapt(params?: DocumentsSaveDocumentParams): DocumentsSaveDocument$Params {
    if (!params) {
      return {} as DocumentsSaveDocument$Params;
    }
    return {
      body: adaptApiOrganizationDocumentDto(params.body),
    };
  }
};
