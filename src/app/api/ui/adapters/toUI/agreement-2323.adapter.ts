import { ApiAgreement2323Dto } from '../../../swagger/models/api-agreement-2323-dto';
import { Agreement2323 } from '../../models/agreement-2323.interface';

export function adaptAgreement2323ToUI(source?: ApiAgreement2323Dto | null): Agreement2323 {
  return {
    hasAgreement: source?.HasAgreement ?? false,
    isCustomer: source?.IsCustomer ?? false,
    isSignedBy2323: source?.IsSignedBy2323 ?? false,
    isSmp: source?.IsSmp ?? false,
    isSupplier: source?.IsSupplier ?? false,
  };
}
