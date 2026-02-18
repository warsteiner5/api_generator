import { UploadByUrl$Params } from '../../../swagger/fn/upload/upload-by-url';
import { UploadFileByUrlRequestAlt } from '../../models/upload-file-by-url-request-alt.interface';
import { adaptApiUploadFileByUrlRequestAltDto } from '../../adapters/toDto/api-upload-file-by-url-request.adapter';

export interface UploadByUrlParams {
  body?: UploadFileByUrlRequestAlt;
}

export const uploadByUrlParamsAdapter = {
  adapt(params?: UploadByUrlParams): UploadByUrl$Params {
    if (!params) {
      return {} as UploadByUrl$Params;
    }
    return {
      body: adaptApiUploadFileByUrlRequestAltDto(params.body),
    };
  }
};
