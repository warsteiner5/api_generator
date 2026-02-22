import { SourceTypeAltEnum } from '../../enums/source-type-alt.enum';
import { ApiSourceTypeAltEnum } from '../../../swagger/models/api-source-type';

export const apiSourceTypeAltEnumAdapter = (source?: SourceTypeAltEnum | null): ApiSourceTypeAltEnum => {
  switch (source) {
    case SourceTypeAltEnum.Undefined:
      return ApiSourceTypeAltEnum.Undefined;
    case SourceTypeAltEnum.Eruz:
      return ApiSourceTypeAltEnum.Eruz;
    case SourceTypeAltEnum.PP:
      return ApiSourceTypeAltEnum.PP;
    case SourceTypeAltEnum.Edo:
      return ApiSourceTypeAltEnum.Edo;
    case SourceTypeAltEnum.Etp223:
      return ApiSourceTypeAltEnum.Etp223;
    case SourceTypeAltEnum.Etp44:
      return ApiSourceTypeAltEnum.Etp44;
    case SourceTypeAltEnum.Passport:
      return ApiSourceTypeAltEnum.Passport;
    case SourceTypeAltEnum.Mo:
      return ApiSourceTypeAltEnum.Mo;
    case SourceTypeAltEnum.Sso:
      return ApiSourceTypeAltEnum.Sso;
    case SourceTypeAltEnum.SalesTech:
      return ApiSourceTypeAltEnum.SalesTech;
    case SourceTypeAltEnum.Krista:
      return ApiSourceTypeAltEnum.Krista;
    case SourceTypeAltEnum.ExportBy:
      return ApiSourceTypeAltEnum.ExportBy;
    case SourceTypeAltEnum.Eat:
      return ApiSourceTypeAltEnum.Eat;
    default:
      throw new Error(`Enum value is not defined: SourceTypeAltEnum=${String(source)}`);
  }
}
