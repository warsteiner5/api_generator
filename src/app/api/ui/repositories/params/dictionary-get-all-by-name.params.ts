import { DictionaryGetAllByName$Params } from '../../../swagger/fn/dictionary/dictionary-get-all-by-name';
import { UsedClassificatorTypeEnum } from '../../enums/used-classificator-type.enum';
import { adaptApiUsedClassificatorTypeEnum } from '../../adapters/toDto/api-used-classificator-type-enum.adapter';

export interface DictionaryGetAllByNameParams {
  pageNumber?: number;
  pageSize?: number;
  usedClassificatorType?: UsedClassificatorTypeEnum;
  value?: string;
}

export const dictionaryGetAllByNameParamsAdapter = {
  adapt(params?: DictionaryGetAllByNameParams): DictionaryGetAllByName$Params {
    if (!params) {
      return {} as DictionaryGetAllByName$Params;
    }
    return {
      PageNumber: params.pageNumber,
      PageSize: params.pageSize,
      UsedClassificatorType: adaptApiUsedClassificatorTypeEnum(params.usedClassificatorType),
      Value: params.value,
    };
  }
};
