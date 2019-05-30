import { Directive, ElementRef, OnInit, OnChanges, SimpleChanges, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
    @Input() defaultColor = this.elRef.nativeElement.style.backgroundColor;
    @Input() highlightColor = 'blue';
    @HostBinding('style.backgroundColor') backgroundColor: string;

    constructor(private elRef: ElementRef) {}

    // ngOnChanges(changes: SimpleChanges) {}

    ngOnInit() {
        // this.elRef.nativeElement.style.backgroundColor = this.defaultColor;
        this.backgroundColor = this.defaultColor;
    }

    @HostListener('mouseenter') mouseover() {
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') mouseleave() {
        this.backgroundColor = this.defaultColor;
    }
}
