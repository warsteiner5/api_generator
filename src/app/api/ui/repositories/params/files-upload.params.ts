import { FilesUpload$Params } from '../../../swagger/fn/files/files-upload';

// @ts-ignore
export interface FilesUploadParams {
}

export function filesUploadAdapter(params?: FilesUploadParams): FilesUpload$Params {
  if (!params) {
    return {} as FilesUpload$Params;
  }
  return {
  };
}
