import { ApplicationsEnum } from '../../enums/applications.enum';
import { ApiApplicationsEnum } from '../../../swagger/models/api-applications-enum';

export const apiApplicationsEnumAdapter = (source?: ApplicationsEnum | null): ApiApplicationsEnum => {
  switch (source) {
    case ApplicationsEnum.Unknown:
      return ApiApplicationsEnum.Unknown;
    case ApplicationsEnum.OTC:
      return ApiApplicationsEnum.OTC;
    case ApplicationsEnum.RTSTENDER:
      return ApiApplicationsEnum.RTSTENDER;
    case ApplicationsEnum.CRYPTO:
      return ApiApplicationsEnum.CRYPTO;
    case ApplicationsEnum.EAT:
      return ApiApplicationsEnum.EAT;
    default:
      throw new Error(`Enum value is not defined: ApplicationsEnum=${String(source)}`);
  }
}
