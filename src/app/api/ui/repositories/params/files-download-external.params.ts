import { FilesDownloadExternal$Params } from '../../../swagger/fn/files/files-download-external';

export interface FilesDownloadExternalParams {
  url: string;
}

export const filesDownloadExternalParamsAdapter = {
  adapt(params?: FilesDownloadExternalParams): FilesDownloadExternal$Params {
    if (!params) {
      return {} as FilesDownloadExternal$Params;
    }
    return {
      url: params.url,
    };
  }
};
