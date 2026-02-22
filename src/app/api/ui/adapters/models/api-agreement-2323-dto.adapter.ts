import { Agreement2323 } from '../../models/agreement-2323.interface';
import { ApiAgreement2323Dto } from '../../../swagger/models/api-agreement-2323-dto';

export const apiAgreement2323DtoAdapter = (source?: Agreement2323 | null): ApiAgreement2323Dto => {
  return {
    HasAgreement: source?.hasAgreement,
    IsCustomer: source?.isCustomer,
    IsSignedBy2323: source?.isSignedBy2323,
    IsSmp: source?.isSmp,
    IsSupplier: source?.isSupplier,
  };
}
