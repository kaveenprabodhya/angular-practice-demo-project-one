import {
  animate,
  animation,
  keyframes,
  state,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';

export let bounceOutleftAnimation = animation([
  animate(
    1000,
    keyframes([
      style({ offset: 0.2, opacity: 1, transform: 'translateX(50px)' }),
      style({ offset: 1, opacity: 0, transform: 'translateX(-100%)' }),
    ])
  ),
]);

export let slideInBounceOut = trigger('slideInBounceOut', [
  state('in', style({ transform: 'translateX(0)' })),
  transition('void => *', [
    style({ transform: 'translateX(-100%)' }),
    animate(1000),
  ]),
  transition('* => void', [useAnimation(bounceOutleftAnimation)]),
]);

/* export let fade = trigger('fade', [
  state('void', style({ opacity: 0 })),
  transition('void <=> *', [animate(500)]),
]); */

export let fadeInAnimation = animation(
  [style({ opacity: 0 }), animate('{{ duration }} {{ easing }}')],
  {
    params: {
      duration: '2s',
      easing: 'ease-out',
    },
  }
);

export let fade = trigger('fade', [
  transition(':enter', useAnimation(fadeInAnimation)),
  transition(':leave', [animate(500, style({ opacity: 0 }))]),
]);
