import { DictionaryGetAllByName$Params } from '../../../swagger/fn/dictionary/dictionary-get-all-by-name';
import { UsedClassificatorTypeEnum } from '../../enums/used-classificator-type.enum';
import { apiUsedClassificatorTypeEnumAdapter } from '../../adapters/enums/api-used-classificator-type-enum.adapter';

// @ts-ignore
export interface DictionaryGetAllByNameParams {
  pageNumber?: number;
  pageSize?: number;
  usedClassificatorType?: UsedClassificatorTypeEnum;
  value?: string;
}

export function dictionaryGetAllByNameAdapter(params?: DictionaryGetAllByNameParams): DictionaryGetAllByName$Params {
  if (!params) {
    return {} as DictionaryGetAllByName$Params;
  }
  return {
      PageNumber: params.pageNumber,
      PageSize: params.pageSize,
      UsedClassificatorType: apiUsedClassificatorTypeEnumAdapter(params.usedClassificatorType),
      Value: params.value,
  };
}
