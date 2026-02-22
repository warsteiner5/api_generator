import { CertificatesApiService } from '../../swagger/services/certificates-api.service';
import { CertificatesDownloadCertificateParams, certificatesDownloadCertificateAdapter } from './params/certificates-download-certificate.params';
import { CertificatesDownloadParams, certificatesDownloadAdapter } from './params/certificates-download.params';
import { CertificatesParseGetParams, certificatesParseGetAdapter } from './params/certificates-parse-get.params';
import { CertificatesParsePostParams, certificatesParsePostAdapter } from './params/certificates-parse-post.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ParsedCertificate } from '../models/parsed-certificate.interface';
import { parsedCertificateAdapter } from '../adapters/models/parsed-certificate.adapter';

@Injectable({ providedIn: 'root' })
export class CertificatesRepository {
  private readonly _api = inject(CertificatesApiService);

  certificatesDownload(params: CertificatesDownloadParams): Observable<Blob> {
    return this._api.certificatesDownload(certificatesDownloadAdapter(params));
  }

  certificatesDownloadCertificate(params: CertificatesDownloadCertificateParams): Observable<Blob> {
    return this._api.certificatesDownloadCertificate(certificatesDownloadCertificateAdapter(params));
  }

  certificatesParseGet(params: CertificatesParseGetParams): Observable<ParsedCertificate> {
    return this._api.certificatesParseGet(certificatesParseGetAdapter(params)).pipe(
      map((res) => parsedCertificateAdapter(res?.data))
    );
  }

  certificatesParsePost(params: CertificatesParsePostParams): Observable<ParsedCertificate> {
    return this._api.certificatesParsePost(certificatesParsePostAdapter(params)).pipe(
      map((res) => parsedCertificateAdapter(res?.data))
    );
  }

}
