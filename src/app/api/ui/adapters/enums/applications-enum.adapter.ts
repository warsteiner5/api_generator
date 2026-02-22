import { ApiApplicationsEnum } from '../../../swagger/models/api-applications-enum';
import { ApplicationsEnum } from '../../enums/applications.enum';

export const applicationsEnumAdapter = (source?: ApiApplicationsEnum | null): ApplicationsEnum => {
  switch (source) {
    case ApiApplicationsEnum.Unknown:
      return ApplicationsEnum.Unknown;
    case ApiApplicationsEnum.OTC:
      return ApplicationsEnum.OTC;
    case ApiApplicationsEnum.RTSTENDER:
      return ApplicationsEnum.RTSTENDER;
    case ApiApplicationsEnum.CRYPTO:
      return ApplicationsEnum.CRYPTO;
    case ApiApplicationsEnum.EAT:
      return ApplicationsEnum.EAT;
    default:
      throw new Error(`Enum value is not defined: ApiApplicationsEnum=${String(source)}`);
  }
}
