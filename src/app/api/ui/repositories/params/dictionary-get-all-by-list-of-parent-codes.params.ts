import { DictionaryGetAllByListOfParentCodes$Params } from '../../../swagger/fn/dictionary/dictionary-get-all-by-list-of-parent-codes';
import { UsedClassificatorTypeEnum } from '../../enums/used-classificator-type.enum';
import { apiUsedClassificatorTypeEnumAdapter } from '../../adapters/enums/api-used-classificator-type-enum.adapter';

// @ts-ignore
export interface DictionaryGetAllByListOfParentCodesParams {
  usedClassificatorType?: UsedClassificatorTypeEnum;
  values?: string[];
}

export function dictionaryGetAllByListOfParentCodesAdapter(params?: DictionaryGetAllByListOfParentCodesParams): DictionaryGetAllByListOfParentCodes$Params {
  if (!params) {
    return {} as DictionaryGetAllByListOfParentCodes$Params;
  }
  return {
      UsedClassificatorType: apiUsedClassificatorTypeEnumAdapter(params.usedClassificatorType),
      Values: params.values,
  };
}
