import { TagsDeleteTag$Params } from '../../../swagger/fn/tags/tags-delete-tag';

export interface TagsDeleteTagParams {
  id: number;
}

export const tagsDeleteTagParamsAdapter = {
  adapt(params?: TagsDeleteTagParams): TagsDeleteTag$Params {
    if (!params) {
      return {} as TagsDeleteTag$Params;
    }
    return {
      id: params.id,
    };
  }
};
