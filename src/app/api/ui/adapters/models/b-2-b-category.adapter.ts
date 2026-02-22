import { ApiB2BCategoryDto } from '../../../swagger/models/api-b-2-b-category-dto';
import { B2BCategory } from '../../models/b-2-b-category.interface';

export const b2BCategoryAdapter = (source?: ApiB2BCategoryDto | null): B2BCategory => {
  return {
    code: source?.Code,
    description: source?.Description,
    parentCode: source?.ParentCode,
  };
}
