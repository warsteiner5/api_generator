import { ApiTagViewDto } from '../../../swagger/models/api-tag-view-dto';
import { TagView } from '../../models/tag-view.interface';

export function adaptTagViewToUI(source?: ApiTagViewDto | null): TagView {
  return {
    code: source?.Code ?? '',
    description: source?.Description ?? '',
    filterText: source?.FilterText ?? '',
    hintText: source?.HintText ?? '',
    imageGuid: source?.ImageGuid ?? '',
    name: source?.Name ?? '',
    orderNumber: source?.OrderNumber ?? 0,
  };
}
