import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    //without renderer, with open/close on dropdown and anywhere on the document
    @HostBinding('class.open') isOpen: boolean = false;

    @HostListener('document:click',['$event']) toggleOpen(event: Event){
        this.isOpen = this.elRef.nativeElement.contains(event.target) ?
        !this.isOpen : false;
    }

    constructor(private elRef: ElementRef){}

    // //without renderer, simple with open/close on dropdown
    // @HostBinding('class.open') isOpen: boolean = false;

    // @HostListener('click') toggleOpen(){
    //     this.isOpen = !this.isOpen;
    // }

    //With renderer
    // isOpen: boolean = false;
    // constructor(private elRef: ElementRef, private renderer: Renderer2){}

    // @HostListener('click') toggleOpen(){
    //     if(!this.isOpen){
    //         this.renderer.addClass(this.elRef.nativeElement, 'open');
    //     } else {
    //         this.renderer.removeClass(this.elRef.nativeElement, 'open');
    //     }
    //     this.isOpen = !this.isOpen;
    // }
}