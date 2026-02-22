import { ApiMunicipalityOktmoDto } from '../../../swagger/models/api-municipality-oktmo-dto';
import { MunicipalityOktmo } from '../../models/municipality-oktmo.interface';

export const municipalityOktmoAdapter = (source?: ApiMunicipalityOktmoDto | null): MunicipalityOktmo => {
  return {
    actual: source?.Actual,
    code: source?.Code,
    fullName: source?.FullName,
    lastUpdateDate: source?.LastUpdateDate,
    parentCode: source?.ParentCode,
    section: source?.Section,
  };
}
