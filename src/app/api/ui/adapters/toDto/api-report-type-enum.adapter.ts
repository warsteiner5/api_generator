import { ReportTypeEnum } from '../../enums/report-type.enum';
import { ApiReportTypeEnum } from '../../../swagger/models/api-report-type-enum';

export function adaptApiReportTypeEnum(source?: ReportTypeEnum | null): ApiReportTypeEnum {
  switch (source) {
    case ReportTypeEnum.VipAnalyticsPurchase:
      return ApiReportTypeEnum.VipAnalyticsPurchase;
    case ReportTypeEnum.Supplier:
      return ApiReportTypeEnum.Supplier;
    case ReportTypeEnum.SuppliersList:
      return ApiReportTypeEnum.SuppliersList;
    case ReportTypeEnum.ImportPositions:
      return ApiReportTypeEnum.ImportPositions;
    case ReportTypeEnum.ParticipantOfferPublished:
      return ApiReportTypeEnum.ParticipantOfferPublished;
    case ReportTypeEnum.TenantInformation:
      return ApiReportTypeEnum.TenantInformation;
    case ReportTypeEnum.CategoryTenant:
      return ApiReportTypeEnum.CategoryTenant;
    case ReportTypeEnum.MarketTradesReport:
      return ApiReportTypeEnum.MarketTradesReport;
    case ReportTypeEnum.MarketSuppliersReport:
      return ApiReportTypeEnum.MarketSuppliersReport;
    case ReportTypeEnum.MarketCustomersReport:
      return ApiReportTypeEnum.MarketCustomersReport;
    default:
      throw new Error(`Enum value is not defined: ReportTypeEnum=${String(source)}`);
  }
}
