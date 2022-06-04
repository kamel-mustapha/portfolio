import {
    trigger,
    state,
    transition,
    style,
    animate,
  } from '@angular/animations';


export const animations = [
    trigger('fadeInOut', [
        state('void', style({ opacity: 0 })),
        transition('void <=> *', [animate(500)]),
    ]),
    trigger('slideIn', [
        transition('void => *', [
          style({ transform: 'translateY(-20%)' }),
          animate(500),
        ]),
    ]),
    trigger('slideRight', [
        transition('void => *', [
          style({ transform: 'translateX(10%)' }),
          animate(500),
        ])
    ]),
    trigger('slideTop', [
        transition('void <=> *', [
          style({ top : '-400px'}),
          animate(500)
        ])
    ])
]