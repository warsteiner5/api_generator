import { FileSignGetInfoForSign$Params } from '../../../swagger/fn/file-sign/file-sign-get-info-for-sign';
import { GetFileInfoForSign } from '../../models/get-file-info-for-sign.interface';
import { adaptApiGetFileInfoForSignDto } from '../../adapters/toDto/api-get-file-info-for-sign-dto.adapter';

export interface FileSignGetInfoForSignParams {
  body?: GetFileInfoForSign;
}

export const fileSignGetInfoForSignParamsAdapter = {
  adapt(params?: FileSignGetInfoForSignParams): FileSignGetInfoForSign$Params {
    if (!params) {
      return {} as FileSignGetInfoForSign$Params;
    }
    return {
      body: adaptApiGetFileInfoForSignDto(params.body),
    };
  }
};
