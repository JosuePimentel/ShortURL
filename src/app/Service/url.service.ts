import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: "root"
})

export class URLService {
    private url = "https://api-ssl.bitly.com/v4/shorten"
    private token = "68f7263b9146f63e21501201c8947d9ba7e52d57"
    constructor(private http: HttpClient) { }   

    getURL(longURL: string):Observable<any> {
        const headers = new HttpHeaders({
            'Authorization': this.token,
            'Content-Type': 'application/json'
        })
        
        // const body = { "long_url": longURL, "domain": "bit.ly", "group_guid": "Ba1bc23dE4F" }
        // Nao precisa do group_guid e o domain é default bit.ly
        const body = { "long_url": longURL }

        return this.http.post<any>(this.url, body, { headers })
               
    }
}