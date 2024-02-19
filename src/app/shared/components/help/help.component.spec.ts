import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DxcDialogModule } from '@dxc-technology/halstack-angular';
import { TranslateModule } from '@ngx-translate/core';
import { HelpComponent } from './help.component';

describe('HelpComponent', () => {
  let component: HelpComponent;
  let fixture: ComponentFixture<HelpComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelpComponent],
      imports: [DxcDialogModule, TranslateModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should template have correct inputs', () => {
    component.toggle = true;
    component.helpModel.content = 'IPOShelp@dxc.com';
    component.helpModel.title = 'test title';
    component.helpModel.firstBtn = 'Open Email';
    component.helpModel.secondBtn = 'Cancel';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.modalContainer__modalTitle').innerText).toEqual('test title');
    expect(fixture.nativeElement.querySelector('.modalContainer__modalContent').innerText).toEqual('IPOShelp@dxc.com');
  });

  it('should toggle varibale', () => {
    component.toggle = true;
    fixture.detectChanges();
    component.openDialog();
    expect(component.toggle).toEqual(false);
  });
  it('should emit output to been called', () => {
    spyOn(component.emmitToggle, 'emit');
    component.toggle = true;
    component.openDialog();
    fixture.detectChanges();
    expect(component.emmitToggle.emit).toHaveBeenCalled();
  });
});
