import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { TagsGetTagsForOperator$Params } from '../../../swagger/fn/tags/tags-get-tags-for-operator';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface TagsGetTagsForOperatorParams {
  body?: SearchObjectAlt;
}

export const tagsGetTagsForOperatorParamsAdapter = {
  adapt(params?: TagsGetTagsForOperatorParams): TagsGetTagsForOperator$Params {
    if (!params) {
      return {} as TagsGetTagsForOperator$Params;
    }
    return {
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};
