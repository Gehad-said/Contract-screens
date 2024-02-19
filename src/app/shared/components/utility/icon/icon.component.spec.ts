import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconComponent } from './icon.component';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should set default size to "small"', () => {
    expect(component.size).toBe('small');
  });

  it('should set the default icon to an empty string', () => {
    expect(component.icon).toBe('');
  });


  it('should set styles based on the size input', () => {
    component.size = 'medium';
    fixture.detectChanges();
    const styles = component.styles;
  
    expect(styles['min-height' as keyof typeof styles]).toBe('var(--type-scale-04)');
    expect(styles['height' as keyof typeof styles]).toBe('100%');
    expect(styles['width' as keyof typeof styles]).toBe('var(--type-scale-04)');
  });
});
