import { TagOperator } from '../../models/tag-operator.interface';
import { TagsSaveTag$Params } from '../../../swagger/fn/tags/tags-save-tag';
import { adaptApiTagOperatorDto } from '../../adapters/toDto/api-tag-operator-dto.adapter';

export interface TagsSaveTagParams {
  body?: TagOperator;
}

export const tagsSaveTagParamsAdapter = {
  adapt(params?: TagsSaveTagParams): TagsSaveTag$Params {
    if (!params) {
      return {} as TagsSaveTag$Params;
    }
    return {
      body: adaptApiTagOperatorDto(params.body),
    };
  }
};
