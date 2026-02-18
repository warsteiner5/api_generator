import { DictionaryGetByCode$Params } from '../../../swagger/fn/dictionary/dictionary-get-by-code';
import { UsedClassificatorTypeEnum } from '../../enums/used-classificator-type.enum';
import { adaptApiUsedClassificatorTypeEnum } from '../../adapters/toDto/api-used-classificator-type-enum.adapter';

export interface DictionaryGetByCodeParams {
  usedClassificatorType?: UsedClassificatorTypeEnum;
  value?: string;
}

export const dictionaryGetByCodeParamsAdapter = {
  adapt(params?: DictionaryGetByCodeParams): DictionaryGetByCode$Params {
    if (!params) {
      return {} as DictionaryGetByCode$Params;
    }
    return {
      UsedClassificatorType: adaptApiUsedClassificatorTypeEnum(params.usedClassificatorType),
      Value: params.value,
    };
  }
};
