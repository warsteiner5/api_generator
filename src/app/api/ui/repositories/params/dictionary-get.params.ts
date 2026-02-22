import { DictionaryGet$Params } from '../../../swagger/fn/dictionary/dictionary-get';
import { UsedClassificatorTypeEnum } from '../../enums/used-classificator-type.enum';
import { apiUsedClassificatorTypeEnumAdapter } from '../../adapters/enums/api-used-classificator-type-enum.adapter';

// @ts-ignore
export interface DictionaryGetParams {
  usedClassificatorType?: UsedClassificatorTypeEnum;
  value?: string;
}

export function dictionaryGetAdapter(params?: DictionaryGetParams): DictionaryGet$Params {
  if (!params) {
    return {} as DictionaryGet$Params;
  }
  return {
      UsedClassificatorType: apiUsedClassificatorTypeEnumAdapter(params.usedClassificatorType),
      Value: params.value,
  };
}
