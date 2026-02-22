import { FinalProposalApiService } from '../../swagger/services/final-proposal-api.service';
import { FinalProposalGetFinalProposalParams, finalProposalGetFinalProposalAdapter } from './params/final-proposal-get-final-proposal.params';
import { FinalProposalSaveFinalProposalParams, finalProposalSaveFinalProposalAdapter } from './params/final-proposal-save-final-proposal.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { QuotationSessionFinalProposalAlt } from '../models/quotation-session-final-proposal-alt.interface';
import { quotationSessionFinalProposalAltAdapter } from '../adapters/models/quotation-session-final-proposal-alt.adapter';

@Injectable({ providedIn: 'root' })
export class FinalProposalRepository {
  private readonly _api = inject(FinalProposalApiService);

  finalProposalGetFinalProposal(params: FinalProposalGetFinalProposalParams): Observable<QuotationSessionFinalProposalAlt> {
    return this._api.finalProposalGetFinalProposal(finalProposalGetFinalProposalAdapter(params)).pipe(
      map((res) => quotationSessionFinalProposalAltAdapter(res?.data))
    );
  }

  finalProposalSaveFinalProposal(params?: FinalProposalSaveFinalProposalParams): Observable<number> {
    return this._api.finalProposalSaveFinalProposal(finalProposalSaveFinalProposalAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

}
