import { DictionaryGetElementWithoutChildsByCode$Params } from '../../../swagger/fn/dictionary/dictionary-get-element-without-childs-by-code';
import { UsedClassificatorTypeEnum } from '../../enums/used-classificator-type.enum';
import { adaptApiUsedClassificatorTypeEnum } from '../../adapters/toDto/api-used-classificator-type-enum.adapter';

export interface DictionaryGetElementWithoutChildsByCodeParams {
  usedClassificatorType?: UsedClassificatorTypeEnum;
  value?: string;
}

export const dictionaryGetElementWithoutChildsByCodeParamsAdapter = {
  adapt(params?: DictionaryGetElementWithoutChildsByCodeParams): DictionaryGetElementWithoutChildsByCode$Params {
    if (!params) {
      return {} as DictionaryGetElementWithoutChildsByCode$Params;
    }
    return {
      UsedClassificatorType: adaptApiUsedClassificatorTypeEnum(params.usedClassificatorType),
      Value: params.value,
    };
  }
};
