import { UploadPost$Params } from '../../../swagger/fn/upload/upload-post';

// @ts-ignore
export interface UploadPostParams {
}

export function uploadPostAdapter(params?: UploadPostParams): UploadPost$Params {
  if (!params) {
    return {} as UploadPost$Params;
  }
  return {
  };
}
