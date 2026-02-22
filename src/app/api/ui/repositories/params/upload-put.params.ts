import { UploadPut$Params } from '../../../swagger/fn/upload/upload-put';

// @ts-ignore
export interface UploadPutParams {
}

export function uploadPutAdapter(params?: UploadPutParams): UploadPut$Params {
  if (!params) {
    return {} as UploadPut$Params;
  }
  return {
  };
}
