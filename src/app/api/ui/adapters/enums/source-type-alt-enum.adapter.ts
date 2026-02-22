import { ApiSourceTypeAltEnum } from '../../../swagger/models/api-source-type';
import { SourceTypeAltEnum } from '../../enums/source-type-alt.enum';

export const sourceTypeAltEnumAdapter = (source?: ApiSourceTypeAltEnum | null): SourceTypeAltEnum => {
  switch (source) {
    case ApiSourceTypeAltEnum.Undefined:
      return SourceTypeAltEnum.Undefined;
    case ApiSourceTypeAltEnum.Eruz:
      return SourceTypeAltEnum.Eruz;
    case ApiSourceTypeAltEnum.PP:
      return SourceTypeAltEnum.PP;
    case ApiSourceTypeAltEnum.Edo:
      return SourceTypeAltEnum.Edo;
    case ApiSourceTypeAltEnum.Etp223:
      return SourceTypeAltEnum.Etp223;
    case ApiSourceTypeAltEnum.Etp44:
      return SourceTypeAltEnum.Etp44;
    case ApiSourceTypeAltEnum.Passport:
      return SourceTypeAltEnum.Passport;
    case ApiSourceTypeAltEnum.Mo:
      return SourceTypeAltEnum.Mo;
    case ApiSourceTypeAltEnum.Sso:
      return SourceTypeAltEnum.Sso;
    case ApiSourceTypeAltEnum.SalesTech:
      return SourceTypeAltEnum.SalesTech;
    case ApiSourceTypeAltEnum.Krista:
      return SourceTypeAltEnum.Krista;
    case ApiSourceTypeAltEnum.ExportBy:
      return SourceTypeAltEnum.ExportBy;
    case ApiSourceTypeAltEnum.Eat:
      return SourceTypeAltEnum.Eat;
    default:
      throw new Error(`Enum value is not defined: ApiSourceTypeAltEnum=${String(source)}`);
  }
}
