import { DictionaryGetAllByCode$Params } from '../../../swagger/fn/dictionary/dictionary-get-all-by-code';
import { UsedClassificatorTypeEnum } from '../../enums/used-classificator-type.enum';
import { adaptApiUsedClassificatorTypeEnum } from '../../adapters/toDto/api-used-classificator-type-enum.adapter';

export interface DictionaryGetAllByCodeParams {
  pageNumber?: number;
  pageSize?: number;
  usedClassificatorType?: UsedClassificatorTypeEnum;
  value?: string;
}

export const dictionaryGetAllByCodeParamsAdapter = {
  adapt(params?: DictionaryGetAllByCodeParams): DictionaryGetAllByCode$Params {
    if (!params) {
      return {} as DictionaryGetAllByCode$Params;
    }
    return {
      PageNumber: params.pageNumber,
      PageSize: params.pageSize,
      UsedClassificatorType: adaptApiUsedClassificatorTypeEnum(params.usedClassificatorType),
      Value: params.value,
    };
  }
};
