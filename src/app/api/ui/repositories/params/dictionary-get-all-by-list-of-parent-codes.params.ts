import { DictionaryGetAllByListOfParentCodes$Params } from '../../../swagger/fn/dictionary/dictionary-get-all-by-list-of-parent-codes';
import { UsedClassificatorTypeEnum } from '../../enums/used-classificator-type.enum';
import { adaptApiUsedClassificatorTypeEnum } from '../../adapters/toDto/api-used-classificator-type-enum.adapter';

export interface DictionaryGetAllByListOfParentCodesParams {
  usedClassificatorType?: UsedClassificatorTypeEnum;
  values?: string[];
}

export const dictionaryGetAllByListOfParentCodesParamsAdapter = {
  adapt(params?: DictionaryGetAllByListOfParentCodesParams): DictionaryGetAllByListOfParentCodes$Params {
    if (!params) {
      return {} as DictionaryGetAllByListOfParentCodes$Params;
    }
    return {
      UsedClassificatorType: adaptApiUsedClassificatorTypeEnum(params.usedClassificatorType),
      Values: params.values,
    };
  }
};
