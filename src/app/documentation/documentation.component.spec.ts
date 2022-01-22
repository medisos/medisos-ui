import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from "../app.component";

import { DocumentationComponent } from './documentation.component';

describe('DocumentationComponent', () => {
  let component: DocumentationComponent;
  let fixture: ComponentFixture<DocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'MediSos'`, () => {
    const fixture = TestBed.createComponent(DocumentationComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('MediSos');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(DocumentationComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('MediSos app is running!');
  });
});
