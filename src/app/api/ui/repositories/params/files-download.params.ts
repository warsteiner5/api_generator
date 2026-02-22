import { FilesDownload$Params } from '../../../swagger/fn/files/files-download';

// @ts-ignore
export interface FilesDownloadParams {
  id: string;
}

export function filesDownloadAdapter(params?: FilesDownloadParams): FilesDownload$Params {
  if (!params) {
    return {} as FilesDownload$Params;
  }
  return {
      id: params.id,
  };
}
