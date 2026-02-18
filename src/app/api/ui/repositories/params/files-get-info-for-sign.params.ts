import { FilesGetInfoForSign$Params } from '../../../swagger/fn/files/files-get-info-for-sign';
import { GetFileInfoForSign } from '../../models/get-file-info-for-sign.interface';
import { adaptApiGetFileInfoForSignDto } from '../../adapters/toDto/api-get-file-info-for-sign-dto.adapter';

export interface FilesGetInfoForSignParams {
  body?: GetFileInfoForSign;
}

export const filesGetInfoForSignParamsAdapter = {
  adapt(params?: FilesGetInfoForSignParams): FilesGetInfoForSign$Params {
    if (!params) {
      return {} as FilesGetInfoForSign$Params;
    }
    return {
      body: adaptApiGetFileInfoForSignDto(params.body),
    };
  }
};
