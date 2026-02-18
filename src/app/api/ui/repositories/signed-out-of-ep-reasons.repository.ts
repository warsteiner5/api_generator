import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SignedOutOfEpReasonsApiService } from '../../swagger/services/signed-out-of-ep-reasons-api.service';
import { SignedOutOfEpReasonsGetSignedOutOfEpReasonsParams, signedOutOfEpReasonsGetSignedOutOfEpReasonsParamsAdapter } from './params/signed-out-of-ep-reasons-get-signed-out-of-ep-reasons.params';

@Injectable({ providedIn: 'root' })
export class SignedOutOfEpReasonsRepository {
  private readonly _api = inject(SignedOutOfEpReasonsApiService);

  signedOutOfEpReasonsGetSignedOutOfEpReasons(params: SignedOutOfEpReasonsGetSignedOutOfEpReasonsParams): Observable<Blob> {
    return this._api.signedOutOfEpReasonsGetSignedOutOfEpReasons(signedOutOfEpReasonsGetSignedOutOfEpReasonsParamsAdapter.adapt(params));
  }

}
