import { ApiOrganizationDto } from '../../../swagger/models/api-organization-dto';
import { Organization } from '../../models/organization.interface';
import { addressDto2Adapter } from './address-dto-2.adapter';
import { managerAdapter } from './manager.adapter';
import { phoneAdapter } from './phone.adapter';

export const organizationAdapter = (source?: ApiOrganizationDto | null): Organization => {
  return {
    address: source?.address,
    addressInfo: source?.addressInfo === null ? undefined : addressDto2Adapter(source?.addressInfo),
    emails: source?.emails,
    fullName: source?.fullName,
    inn: source?.inn,
    kpp: source?.kpp,
    managementName: source?.managementName,
    managementPost: source?.managementPost,
    managers: source?.managers?.map((item) => managerAdapter(item)),
    ogrn: source?.ogrn,
    phones: source?.phones?.map((item) => phoneAdapter(item)),
    regionKladrId: source?.regionKladrId,
    regionNameWithType: source?.regionNameWithType,
    shortName: source?.shortName,
    type: source?.type,
  };
}
