import { FileSignGetInfosForSign$Params } from '../../../swagger/fn/file-sign/file-sign-get-infos-for-sign';
import { GetFilesInfoForSign } from '../../models/get-files-info-for-sign.interface';
import { adaptApiGetFilesInfoForSignDto } from '../../adapters/toDto/api-get-files-info-for-sign-dto.adapter';

export interface FileSignGetInfosForSignParams {
  body?: GetFilesInfoForSign;
}

export const fileSignGetInfosForSignParamsAdapter = {
  adapt(params?: FileSignGetInfosForSignParams): FileSignGetInfosForSign$Params {
    if (!params) {
      return {} as FileSignGetInfosForSign$Params;
    }
    return {
      body: adaptApiGetFilesInfoForSignDto(params.body),
    };
  }
};
