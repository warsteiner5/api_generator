import { DictionariesGetKsrByParentCode$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-ksr-by-parent-code';

// @ts-ignore
export interface DictionariesGetKsrByParentCodeParams {
  parentCode: string;
}

export function dictionariesGetKsrByParentCodeAdapter(params?: DictionariesGetKsrByParentCodeParams): DictionariesGetKsrByParentCode$Params {
  if (!params) {
    return {} as DictionariesGetKsrByParentCode$Params;
  }
  return {
      parentCode: params.parentCode,
  };
}
