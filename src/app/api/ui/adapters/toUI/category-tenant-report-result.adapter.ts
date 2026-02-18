import { ApiCategoryTenantReportResultDto } from '../../../swagger/models/api-category-tenant-report-result-dto';
import { CategoryTenantReportResult } from '../../models/category-tenant-report-result.interface';

export function adaptCategoryTenantReportResultToUI(source?: ApiCategoryTenantReportResultDto | null): CategoryTenantReportResult {
  return {
    countPositionPriceList: source?.CountPositionPriceList ?? 0,
    idCategory: source?.IdCategory ?? 0,
    nameCategory: source?.NameCategory ?? '',
    numberPosition: source?.NumberPosition ?? 0,
  };
}
