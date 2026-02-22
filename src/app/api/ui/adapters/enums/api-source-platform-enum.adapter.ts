import { SourcePlatformEnum } from '../../enums/source-platform.enum';
import { ApiSourcePlatformEnum } from '../../../swagger/models/api-source-platform-enum';

export const apiSourcePlatformEnumAdapter = (source?: SourcePlatformEnum | null): ApiSourcePlatformEnum => {
  switch (source) {
    case SourcePlatformEnum.Unknown:
      return ApiSourcePlatformEnum.Unknown;
    case SourcePlatformEnum.Zmo:
      return ApiSourcePlatformEnum.Zmo;
    case SourcePlatformEnum.Easuz:
      return ApiSourcePlatformEnum.Easuz;
    case SourcePlatformEnum.Rts44Fks:
      return ApiSourcePlatformEnum.Rts44Fks;
    case SourcePlatformEnum.Rts223:
      return ApiSourcePlatformEnum.Rts223;
    case SourcePlatformEnum.Mz223:
      return ApiSourcePlatformEnum.Mz223;
    default:
      throw new Error(`Enum value is not defined: SourcePlatformEnum=${String(source)}`);
  }
}
