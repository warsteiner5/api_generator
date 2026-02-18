import { ApiPositionsImportExcelTemplateTypeEnum } from '../../../swagger/models/api-positions-import-excel-template-type-enum';
import { PositionsImportExcelTemplateTypeEnum } from '../../enums/positions-import-excel-template-type.enum';

export function adaptPositionsImportExcelTemplateTypeEnumToUI(source?: ApiPositionsImportExcelTemplateTypeEnum | null): PositionsImportExcelTemplateTypeEnum {
  switch (source) {
    case ApiPositionsImportExcelTemplateTypeEnum.Unknown:
      return PositionsImportExcelTemplateTypeEnum.Unknown;
    case ApiPositionsImportExcelTemplateTypeEnum.Market:
      return PositionsImportExcelTemplateTypeEnum.Market;
    case ApiPositionsImportExcelTemplateTypeEnum.Rzd:
      return PositionsImportExcelTemplateTypeEnum.Rzd;
    case ApiPositionsImportExcelTemplateTypeEnum.PreliminaryOffers:
      return PositionsImportExcelTemplateTypeEnum.PreliminaryOffers;
    case ApiPositionsImportExcelTemplateTypeEnum.QuotationSession:
      return PositionsImportExcelTemplateTypeEnum.QuotationSession;
    case ApiPositionsImportExcelTemplateTypeEnum.Ksr:
      return PositionsImportExcelTemplateTypeEnum.Ksr;
    default:
      throw new Error(`Enum value is not defined: ApiPositionsImportExcelTemplateTypeEnum=${String(source)}`);
  }
}
