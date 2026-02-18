import { FilesByUrl$Params } from '../../../swagger/fn/files/files-by-url';
import { UploadFileByUrlRequestAlt } from '../../models/upload-file-by-url-request-alt.interface';
import { adaptApiUploadFileByUrlRequestAltDto } from '../../adapters/toDto/api-upload-file-by-url-request.adapter';

export interface FilesByUrlParams {
  body?: UploadFileByUrlRequestAlt;
}

export const filesByUrlParamsAdapter = {
  adapt(params?: FilesByUrlParams): FilesByUrl$Params {
    if (!params) {
      return {} as FilesByUrl$Params;
    }
    return {
      body: adaptApiUploadFileByUrlRequestAltDto(params.body),
    };
  }
};
