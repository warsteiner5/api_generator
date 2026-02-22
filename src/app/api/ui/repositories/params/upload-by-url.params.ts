import { UploadByUrl$Params } from '../../../swagger/fn/upload/upload-by-url';
import { UploadFileByUrlRequestAlt } from '../../models/upload-file-by-url-request-alt.interface';
import { apiUploadFileByUrlRequestAltDtoAdapter } from '../../adapters/models/api-upload-file-by-url-request.adapter';

// @ts-ignore
export interface UploadByUrlParams {
  body?: UploadFileByUrlRequestAlt;
}

export function uploadByUrlAdapter(params?: UploadByUrlParams): UploadByUrl$Params {
  if (!params) {
    return {} as UploadByUrl$Params;
  }
  return {
      body: apiUploadFileByUrlRequestAltDtoAdapter(params.body),
  };
}
