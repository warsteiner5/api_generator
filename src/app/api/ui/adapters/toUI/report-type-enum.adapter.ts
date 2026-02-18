import { ApiReportTypeEnum } from '../../../swagger/models/api-report-type-enum';
import { ReportTypeEnum } from '../../enums/report-type.enum';

export function adaptReportTypeEnumToUI(source?: ApiReportTypeEnum | null): ReportTypeEnum {
  switch (source) {
    case ApiReportTypeEnum.VipAnalyticsPurchase:
      return ReportTypeEnum.VipAnalyticsPurchase;
    case ApiReportTypeEnum.Supplier:
      return ReportTypeEnum.Supplier;
    case ApiReportTypeEnum.SuppliersList:
      return ReportTypeEnum.SuppliersList;
    case ApiReportTypeEnum.ImportPositions:
      return ReportTypeEnum.ImportPositions;
    case ApiReportTypeEnum.ParticipantOfferPublished:
      return ReportTypeEnum.ParticipantOfferPublished;
    case ApiReportTypeEnum.TenantInformation:
      return ReportTypeEnum.TenantInformation;
    case ApiReportTypeEnum.CategoryTenant:
      return ReportTypeEnum.CategoryTenant;
    case ApiReportTypeEnum.MarketTradesReport:
      return ReportTypeEnum.MarketTradesReport;
    case ApiReportTypeEnum.MarketSuppliersReport:
      return ReportTypeEnum.MarketSuppliersReport;
    case ApiReportTypeEnum.MarketCustomersReport:
      return ReportTypeEnum.MarketCustomersReport;
    default:
      throw new Error(`Enum value is not defined: ApiReportTypeEnum=${String(source)}`);
  }
}
