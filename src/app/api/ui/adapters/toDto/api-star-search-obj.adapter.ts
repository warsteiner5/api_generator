import { StarSearchObjAlt } from '../../models/star-search-obj-alt.interface';
import { ApiStarSearchObjAltDto } from '../../../swagger/models/api-star-search-obj';
import { adaptApiStarSearchObjItemAltDto } from './api-star-search-obj-item.adapter';

export function adaptApiStarSearchObjAltDto(source?: StarSearchObjAlt | null): ApiStarSearchObjAltDto {
  return {
    AllCount: source?.allCount,
    Items: (source?.items ?? []).map((item) => adaptApiStarSearchObjItemAltDto(item)),
  };
}
