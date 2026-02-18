import { FileSign } from '../../models/file-sign.interface';
import { FileSignSignFile$Params } from '../../../swagger/fn/file-sign/file-sign-sign-file';
import { adaptApiFileSignDto } from '../../adapters/toDto/api-file-sign-dto.adapter';

export interface FileSignSignFileParams {
  body?: FileSign;
}

export const fileSignSignFileParamsAdapter = {
  adapt(params?: FileSignSignFileParams): FileSignSignFile$Params {
    if (!params) {
      return {} as FileSignSignFile$Params;
    }
    return {
      body: adaptApiFileSignDto(params.body),
    };
  }
};
