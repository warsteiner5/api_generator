import { ApiSourcePlatformEnum } from '../../../swagger/models/api-source-platform-enum';
import { SourcePlatformEnum } from '../../enums/source-platform.enum';

export const sourcePlatformEnumAdapter = (source?: ApiSourcePlatformEnum | null): SourcePlatformEnum => {
  switch (source) {
    case ApiSourcePlatformEnum.Unknown:
      return SourcePlatformEnum.Unknown;
    case ApiSourcePlatformEnum.Zmo:
      return SourcePlatformEnum.Zmo;
    case ApiSourcePlatformEnum.Easuz:
      return SourcePlatformEnum.Easuz;
    case ApiSourcePlatformEnum.Rts44Fks:
      return SourcePlatformEnum.Rts44Fks;
    case ApiSourcePlatformEnum.Rts223:
      return SourcePlatformEnum.Rts223;
    case ApiSourcePlatformEnum.Mz223:
      return SourcePlatformEnum.Mz223;
    default:
      throw new Error(`Enum value is not defined: ApiSourcePlatformEnum=${String(source)}`);
  }
}
