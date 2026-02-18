import { UploadGet$Params } from '../../../swagger/fn/upload/upload-get';

export interface UploadGetParams {
}

export const uploadGetParamsAdapter = {
  adapt(params?: UploadGetParams): UploadGet$Params {
    if (!params) {
      return {} as UploadGet$Params;
    }
    return {
    };
  }
};
