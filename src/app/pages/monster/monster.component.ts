import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MonsterType } from '../../utils/monster.utils';
import { PlayingCardComponent } from "../../components/playing-card/playing-card.component";
import { Monster } from '../../models/monster.model';

@Component({
  selector: 'app-monster',
  standalone: true,
  imports: [ReactiveFormsModule, PlayingCardComponent],
  templateUrl: './monster.component.html',
  styleUrl: './monster.component.css'
})
export class MonsterComponent implements OnInit, OnDestroy{

  private route = inject(ActivatedRoute)
  private router = inject(Router)
  private routeSubscription: Subscription | null = null;
  private fb = inject(FormBuilder)
  private formValuesSubscription: Subscription | null = null


  formGroup = this.fb.group({
    name: ['', [Validators.required]],
    image: ['', [Validators.required]],
    type: [MonsterType.ELECTRIC, [Validators.required]],
    hp: [0, [Validators.required, Validators.min(1), Validators.max(200)]],
    figureCaption: ['', [Validators.required]],
    attackName: ['', [Validators.required]],
    attackStrength: [0, [Validators.required, Validators.min(1), Validators.max(200)]],
    attackDescription: ['', [Validators.required]]
  });

  monster: Monster = Object.assign(new Monster(), this.formGroup.value)
  monsterTypes = Object.values(MonsterType)

  monsterId = signal<number | undefined>(undefined);

  ngOnInit(): void {
    this.formValuesSubscription = this.formGroup.valueChanges.subscribe(data =>{
      this.monster = Object.assign(new Monster(), data)
    })
    this.route.params.subscribe(params =>{
      this.monsterId.set(params['id'] ? parseInt(params['id']) : undefined)
    })
  }

  next(){
    let nextId = this.monsterId() || 0;
    nextId++

    this.router.navigate(['/monster/'+ nextId])
  }

  ngOnDestroy(): void {
    this.formValuesSubscription?.unsubscribe()
    this.routeSubscription?.unsubscribe()
  }

  submit(event: Event){
    event.preventDefault();
    console.log(this.formGroup.value)

  }

  isFieldValid(name:string){
    const formControl = this.formGroup.get(name)
    return formControl?.invalid  && (formControl?.dirty || formControl?.touched)
  }

  onFileChange(event: any){
    const reader = new FileReader()
    if(event.target.files && event.target.files.length){
      const[file] = event.target.files
      reader.readAsDataURL(file)
      reader.onload = () => {
        this.formGroup.patchValue({
          image: reader.result as string
        })
      }
    }
  }


}
