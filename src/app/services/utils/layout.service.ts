import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { EventEmitter, Injectable } from '@angular/core';
import { Breakpoint } from './layout.models';

/**
 * Breakpoint ranges in pixels (min...middle...max)
 * XSmall: 320...460...599
 * Small: 600...780...959
 * Medium: 960...1120...1279
 * Large: 1280...1600...1919
 * XLarge: 1920...2560(2k)...4096(4k)
 */

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  public currentBreakpoint = Breakpoint.XSmall;
  public onBreakpointChange: EventEmitter<Breakpoint> = new EventEmitter<Breakpoint>();
  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
      .subscribe(result => {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.currentBreakpoint = Breakpoint.XSmall;
          this.onBreakpointChange.next(Breakpoint.XSmall);
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.currentBreakpoint = Breakpoint.Small;
          this.onBreakpointChange.next(Breakpoint.Small);
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.currentBreakpoint = Breakpoint.Medium;
          this.onBreakpointChange.next(Breakpoint.Medium);
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.currentBreakpoint = Breakpoint.Large;
          this.onBreakpointChange.next(Breakpoint.Large);
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.currentBreakpoint = Breakpoint.XLarge;
          this.onBreakpointChange.next(Breakpoint.XLarge);
        }
      });
  }
}
