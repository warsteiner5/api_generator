import { Injectable, inject } from '@angular/core';
import { MikIntegrationApiService } from '../../swagger/services/mik-integration-api.service';
import { MikIntegrationSentForParticipantApproveParams, mikIntegrationSentForParticipantApproveAdapter } from './params/mik-integration-sent-for-participant-approve.params';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MikIntegrationRepository {
  private readonly _api = inject(MikIntegrationApiService);

  mikIntegrationSentForParticipantApprove(params: MikIntegrationSentForParticipantApproveParams): Observable<boolean> {
    return this._api.mikIntegrationSentForParticipantApprove(mikIntegrationSentForParticipantApproveAdapter(params));
  }

}
