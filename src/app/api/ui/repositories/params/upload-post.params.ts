import { UploadPost$Params } from '../../../swagger/fn/upload/upload-post';

export interface UploadPostParams {
}

export const uploadPostParamsAdapter = {
  adapt(params?: UploadPostParams): UploadPost$Params {
    if (!params) {
      return {} as UploadPost$Params;
    }
    return {
    };
  }
};
