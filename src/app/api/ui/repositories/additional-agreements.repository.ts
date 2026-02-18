import { adaptAdditionalAgreementHashToSignToUI } from '../adapters/toUI/additional-agreement-hash-to-sign.adapter';
import { adaptAdditionalAgreementToUI } from '../adapters/toUI/additional-agreement.adapter';
import { adaptCertificateViewModelToUI } from '../adapters/toUI/certificate-view-model.adapter';
import { AdditionalAgreement } from '../models/additional-agreement.interface';
import { AdditionalAgreementHashToSign } from '../models/additional-agreement-hash-to-sign.interface';
import { AdditionalAgreementsApiService } from '../../swagger/services/additional-agreements-api.service';
import { AdditionalAgreementsCreateParams, additionalAgreementsCreateParamsAdapter } from './params/additional-agreements-create.params';
import { AdditionalAgreementsGetDataToSignParams, additionalAgreementsGetDataToSignParamsAdapter } from './params/additional-agreements-get-data-to-sign.params';
import { AdditionalAgreementsGetDocumentFileDigitalSignatureParams, additionalAgreementsGetDocumentFileDigitalSignatureParamsAdapter } from './params/additional-agreements-get-document-file-digital-signature.params';
import { AdditionalAgreementsGetFullAdditionalAgreementDataParams, additionalAgreementsGetFullAdditionalAgreementDataParamsAdapter } from './params/additional-agreements-get-full-additional-agreement-data.params';
import { AdditionalAgreementsRejectExternalParams, additionalAgreementsRejectExternalParamsAdapter } from './params/additional-agreements-reject-external.params';
import { AdditionalAgreementsRejectParams, additionalAgreementsRejectParamsAdapter } from './params/additional-agreements-reject.params';
import { AdditionalAgreementsSend2Params, additionalAgreementsSend2ParamsAdapter } from './params/additional-agreements-send-2.params';
import { AdditionalAgreementsSendParams, additionalAgreementsSendParamsAdapter } from './params/additional-agreements-send.params';
import { AdditionalAgreementsSendToParticipantParams, additionalAgreementsSendToParticipantParamsAdapter } from './params/additional-agreements-send-to-participant.params';
import { AdditionalAgreementsSignExternalParams, additionalAgreementsSignExternalParamsAdapter } from './params/additional-agreements-sign-external.params';
import { AdditionalAgreementsSignParams, additionalAgreementsSignParamsAdapter } from './params/additional-agreements-sign.params';
import { CertificateViewModel } from '../models/certificate-view-model.interface';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AdditionalAgreementsRepository {
  private readonly _api = inject(AdditionalAgreementsApiService);

  additionalAgreementsCreate(params?: AdditionalAgreementsCreateParams): Observable<number> {
    return this._api.additionalAgreementsCreate(additionalAgreementsCreateParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  additionalAgreementsGetDataToSign(params?: AdditionalAgreementsGetDataToSignParams): Observable<AdditionalAgreementHashToSign> {
    return this._api.additionalAgreementsGetDataToSign(additionalAgreementsGetDataToSignParamsAdapter.adapt(params)).pipe(
      map((res) => adaptAdditionalAgreementHashToSignToUI(res?.data))
    );
  }

  additionalAgreementsGetDocumentFileDigitalSignature(params?: AdditionalAgreementsGetDocumentFileDigitalSignatureParams): Observable<CertificateViewModel> {
    return this._api.additionalAgreementsGetDocumentFileDigitalSignature(additionalAgreementsGetDocumentFileDigitalSignatureParamsAdapter.adapt(params)).pipe(
      map((res) => adaptCertificateViewModelToUI(res?.data))
    );
  }

  additionalAgreementsGetFullAdditionalAgreementData(params: AdditionalAgreementsGetFullAdditionalAgreementDataParams): Observable<AdditionalAgreement[]> {
    return this._api.additionalAgreementsGetFullAdditionalAgreementData(additionalAgreementsGetFullAdditionalAgreementDataParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptAdditionalAgreementToUI(item)))
    );
  }

  additionalAgreementsReject(params?: AdditionalAgreementsRejectParams): Observable<void> {
    return this._api.additionalAgreementsReject(additionalAgreementsRejectParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  additionalAgreementsRejectExternal(params?: AdditionalAgreementsRejectExternalParams): Observable<void> {
    return this._api.additionalAgreementsRejectExternal(additionalAgreementsRejectExternalParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  additionalAgreementsSend(params: AdditionalAgreementsSendParams): Observable<void> {
    return this._api.additionalAgreementsSend(additionalAgreementsSendParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  additionalAgreementsSend2(params?: AdditionalAgreementsSend2Params): Observable<void> {
    return this._api.additionalAgreementsSend2(additionalAgreementsSend2ParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  additionalAgreementsSendToParticipant(params: AdditionalAgreementsSendToParticipantParams): Observable<void> {
    return this._api.additionalAgreementsSendToParticipant(additionalAgreementsSendToParticipantParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  additionalAgreementsSign(params?: AdditionalAgreementsSignParams): Observable<void> {
    return this._api.additionalAgreementsSign(additionalAgreementsSignParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  additionalAgreementsSignExternal(params?: AdditionalAgreementsSignExternalParams): Observable<void> {
    return this._api.additionalAgreementsSignExternal(additionalAgreementsSignExternalParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

}
