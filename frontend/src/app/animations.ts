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
        transition('void <=> *', [animate(300)]),
    ]),
    trigger('fadeInOutT1', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate(1000)]),
    ]),
    trigger('fadeInOutT2', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1000ms 750ms')]),
    ]),
    trigger('fadeInOutT3', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1000ms 1500ms')]),
    ]),
    trigger('fadeInOutT4', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1000ms 2250ms')]),
    ]),
    trigger('fadeOut', [
      state('void', style({ opacity: 0 })),
      transition('* => void', [
        animate(500)
      ]),
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
    ]),
    trigger('scaleY', [
      transition('void => *', [
        style({ transform : 'scaleY(0)'}),
        animate(500)
      ])
  ]),
]