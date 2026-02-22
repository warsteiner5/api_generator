import { DictionaryGetAllByCode$Params } from '../../../swagger/fn/dictionary/dictionary-get-all-by-code';
import { UsedClassificatorTypeEnum } from '../../enums/used-classificator-type.enum';
import { apiUsedClassificatorTypeEnumAdapter } from '../../adapters/enums/api-used-classificator-type-enum.adapter';

// @ts-ignore
export interface DictionaryGetAllByCodeParams {
  pageNumber?: number;
  pageSize?: number;
  usedClassificatorType?: UsedClassificatorTypeEnum;
  value?: string;
}

export function dictionaryGetAllByCodeAdapter(params?: DictionaryGetAllByCodeParams): DictionaryGetAllByCode$Params {
  if (!params) {
    return {} as DictionaryGetAllByCode$Params;
  }
  return {
      PageNumber: params.pageNumber,
      PageSize: params.pageSize,
      UsedClassificatorType: apiUsedClassificatorTypeEnumAdapter(params.usedClassificatorType),
      Value: params.value,
  };
}
