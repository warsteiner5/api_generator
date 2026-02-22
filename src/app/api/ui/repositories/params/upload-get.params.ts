import { UploadGet$Params } from '../../../swagger/fn/upload/upload-get';

// @ts-ignore
export interface UploadGetParams {
}

export function uploadGetAdapter(params?: UploadGetParams): UploadGet$Params {
  if (!params) {
    return {} as UploadGet$Params;
  }
  return {
  };
}
