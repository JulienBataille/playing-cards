import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IMonster } from '../../interfaces/monster.interface';
import { Monster } from '../../models/monster.model';

@Injectable({
	providedIn: 'root'
})
export class MonsterService {

	private http = inject(HttpClient)
	private BASE_URL = "http://localhost:8000/monsters/"

	getAll(): Observable<Monster[]> {
		return this.http.get<IMonster[]>(this.BASE_URL).pipe(
			map(monsterJsonArray => {
				return monsterJsonArray.map<Monster>(
					monsterJson => Monster.fromJson(monsterJson)
				)
			})
		);
	}

	get(id: number): Observable<Monster> {
		return this.http.get<IMonster>(this.BASE_URL+ id + '/').pipe(
			map(monsterDict => Monster.fromJson(monsterDict))
		)
	}

	add(monster: Monster): Observable<Monster> {
		return this.http.post<IMonster>(this.BASE_URL, monster.toJson()).pipe(
			map(monsterDict => Monster.fromJson(monsterDict))
		)
	}

	update(monster: Monster): Observable<Monster> {
		return this.http.put<IMonster>(this.BASE_URL + monster.id + '/', monster.toJson()).pipe(
			map(monsterDict => Monster.fromJson(monsterDict))
		)
	}

	delete(id: number): Observable<void>{
		return this.http.delete<void>(this.BASE_URL + id + '/')
		
	}

}