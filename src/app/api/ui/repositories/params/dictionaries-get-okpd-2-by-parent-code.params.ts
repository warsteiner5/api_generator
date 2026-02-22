import { DictionariesGetOkpd2ByParentCode$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-okpd-2-by-parent-code';

// @ts-ignore
export interface DictionariesGetOkpd2ByParentCodeParams {
  parentCode?: string;
}

export function dictionariesGetOkpd2ByParentCodeAdapter(params?: DictionariesGetOkpd2ByParentCodeParams): DictionariesGetOkpd2ByParentCode$Params {
  if (!params) {
    return {} as DictionariesGetOkpd2ByParentCode$Params;
  }
  return {
      parentCode: params.parentCode,
  };
}
