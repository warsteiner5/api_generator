import { DictionariesGetOkved2ByParentCode$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-okved-2-by-parent-code';

// @ts-ignore
export interface DictionariesGetOkved2ByParentCodeParams {
  parentCode?: string;
}

export function dictionariesGetOkved2ByParentCodeAdapter(params?: DictionariesGetOkved2ByParentCodeParams): DictionariesGetOkved2ByParentCode$Params {
  if (!params) {
    return {} as DictionariesGetOkved2ByParentCode$Params;
  }
  return {
      parentCode: params.parentCode,
  };
}
