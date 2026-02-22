import { ApiIndustryDto } from '../../../swagger/models/api-industry-dto';
import { Industry } from '../../models/industry.interface';

export const industryAdapter = (source?: ApiIndustryDto | null): Industry => {
  return {
    children: source?.Children?.map((item) => industryAdapter(item)),
    companyCount: source?.CompanyCount,
    id: source?.Id,
    name: source?.Name,
    parentId: source?.ParentId,
  };
}
