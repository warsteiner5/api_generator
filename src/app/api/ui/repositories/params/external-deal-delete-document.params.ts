import { ExternalDealCardDeleteDocument } from '../../models/external-deal-card-delete-document.interface';
import { ExternalDealDeleteDocument$Params } from '../../../swagger/fn/external-deal/external-deal-delete-document';
import { apiExternalDealCardDeleteDocumentDtoAdapter } from '../../adapters/models/api-external-deal-card-delete-document-dto.adapter';

// @ts-ignore
export interface ExternalDealDeleteDocumentParams {
  body?: ExternalDealCardDeleteDocument;
}

export function externalDealDeleteDocumentAdapter(params?: ExternalDealDeleteDocumentParams): ExternalDealDeleteDocument$Params {
  if (!params) {
    return {} as ExternalDealDeleteDocument$Params;
  }
  return {
      body: apiExternalDealCardDeleteDocumentDtoAdapter(params.body),
  };
}
