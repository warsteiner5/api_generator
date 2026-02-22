import { Industry } from '../../models/industry.interface';
import { ApiIndustryDto } from '../../../swagger/models/api-industry-dto';

export const apiIndustryDtoAdapter = (source?: Industry | null): ApiIndustryDto => {
  return {
    Children: source?.children?.map((item) => apiIndustryDtoAdapter(item)),
    CompanyCount: source?.companyCount,
    Id: source?.id,
    Name: source?.name,
    ParentId: source?.parentId,
  };
}
