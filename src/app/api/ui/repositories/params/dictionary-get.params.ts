import { DictionaryGet$Params } from '../../../swagger/fn/dictionary/dictionary-get';
import { UsedClassificatorTypeEnum } from '../../enums/used-classificator-type.enum';
import { adaptApiUsedClassificatorTypeEnum } from '../../adapters/toDto/api-used-classificator-type-enum.adapter';

export interface DictionaryGetParams {
  usedClassificatorType?: UsedClassificatorTypeEnum;
  value?: string;
}

export const dictionaryGetParamsAdapter = {
  adapt(params?: DictionaryGetParams): DictionaryGet$Params {
    if (!params) {
      return {} as DictionaryGet$Params;
    }
    return {
      UsedClassificatorType: adaptApiUsedClassificatorTypeEnum(params.usedClassificatorType),
      Value: params.value,
    };
  }
};
