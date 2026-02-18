import { PositionsImportExcelTemplateTypeEnum } from '../../enums/positions-import-excel-template-type.enum';
import { ApiPositionsImportExcelTemplateTypeEnum } from '../../../swagger/models/api-positions-import-excel-template-type-enum';

export function adaptApiPositionsImportExcelTemplateTypeEnum(source?: PositionsImportExcelTemplateTypeEnum | null): ApiPositionsImportExcelTemplateTypeEnum {
  switch (source) {
    case PositionsImportExcelTemplateTypeEnum.Unknown:
      return ApiPositionsImportExcelTemplateTypeEnum.Unknown;
    case PositionsImportExcelTemplateTypeEnum.Market:
      return ApiPositionsImportExcelTemplateTypeEnum.Market;
    case PositionsImportExcelTemplateTypeEnum.Rzd:
      return ApiPositionsImportExcelTemplateTypeEnum.Rzd;
    case PositionsImportExcelTemplateTypeEnum.PreliminaryOffers:
      return ApiPositionsImportExcelTemplateTypeEnum.PreliminaryOffers;
    case PositionsImportExcelTemplateTypeEnum.QuotationSession:
      return ApiPositionsImportExcelTemplateTypeEnum.QuotationSession;
    case PositionsImportExcelTemplateTypeEnum.Ksr:
      return ApiPositionsImportExcelTemplateTypeEnum.Ksr;
    default:
      throw new Error(`Enum value is not defined: PositionsImportExcelTemplateTypeEnum=${String(source)}`);
  }
}
