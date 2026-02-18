import { FilesDownload$Params } from '../../../swagger/fn/files/files-download';

export interface FilesDownloadParams {
  id: string;
}

export const filesDownloadParamsAdapter = {
  adapt(params?: FilesDownloadParams): FilesDownload$Params {
    if (!params) {
      return {} as FilesDownload$Params;
    }
    return {
      id: params.id,
    };
  }
};
