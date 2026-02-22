import { ApiStarSearchObjAltDto } from '../../../swagger/models/api-star-search-obj';
import { StarSearchObjAlt } from '../../models/star-search-obj-alt.interface';
import { starSearchObjItemAltAdapter } from './star-search-obj-item-alt.adapter';

export const starSearchObjAltAdapter = (source?: ApiStarSearchObjAltDto | null): StarSearchObjAlt => {
  return {
    allCount: source?.AllCount,
    items: source?.Items?.map((item) => starSearchObjItemAltAdapter(item)),
  };
}
