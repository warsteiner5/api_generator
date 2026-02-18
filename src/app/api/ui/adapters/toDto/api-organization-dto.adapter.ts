import { Organization } from '../../models/organization.interface';
import { ApiOrganizationDto } from '../../../swagger/models/api-organization-dto';
import { adaptApiAddressDto2 } from './api-address-dto-2.adapter';
import { adaptApiManagerDto } from './api-manager-dto.adapter';
import { adaptApiPhoneDto } from './api-phone-dto.adapter';

export function adaptApiOrganizationDto(source?: Organization | null): ApiOrganizationDto {
  return {
    address: source?.address,
    addressInfo: adaptApiAddressDto2(source?.addressInfo),
    emails: source?.emails ?? [],
    fullName: source?.fullName,
    inn: source?.inn,
    kpp: source?.kpp,
    managementName: source?.managementName,
    managementPost: source?.managementPost,
    managers: (source?.managers ?? []).map((item) => adaptApiManagerDto(item)),
    ogrn: source?.ogrn,
    phones: (source?.phones ?? []).map((item) => adaptApiPhoneDto(item)),
    regionKladrId: source?.regionKladrId,
    regionNameWithType: source?.regionNameWithType,
    shortName: source?.shortName,
    type: source?.type,
  };
}
