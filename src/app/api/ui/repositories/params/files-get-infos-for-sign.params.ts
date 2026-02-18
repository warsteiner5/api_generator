import { FilesGetInfosForSign$Params } from '../../../swagger/fn/files/files-get-infos-for-sign';
import { GetFilesInfoForSign } from '../../models/get-files-info-for-sign.interface';
import { adaptApiGetFilesInfoForSignDto } from '../../adapters/toDto/api-get-files-info-for-sign-dto.adapter';

export interface FilesGetInfosForSignParams {
  body?: GetFilesInfoForSign;
}

export const filesGetInfosForSignParamsAdapter = {
  adapt(params?: FilesGetInfosForSignParams): FilesGetInfosForSign$Params {
    if (!params) {
      return {} as FilesGetInfosForSign$Params;
    }
    return {
      body: adaptApiGetFilesInfoForSignDto(params.body),
    };
  }
};
