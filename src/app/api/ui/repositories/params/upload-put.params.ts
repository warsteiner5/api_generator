import { UploadPut$Params } from '../../../swagger/fn/upload/upload-put';

export interface UploadPutParams {
}

export const uploadPutParamsAdapter = {
  adapt(params?: UploadPutParams): UploadPut$Params {
    if (!params) {
      return {} as UploadPut$Params;
    }
    return {
    };
  }
};
