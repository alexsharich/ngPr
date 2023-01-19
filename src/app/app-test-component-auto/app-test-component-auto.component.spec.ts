import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AppTestComponentAutoComponent } from './app-test-component-auto.component'

describe('AppTestComponentAutoComponent', () => {
  let component: AppTestComponentAutoComponent
  let fixture: ComponentFixture<AppTestComponentAutoComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppTestComponentAutoComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(AppTestComponentAutoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
