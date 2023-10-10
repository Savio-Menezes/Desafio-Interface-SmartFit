import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUnitesService {

  constructor(private httpClient: HttpClient) { }
  
  getAllUnits(): Observable<UnitsResponse> {

  }
}
