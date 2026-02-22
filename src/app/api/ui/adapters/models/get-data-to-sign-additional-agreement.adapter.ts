import { ApiGetDataToSignAdditionalAgreementDto } from '../../../swagger/models/api-get-data-to-sign-additional-agreement-dto';
import { GetDataToSignAdditionalAgreement } from '../../models/get-data-to-sign-additional-agreement.interface';

export const getDataToSignAdditionalAgreementAdapter = (source?: ApiGetDataToSignAdditionalAgreementDto | null): GetDataToSignAdditionalAgreement => {
  return {
    certThumbprint: source?.CertThumbprint,
    id: source?.Id,
    oid: source?.Oid,
    signedData: source?.SignedData,
  };
}
