import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Oferta } from "./shared/oferta.model"
import { lastValueFrom } from 'rxjs'

@Injectable()
export class OfertasService {

  constructor(private httpClient: HttpClient) {}

  public getOfertas(): Promise<Oferta[]> {
    return lastValueFrom(this.httpClient.get<Oferta[]>('http://localhost:3000/ofertas?destaque=true'))
  }
}
