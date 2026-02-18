import { ApiOrganizationDto } from '../../../swagger/models/api-organization-dto';
import { Organization } from '../../models/organization.interface';
import { adaptAddressDto2ToUI } from './address-dto-2.adapter';
import { adaptManagerToUI } from './manager.adapter';
import { adaptPhoneToUI } from './phone.adapter';

export function adaptOrganizationToUI(source?: ApiOrganizationDto | null): Organization {
  return {
    address: source?.address ?? '',
    addressInfo: adaptAddressDto2ToUI(source?.addressInfo),
    emails: source?.emails ?? [],
    fullName: source?.fullName ?? '',
    inn: source?.inn ?? '',
    kpp: source?.kpp ?? '',
    managementName: source?.managementName ?? '',
    managementPost: source?.managementPost ?? '',
    managers: (source?.managers ?? []).map((item) => adaptManagerToUI(item)),
    ogrn: source?.ogrn ?? '',
    phones: (source?.phones ?? []).map((item) => adaptPhoneToUI(item)),
    regionKladrId: source?.regionKladrId ?? '',
    regionNameWithType: source?.regionNameWithType ?? '',
    shortName: source?.shortName ?? '',
    type: source?.type ?? '',
  };
}
