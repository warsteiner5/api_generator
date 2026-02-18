import { ApiStarSearchObjAltDto } from '../../../swagger/models/api-star-search-obj';
import { StarSearchObjAlt } from '../../models/star-search-obj-alt.interface';
import { adaptStarSearchObjItemAltToUI } from './star-search-obj-item-alt.adapter';

export function adaptStarSearchObjAltToUI(source?: ApiStarSearchObjAltDto | null): StarSearchObjAlt {
  return {
    allCount: source?.AllCount ?? 0,
    items: (source?.Items ?? []).map((item) => adaptStarSearchObjItemAltToUI(item)),
  };
}
