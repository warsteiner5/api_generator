import { AdditionalAgreement } from '../models/additional-agreement.interface';
import { additionalAgreementAdapter } from '../adapters/models/additional-agreement.adapter';
import { AdditionalAgreementHashToSign } from '../models/additional-agreement-hash-to-sign.interface';
import { additionalAgreementHashToSignAdapter } from '../adapters/models/additional-agreement-hash-to-sign.adapter';
import { AdditionalAgreementsApiService } from '../../swagger/services/additional-agreements-api.service';
import { AdditionalAgreementsCreateParams, additionalAgreementsCreateAdapter } from './params/additional-agreements-create.params';
import { AdditionalAgreementsGetDataToSignParams, additionalAgreementsGetDataToSignAdapter } from './params/additional-agreements-get-data-to-sign.params';
import { AdditionalAgreementsGetDocumentFileDigitalSignatureParams, additionalAgreementsGetDocumentFileDigitalSignatureAdapter } from './params/additional-agreements-get-document-file-digital-signature.params';
import { AdditionalAgreementsGetFullAdditionalAgreementDataParams, additionalAgreementsGetFullAdditionalAgreementDataAdapter } from './params/additional-agreements-get-full-additional-agreement-data.params';
import { AdditionalAgreementsRejectExternalParams, additionalAgreementsRejectExternalAdapter } from './params/additional-agreements-reject-external.params';
import { AdditionalAgreementsRejectParams, additionalAgreementsRejectAdapter } from './params/additional-agreements-reject.params';
import { AdditionalAgreementsSend2Params, additionalAgreementsSend2Adapter } from './params/additional-agreements-send-2.params';
import { AdditionalAgreementsSendParams, additionalAgreementsSendAdapter } from './params/additional-agreements-send.params';
import { AdditionalAgreementsSendToParticipantParams, additionalAgreementsSendToParticipantAdapter } from './params/additional-agreements-send-to-participant.params';
import { AdditionalAgreementsSignExternalParams, additionalAgreementsSignExternalAdapter } from './params/additional-agreements-sign-external.params';
import { AdditionalAgreementsSignParams, additionalAgreementsSignAdapter } from './params/additional-agreements-sign.params';
import { CertificateViewModel } from '../models/certificate-view-model.interface';
import { certificateViewModelAdapter } from '../adapters/models/certificate-view-model.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AdditionalAgreementsRepository {
  private readonly _api = inject(AdditionalAgreementsApiService);

  additionalAgreementsCreate(params?: AdditionalAgreementsCreateParams): Observable<number> {
    return this._api.additionalAgreementsCreate(additionalAgreementsCreateAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  additionalAgreementsGetDataToSign(params?: AdditionalAgreementsGetDataToSignParams): Observable<AdditionalAgreementHashToSign> {
    return this._api.additionalAgreementsGetDataToSign(additionalAgreementsGetDataToSignAdapter(params)).pipe(
      map((res) => additionalAgreementHashToSignAdapter(res?.data))
    );
  }

  additionalAgreementsGetDocumentFileDigitalSignature(params?: AdditionalAgreementsGetDocumentFileDigitalSignatureParams): Observable<CertificateViewModel> {
    return this._api.additionalAgreementsGetDocumentFileDigitalSignature(additionalAgreementsGetDocumentFileDigitalSignatureAdapter(params)).pipe(
      map((res) => certificateViewModelAdapter(res?.data))
    );
  }

  additionalAgreementsGetFullAdditionalAgreementData(params: AdditionalAgreementsGetFullAdditionalAgreementDataParams): Observable<AdditionalAgreement[]> {
    return this._api.additionalAgreementsGetFullAdditionalAgreementData(additionalAgreementsGetFullAdditionalAgreementDataAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => additionalAgreementAdapter(item)))
    );
  }

  additionalAgreementsReject(params?: AdditionalAgreementsRejectParams): Observable<void> {
    return this._api.additionalAgreementsReject(additionalAgreementsRejectAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  additionalAgreementsRejectExternal(params?: AdditionalAgreementsRejectExternalParams): Observable<void> {
    return this._api.additionalAgreementsRejectExternal(additionalAgreementsRejectExternalAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  additionalAgreementsSend(params: AdditionalAgreementsSendParams): Observable<void> {
    return this._api.additionalAgreementsSend(additionalAgreementsSendAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  additionalAgreementsSend2(params?: AdditionalAgreementsSend2Params): Observable<void> {
    return this._api.additionalAgreementsSend2(additionalAgreementsSend2Adapter(params)).pipe(
      map((res) => void 0)
    );
  }

  additionalAgreementsSendToParticipant(params: AdditionalAgreementsSendToParticipantParams): Observable<void> {
    return this._api.additionalAgreementsSendToParticipant(additionalAgreementsSendToParticipantAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  additionalAgreementsSign(params?: AdditionalAgreementsSignParams): Observable<void> {
    return this._api.additionalAgreementsSign(additionalAgreementsSignAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  additionalAgreementsSignExternal(params?: AdditionalAgreementsSignExternalParams): Observable<void> {
    return this._api.additionalAgreementsSignExternal(additionalAgreementsSignExternalAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

}
