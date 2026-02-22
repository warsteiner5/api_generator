import { DictionaryGetElementWithoutChildsByCode$Params } from '../../../swagger/fn/dictionary/dictionary-get-element-without-childs-by-code';
import { UsedClassificatorTypeEnum } from '../../enums/used-classificator-type.enum';
import { apiUsedClassificatorTypeEnumAdapter } from '../../adapters/enums/api-used-classificator-type-enum.adapter';

// @ts-ignore
export interface DictionaryGetElementWithoutChildsByCodeParams {
  usedClassificatorType?: UsedClassificatorTypeEnum;
  value?: string;
}

export function dictionaryGetElementWithoutChildsByCodeAdapter(params?: DictionaryGetElementWithoutChildsByCodeParams): DictionaryGetElementWithoutChildsByCode$Params {
  if (!params) {
    return {} as DictionaryGetElementWithoutChildsByCode$Params;
  }
  return {
      UsedClassificatorType: apiUsedClassificatorTypeEnumAdapter(params.usedClassificatorType),
      Value: params.value,
  };
}
