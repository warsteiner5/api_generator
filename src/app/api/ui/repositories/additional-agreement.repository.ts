import { AdditionalAgreement } from '../models/additional-agreement.interface';
import { additionalAgreementAdapter } from '../adapters/models/additional-agreement.adapter';
import { AdditionalAgreementApiService } from '../../swagger/services/additional-agreement-api.service';
import { AdditionalAgreementCreateParams, additionalAgreementCreateAdapter } from './params/additional-agreement-create.params';
import { AdditionalAgreementGetAdditionalAgreementByDealIdParams, additionalAgreementGetAdditionalAgreementByDealIdAdapter } from './params/additional-agreement-get-additional-agreement-by-deal-id.params';
import { AdditionalAgreementGetAdditionalAgreementSignatureParams, additionalAgreementGetAdditionalAgreementSignatureAdapter } from './params/additional-agreement-get-additional-agreement-signature.params';
import { AdditionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomerParams, additionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomerAdapter } from './params/additional-agreement-get-data-for-additional-agreement-document-signed-by-customer.params';
import { AdditionalAgreementGetDataForAdditionalAgreementDocumentSignedByParticipantParams, additionalAgreementGetDataForAdditionalAgreementDocumentSignedByParticipantAdapter } from './params/additional-agreement-get-data-for-additional-agreement-document-signed-by-participant.params';
import { AdditionalAgreementGetDataToSignParams, additionalAgreementGetDataToSignAdapter } from './params/additional-agreement-get-data-to-sign.params';
import { AdditionalAgreementHashToSign } from '../models/additional-agreement-hash-to-sign.interface';
import { additionalAgreementHashToSignAdapter } from '../adapters/models/additional-agreement-hash-to-sign.adapter';
import { AdditionalAgreementRejectParams, additionalAgreementRejectAdapter } from './params/additional-agreement-reject.params';
import { AdditionalAgreementSendForApproveParams, additionalAgreementSendForApproveAdapter } from './params/additional-agreement-send-for-approve.params';
import { AdditionalAgreementSendToParticipantParams, additionalAgreementSendToParticipantAdapter } from './params/additional-agreement-send-to-participant.params';
import { AdditionalAgreementSignature } from '../models/additional-agreement-signature.interface';
import { additionalAgreementSignatureAdapter } from '../adapters/models/additional-agreement-signature.adapter';
import { AdditionalAgreementSignParams, additionalAgreementSignAdapter } from './params/additional-agreement-sign.params';
import { CertificateViewModel } from '../models/certificate-view-model.interface';
import { certificateViewModelAdapter } from '../adapters/models/certificate-view-model.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AdditionalAgreementRepository {
  private readonly _api = inject(AdditionalAgreementApiService);

  additionalAgreementCreate(params?: AdditionalAgreementCreateParams): Observable<number> {
    return this._api.additionalAgreementCreate(additionalAgreementCreateAdapter(params));
  }

  additionalAgreementGetAdditionalAgreementByDealId(params: AdditionalAgreementGetAdditionalAgreementByDealIdParams): Observable<AdditionalAgreement[]> {
    return this._api.additionalAgreementGetAdditionalAgreementByDealId(additionalAgreementGetAdditionalAgreementByDealIdAdapter(params)).pipe(
      map((res) => (res ?? []).map((item) => additionalAgreementAdapter(item)))
    );
  }

  additionalAgreementGetAdditionalAgreementSignature(params: AdditionalAgreementGetAdditionalAgreementSignatureParams): Observable<AdditionalAgreementSignature> {
    return this._api.additionalAgreementGetAdditionalAgreementSignature(additionalAgreementGetAdditionalAgreementSignatureAdapter(params)).pipe(
      map((res) => additionalAgreementSignatureAdapter(res))
    );
  }

  additionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomer(params?: AdditionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomerParams): Observable<CertificateViewModel> {
    return this._api.additionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomer(additionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomerAdapter(params)).pipe(
      map((res) => certificateViewModelAdapter(res))
    );
  }

  additionalAgreementGetDataForAdditionalAgreementDocumentSignedByParticipant(params?: AdditionalAgreementGetDataForAdditionalAgreementDocumentSignedByParticipantParams): Observable<CertificateViewModel> {
    return this._api.additionalAgreementGetDataForAdditionalAgreementDocumentSignedByParticipant(additionalAgreementGetDataForAdditionalAgreementDocumentSignedByParticipantAdapter(params)).pipe(
      map((res) => certificateViewModelAdapter(res))
    );
  }

  additionalAgreementGetDataToSign(params?: AdditionalAgreementGetDataToSignParams): Observable<AdditionalAgreementHashToSign> {
    return this._api.additionalAgreementGetDataToSign(additionalAgreementGetDataToSignAdapter(params)).pipe(
      map((res) => additionalAgreementHashToSignAdapter(res))
    );
  }

  additionalAgreementReject(params?: AdditionalAgreementRejectParams): Observable<Blob> {
    return this._api.additionalAgreementReject(additionalAgreementRejectAdapter(params));
  }

  additionalAgreementSendForApprove(params: AdditionalAgreementSendForApproveParams): Observable<Blob> {
    return this._api.additionalAgreementSendForApprove(additionalAgreementSendForApproveAdapter(params));
  }

  additionalAgreementSendToParticipant(params: AdditionalAgreementSendToParticipantParams): Observable<Blob> {
    return this._api.additionalAgreementSendToParticipant(additionalAgreementSendToParticipantAdapter(params));
  }

  additionalAgreementSign(params?: AdditionalAgreementSignParams): Observable<Blob> {
    return this._api.additionalAgreementSign(additionalAgreementSignAdapter(params));
  }

}
