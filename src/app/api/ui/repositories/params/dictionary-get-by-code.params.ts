import { DictionaryGetByCode$Params } from '../../../swagger/fn/dictionary/dictionary-get-by-code';
import { UsedClassificatorTypeEnum } from '../../enums/used-classificator-type.enum';
import { apiUsedClassificatorTypeEnumAdapter } from '../../adapters/enums/api-used-classificator-type-enum.adapter';

// @ts-ignore
export interface DictionaryGetByCodeParams {
  usedClassificatorType?: UsedClassificatorTypeEnum;
  value?: string;
}

export function dictionaryGetByCodeAdapter(params?: DictionaryGetByCodeParams): DictionaryGetByCode$Params {
  if (!params) {
    return {} as DictionaryGetByCode$Params;
  }
  return {
      UsedClassificatorType: apiUsedClassificatorTypeEnumAdapter(params.usedClassificatorType),
      Value: params.value,
  };
}
