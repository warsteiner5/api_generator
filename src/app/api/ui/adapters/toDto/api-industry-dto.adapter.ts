import { Industry } from '../../models/industry.interface';
import { ApiIndustryDto } from '../../../swagger/models/api-industry-dto';

export function adaptApiIndustryDto(source?: Industry | null): ApiIndustryDto {
  return {
    Children: (source?.children ?? []).map((item) => adaptApiIndustryDto(item)),
    CompanyCount: source?.companyCount,
    Id: source?.id,
    Name: source?.name,
    ParentId: source?.parentId,
  };
}
