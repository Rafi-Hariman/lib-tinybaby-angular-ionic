import { trigger, state, style, transition, animate } from '@angular/animations';

export function onFadeInAnimation() {
    return trigger('fadeInText', [
        state('void', style({ opacity: 0, transform: 'translateY(50px)' })),
        transition(':enter', [
            animate('1000ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
        ])
    ])
}

export function onFadeInBottom() {
    return trigger('fadeInBottom', [
        state('void', style({ opacity: 0, transform: 'translateY(50px)' })),
        transition(':enter', [
            animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
        ])
    ])
}

export function onSmoothAppear() {
    return trigger('smoothAppear', [
        state('void', style({ opacity: 0, transform: 'scale(0.9)' })),
        transition(':enter', [
            animate('1200ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
        ])
    ]);
}

export function onSlideInFromLeft() {
    return trigger('slideInFromLeft', [
        state('void', style({ opacity: 0, transform: 'translateX(-100%)' })),
        transition(':enter', [
            animate('1200ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
        ])
    ]);
}

export function onSlideInFromRight() {
    return trigger('slideInFromRight', [
        state('void', style({ opacity: 0, transform: 'translateX(100%)' })),
        transition(':enter', [
            animate('1200ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
        ])
    ]);
}

export function onSlideInFromTop() {
    return trigger('slideInFromTop', [
        state('void', style({ opacity: 0, transform: 'translateY(-100%)' })),
        transition(':enter', [
            animate('1200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
        ])
    ]);
}