import { FilesByUrl$Params } from '../../../swagger/fn/files/files-by-url';
import { UploadFileByUrlRequestAlt } from '../../models/upload-file-by-url-request-alt.interface';
import { apiUploadFileByUrlRequestAltDtoAdapter } from '../../adapters/models/api-upload-file-by-url-request.adapter';

// @ts-ignore
export interface FilesByUrlParams {
  body?: UploadFileByUrlRequestAlt;
}

export function filesByUrlAdapter(params?: FilesByUrlParams): FilesByUrl$Params {
  if (!params) {
    return {} as FilesByUrl$Params;
  }
  return {
      body: apiUploadFileByUrlRequestAltDtoAdapter(params.body),
  };
}
