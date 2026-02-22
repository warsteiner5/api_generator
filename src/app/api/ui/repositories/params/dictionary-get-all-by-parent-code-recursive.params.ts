import { DictionaryGetAllByParentCodeRecursive$Params } from '../../../swagger/fn/dictionary/dictionary-get-all-by-parent-code-recursive';
import { UsedClassificatorTypeEnum } from '../../enums/used-classificator-type.enum';
import { apiUsedClassificatorTypeEnumAdapter } from '../../adapters/enums/api-used-classificator-type-enum.adapter';

// @ts-ignore
export interface DictionaryGetAllByParentCodeRecursiveParams {
  usedClassificatorType?: UsedClassificatorTypeEnum;
  value?: string;
}

export function dictionaryGetAllByParentCodeRecursiveAdapter(params?: DictionaryGetAllByParentCodeRecursiveParams): DictionaryGetAllByParentCodeRecursive$Params {
  if (!params) {
    return {} as DictionaryGetAllByParentCodeRecursive$Params;
  }
  return {
      UsedClassificatorType: apiUsedClassificatorTypeEnumAdapter(params.usedClassificatorType),
      Value: params.value,
  };
}
