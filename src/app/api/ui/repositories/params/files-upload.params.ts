import { FilesUpload$Params } from '../../../swagger/fn/files/files-upload';

export interface FilesUploadParams {
}

export const filesUploadParamsAdapter = {
  adapt(params?: FilesUploadParams): FilesUpload$Params {
    if (!params) {
      return {} as FilesUpload$Params;
    }
    return {
    };
  }
};
