import { StarSearchObjAlt } from '../../models/star-search-obj-alt.interface';
import { ApiStarSearchObjAltDto } from '../../../swagger/models/api-star-search-obj';
import { apiStarSearchObjItemAltDtoAdapter } from './api-star-search-obj-item.adapter';

export const apiStarSearchObjAltDtoAdapter = (source?: StarSearchObjAlt | null): ApiStarSearchObjAltDto => {
  return {
    AllCount: source?.allCount,
    Items: source?.items?.map((item) => apiStarSearchObjItemAltDtoAdapter(item)),
  };
}
