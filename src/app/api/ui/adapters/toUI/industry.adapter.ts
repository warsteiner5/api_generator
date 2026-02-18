import { ApiIndustryDto } from '../../../swagger/models/api-industry-dto';
import { Industry } from '../../models/industry.interface';

export function adaptIndustryToUI(source?: ApiIndustryDto | null): Industry {
  return {
    children: (source?.Children ?? []).map((item) => adaptIndustryToUI(item)),
    companyCount: source?.CompanyCount ?? 0,
    id: source?.Id ?? '',
    name: source?.Name ?? '',
    parentId: source?.ParentId ?? '',
  };
}
