import { ExternalDealCardDocumentsUpload } from '../../models/external-deal-card-documents-upload.interface';
import { ExternalDealUploadDocuments$Params } from '../../../swagger/fn/external-deal/external-deal-upload-documents';
import { adaptApiExternalDealCardDocumentsUploadDto } from '../../adapters/toDto/api-external-deal-card-documents-upload-dto.adapter';

export interface ExternalDealUploadDocumentsParams {
  body?: ExternalDealCardDocumentsUpload;
}

export const externalDealUploadDocumentsParamsAdapter = {
  adapt(params?: ExternalDealUploadDocumentsParams): ExternalDealUploadDocuments$Params {
    if (!params) {
      return {} as ExternalDealUploadDocuments$Params;
    }
    return {
      body: adaptApiExternalDealCardDocumentsUploadDto(params.body),
    };
  }
};
