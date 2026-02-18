import { TagsGetTagsForParticipant$Params } from '../../../swagger/fn/tags/tags-get-tags-for-participant';

export interface TagsGetTagsForParticipantParams {
}

export const tagsGetTagsForParticipantParamsAdapter = {
  adapt(params?: TagsGetTagsForParticipantParams): TagsGetTagsForParticipant$Params {
    if (!params) {
      return {} as TagsGetTagsForParticipant$Params;
    }
    return {
    };
  }
};
