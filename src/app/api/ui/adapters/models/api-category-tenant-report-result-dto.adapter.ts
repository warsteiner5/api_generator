import { CategoryTenantReportResult } from '../../models/category-tenant-report-result.interface';
import { ApiCategoryTenantReportResultDto } from '../../../swagger/models/api-category-tenant-report-result-dto';

export const apiCategoryTenantReportResultDtoAdapter = (source?: CategoryTenantReportResult | null): ApiCategoryTenantReportResultDto => {
  return {
    CountPositionPriceList: source?.countPositionPriceList,
    IdCategory: source?.idCategory,
    NameCategory: source?.nameCategory,
    NumberPosition: source?.numberPosition,
  };
}
