import { adaptAdditionalAgreementHashToSignToUI } from '../adapters/toUI/additional-agreement-hash-to-sign.adapter';
import { adaptAdditionalAgreementSignatureToUI } from '../adapters/toUI/additional-agreement-signature.adapter';
import { adaptAdditionalAgreementToUI } from '../adapters/toUI/additional-agreement.adapter';
import { adaptCertificateViewModelToUI } from '../adapters/toUI/certificate-view-model.adapter';
import { AdditionalAgreement } from '../models/additional-agreement.interface';
import { AdditionalAgreementApiService } from '../../swagger/services/additional-agreement-api.service';
import { AdditionalAgreementCreateParams, additionalAgreementCreateParamsAdapter } from './params/additional-agreement-create.params';
import { AdditionalAgreementGetAdditionalAgreementByDealIdParams, additionalAgreementGetAdditionalAgreementByDealIdParamsAdapter } from './params/additional-agreement-get-additional-agreement-by-deal-id.params';
import { AdditionalAgreementGetAdditionalAgreementSignatureParams, additionalAgreementGetAdditionalAgreementSignatureParamsAdapter } from './params/additional-agreement-get-additional-agreement-signature.params';
import { AdditionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomerParams, additionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomerParamsAdapter } from './params/additional-agreement-get-data-for-additional-agreement-document-signed-by-customer.params';
import { AdditionalAgreementGetDataForAdditionalAgreementDocumentSignedByParticipantParams, additionalAgreementGetDataForAdditionalAgreementDocumentSignedByParticipantParamsAdapter } from './params/additional-agreement-get-data-for-additional-agreement-document-signed-by-participant.params';
import { AdditionalAgreementGetDataToSignParams, additionalAgreementGetDataToSignParamsAdapter } from './params/additional-agreement-get-data-to-sign.params';
import { AdditionalAgreementHashToSign } from '../models/additional-agreement-hash-to-sign.interface';
import { AdditionalAgreementRejectParams, additionalAgreementRejectParamsAdapter } from './params/additional-agreement-reject.params';
import { AdditionalAgreementSendForApproveParams, additionalAgreementSendForApproveParamsAdapter } from './params/additional-agreement-send-for-approve.params';
import { AdditionalAgreementSendToParticipantParams, additionalAgreementSendToParticipantParamsAdapter } from './params/additional-agreement-send-to-participant.params';
import { AdditionalAgreementSignature } from '../models/additional-agreement-signature.interface';
import { AdditionalAgreementSignParams, additionalAgreementSignParamsAdapter } from './params/additional-agreement-sign.params';
import { CertificateViewModel } from '../models/certificate-view-model.interface';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AdditionalAgreementRepository {
  private readonly _api = inject(AdditionalAgreementApiService);

  additionalAgreementCreate(params?: AdditionalAgreementCreateParams): Observable<number> {
    return this._api.additionalAgreementCreate(additionalAgreementCreateParamsAdapter.adapt(params));
  }

  additionalAgreementGetAdditionalAgreementByDealId(params: AdditionalAgreementGetAdditionalAgreementByDealIdParams): Observable<AdditionalAgreement[]> {
    return this._api.additionalAgreementGetAdditionalAgreementByDealId(additionalAgreementGetAdditionalAgreementByDealIdParamsAdapter.adapt(params)).pipe(
      map((res) => (res ?? []).map((item) => adaptAdditionalAgreementToUI(item)))
    );
  }

  additionalAgreementGetAdditionalAgreementSignature(params: AdditionalAgreementGetAdditionalAgreementSignatureParams): Observable<AdditionalAgreementSignature> {
    return this._api.additionalAgreementGetAdditionalAgreementSignature(additionalAgreementGetAdditionalAgreementSignatureParamsAdapter.adapt(params)).pipe(
      map((res) => adaptAdditionalAgreementSignatureToUI(res))
    );
  }

  additionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomer(params?: AdditionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomerParams): Observable<CertificateViewModel> {
    return this._api.additionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomer(additionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomerParamsAdapter.adapt(params)).pipe(
      map((res) => adaptCertificateViewModelToUI(res))
    );
  }

  additionalAgreementGetDataForAdditionalAgreementDocumentSignedByParticipant(params?: AdditionalAgreementGetDataForAdditionalAgreementDocumentSignedByParticipantParams): Observable<CertificateViewModel> {
    return this._api.additionalAgreementGetDataForAdditionalAgreementDocumentSignedByParticipant(additionalAgreementGetDataForAdditionalAgreementDocumentSignedByParticipantParamsAdapter.adapt(params)).pipe(
      map((res) => adaptCertificateViewModelToUI(res))
    );
  }

  additionalAgreementGetDataToSign(params?: AdditionalAgreementGetDataToSignParams): Observable<AdditionalAgreementHashToSign> {
    return this._api.additionalAgreementGetDataToSign(additionalAgreementGetDataToSignParamsAdapter.adapt(params)).pipe(
      map((res) => adaptAdditionalAgreementHashToSignToUI(res))
    );
  }

  additionalAgreementReject(params?: AdditionalAgreementRejectParams): Observable<Blob> {
    return this._api.additionalAgreementReject(additionalAgreementRejectParamsAdapter.adapt(params));
  }

  additionalAgreementSendForApprove(params: AdditionalAgreementSendForApproveParams): Observable<Blob> {
    return this._api.additionalAgreementSendForApprove(additionalAgreementSendForApproveParamsAdapter.adapt(params));
  }

  additionalAgreementSendToParticipant(params: AdditionalAgreementSendToParticipantParams): Observable<Blob> {
    return this._api.additionalAgreementSendToParticipant(additionalAgreementSendToParticipantParamsAdapter.adapt(params));
  }

  additionalAgreementSign(params?: AdditionalAgreementSignParams): Observable<Blob> {
    return this._api.additionalAgreementSign(additionalAgreementSignParamsAdapter.adapt(params));
  }

}
