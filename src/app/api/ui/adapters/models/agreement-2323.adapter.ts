import { ApiAgreement2323Dto } from '../../../swagger/models/api-agreement-2323-dto';
import { Agreement2323 } from '../../models/agreement-2323.interface';

export const agreement2323Adapter = (source?: ApiAgreement2323Dto | null): Agreement2323 => {
  return {
    hasAgreement: source?.HasAgreement,
    isCustomer: source?.IsCustomer,
    isSignedBy2323: source?.IsSignedBy2323,
    isSmp: source?.IsSmp,
    isSupplier: source?.IsSupplier,
  };
}
