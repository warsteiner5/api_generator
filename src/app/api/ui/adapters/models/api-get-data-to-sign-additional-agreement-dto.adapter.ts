import { GetDataToSignAdditionalAgreement } from '../../models/get-data-to-sign-additional-agreement.interface';
import { ApiGetDataToSignAdditionalAgreementDto } from '../../../swagger/models/api-get-data-to-sign-additional-agreement-dto';

export const apiGetDataToSignAdditionalAgreementDtoAdapter = (source?: GetDataToSignAdditionalAgreement | null): ApiGetDataToSignAdditionalAgreementDto => {
  return {
    CertThumbprint: source?.certThumbprint,
    Id: source?.id,
    Oid: source?.oid,
    SignedData: source?.signedData,
  };
}
