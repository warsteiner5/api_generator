import { ExternalDealCardDocumentsUpload } from '../../models/external-deal-card-documents-upload.interface';
import { ExternalDealUploadDocuments$Params } from '../../../swagger/fn/external-deal/external-deal-upload-documents';
import { apiExternalDealCardDocumentsUploadDtoAdapter } from '../../adapters/models/api-external-deal-card-documents-upload-dto.adapter';

// @ts-ignore
export interface ExternalDealUploadDocumentsParams {
  body?: ExternalDealCardDocumentsUpload;
}

export function externalDealUploadDocumentsAdapter(params?: ExternalDealUploadDocumentsParams): ExternalDealUploadDocuments$Params {
  if (!params) {
    return {} as ExternalDealUploadDocuments$Params;
  }
  return {
      body: apiExternalDealCardDocumentsUploadDtoAdapter(params.body),
  };
}
