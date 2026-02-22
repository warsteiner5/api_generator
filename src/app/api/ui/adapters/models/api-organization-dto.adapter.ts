import { Organization } from '../../models/organization.interface';
import { ApiOrganizationDto } from '../../../swagger/models/api-organization-dto';
import { apiAddressDto2Adapter } from './api-address-dto-2.adapter';
import { apiManagerDtoAdapter } from './api-manager-dto.adapter';
import { apiPhoneDtoAdapter } from './api-phone-dto.adapter';

export const apiOrganizationDtoAdapter = (source?: Organization | null): ApiOrganizationDto => {
  return {
    address: source?.address,
    addressInfo: source?.addressInfo === null ? undefined : apiAddressDto2Adapter(source?.addressInfo),
    emails: source?.emails,
    fullName: source?.fullName,
    inn: source?.inn,
    kpp: source?.kpp,
    managementName: source?.managementName,
    managementPost: source?.managementPost,
    managers: source?.managers?.map((item) => apiManagerDtoAdapter(item)),
    ogrn: source?.ogrn,
    phones: source?.phones?.map((item) => apiPhoneDtoAdapter(item)),
    regionKladrId: source?.regionKladrId,
    regionNameWithType: source?.regionNameWithType,
    shortName: source?.shortName,
    type: source?.type,
  };
}
