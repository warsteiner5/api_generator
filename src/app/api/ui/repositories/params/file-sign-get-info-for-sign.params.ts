import { FileSignGetInfoForSign$Params } from '../../../swagger/fn/file-sign/file-sign-get-info-for-sign';
import { GetFileInfoForSign } from '../../models/get-file-info-for-sign.interface';
import { apiGetFileInfoForSignDtoAdapter } from '../../adapters/models/api-get-file-info-for-sign-dto.adapter';

// @ts-ignore
export interface FileSignGetInfoForSignParams {
  body?: GetFileInfoForSign;
}

export function fileSignGetInfoForSignAdapter(params?: FileSignGetInfoForSignParams): FileSignGetInfoForSign$Params {
  if (!params) {
    return {} as FileSignGetInfoForSign$Params;
  }
  return {
      body: apiGetFileInfoForSignDtoAdapter(params.body),
  };
}
