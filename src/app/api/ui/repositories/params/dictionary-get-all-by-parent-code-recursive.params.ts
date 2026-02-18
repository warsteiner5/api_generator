import { DictionaryGetAllByParentCodeRecursive$Params } from '../../../swagger/fn/dictionary/dictionary-get-all-by-parent-code-recursive';
import { UsedClassificatorTypeEnum } from '../../enums/used-classificator-type.enum';
import { adaptApiUsedClassificatorTypeEnum } from '../../adapters/toDto/api-used-classificator-type-enum.adapter';

export interface DictionaryGetAllByParentCodeRecursiveParams {
  usedClassificatorType?: UsedClassificatorTypeEnum;
  value?: string;
}

export const dictionaryGetAllByParentCodeRecursiveParamsAdapter = {
  adapt(params?: DictionaryGetAllByParentCodeRecursiveParams): DictionaryGetAllByParentCodeRecursive$Params {
    if (!params) {
      return {} as DictionaryGetAllByParentCodeRecursive$Params;
    }
    return {
      UsedClassificatorType: adaptApiUsedClassificatorTypeEnum(params.usedClassificatorType),
      Value: params.value,
    };
  }
};
