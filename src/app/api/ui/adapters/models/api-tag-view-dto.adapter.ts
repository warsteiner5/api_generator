import { TagView } from '../../models/tag-view.interface';
import { ApiTagViewDto } from '../../../swagger/models/api-tag-view-dto';

export const apiTagViewDtoAdapter = (source?: TagView | null): ApiTagViewDto => {
  return {
    Code: source?.code,
    Description: source?.description,
    FilterText: source?.filterText,
    HintText: source?.hintText,
    ImageGuid: source?.imageGuid,
    Name: source?.name,
    OrderNumber: source?.orderNumber,
  };
}
