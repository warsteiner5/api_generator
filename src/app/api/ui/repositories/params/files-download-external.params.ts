import { FilesDownloadExternal$Params } from '../../../swagger/fn/files/files-download-external';

// @ts-ignore
export interface FilesDownloadExternalParams {
  url: string;
}

export function filesDownloadExternalAdapter(params?: FilesDownloadExternalParams): FilesDownloadExternal$Params {
  if (!params) {
    return {} as FilesDownloadExternal$Params;
  }
  return {
      url: params.url,
  };
}
