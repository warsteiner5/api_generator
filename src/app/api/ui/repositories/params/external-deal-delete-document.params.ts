import { ExternalDealCardDeleteDocument } from '../../models/external-deal-card-delete-document.interface';
import { ExternalDealDeleteDocument$Params } from '../../../swagger/fn/external-deal/external-deal-delete-document';
import { adaptApiExternalDealCardDeleteDocumentDto } from '../../adapters/toDto/api-external-deal-card-delete-document-dto.adapter';

export interface ExternalDealDeleteDocumentParams {
  body?: ExternalDealCardDeleteDocument;
}

export const externalDealDeleteDocumentParamsAdapter = {
  adapt(params?: ExternalDealDeleteDocumentParams): ExternalDealDeleteDocument$Params {
    if (!params) {
      return {} as ExternalDealDeleteDocument$Params;
    }
    return {
      body: adaptApiExternalDealCardDeleteDocumentDto(params.body),
    };
  }
};
