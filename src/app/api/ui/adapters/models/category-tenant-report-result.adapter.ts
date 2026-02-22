import { ApiCategoryTenantReportResultDto } from '../../../swagger/models/api-category-tenant-report-result-dto';
import { CategoryTenantReportResult } from '../../models/category-tenant-report-result.interface';

export const categoryTenantReportResultAdapter = (source?: ApiCategoryTenantReportResultDto | null): CategoryTenantReportResult => {
  return {
    countPositionPriceList: source?.CountPositionPriceList,
    idCategory: source?.IdCategory,
    nameCategory: source?.NameCategory,
    numberPosition: source?.NumberPosition,
  };
}
