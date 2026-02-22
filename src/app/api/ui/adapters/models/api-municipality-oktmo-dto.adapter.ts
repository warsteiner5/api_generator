import { MunicipalityOktmo } from '../../models/municipality-oktmo.interface';
import { ApiMunicipalityOktmoDto } from '../../../swagger/models/api-municipality-oktmo-dto';

export const apiMunicipalityOktmoDtoAdapter = (source?: MunicipalityOktmo | null): ApiMunicipalityOktmoDto => {
  return {
    Actual: source?.actual,
    Code: source?.code,
    FullName: source?.fullName,
    LastUpdateDate: source?.lastUpdateDate,
    ParentCode: source?.parentCode,
    Section: source?.section,
  };
}
