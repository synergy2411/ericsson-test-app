import { DataService } from '../data.service';
import { UserComponent } from './user.component';
import { TestBed } from '@angular/core/testing';

describe('User Component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations : [UserComponent],
      providers :   [DataService]
    }).compileComponents();
  })

  it('Should be created User Component', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })

  // it('Should user name is Foo', () => {
  //   const fixture = TestBed.createComponent(UserComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.user.name).toEqual('Foo')
  // })

  it('Should be true', () => {
    expect(true).toBeTruthy();
  })

  it('Should be equal to 1', () => {
    const one =1 ;
    expect(one).toEqual(1);
  })
})

// TDD -
