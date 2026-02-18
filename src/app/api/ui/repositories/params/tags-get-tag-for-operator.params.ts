import { TagsGetTagForOperator$Params } from '../../../swagger/fn/tags/tags-get-tag-for-operator';

export interface TagsGetTagForOperatorParams {
  id: number;
}

export const tagsGetTagForOperatorParamsAdapter = {
  adapt(params?: TagsGetTagForOperatorParams): TagsGetTagForOperator$Params {
    if (!params) {
      return {} as TagsGetTagForOperator$Params;
    }
    return {
      id: params.id,
    };
  }
};
