export default function swiper() {
  function myPlugin({ swiper, extendParams, on }) {
    extendParams({
      debugger: false,
    });

    on('init', () => {
      if (!swiper.params.debugger) return;
    });
    on('click', (swiper, e) => {
      if (!swiper.params.debugger) return;
    });
    on('tap', (swiper, e) => {
      if (!swiper.params.debugger) return;
    });
    on('doubleTap', (swiper, e) => {
      if (!swiper.params.debugger) return;
    });
    on('sliderMove', (swiper, e) => {
      if (!swiper.params.debugger) return;
    });
    on('slideChange', () => {
      if (!swiper.params.debugger) return;

    });
    on('slideChangeTransitionStart', () => {
      if (!swiper.params.debugger) return;
    });
    on('slideChangeTransitionEnd', () => {
      if (!swiper.params.debugger) return;
    });
    on('transitionStart', () => {
      if (!swiper.params.debugger) return;
    });
    on('transitionEnd', () => {
      if (!swiper.params.debugger) return;
    });
    on('fromEdge', () => {
      if (!swiper.params.debugger) return;
    });
    on('reachBeginning', () => {
      if (!swiper.params.debugger) return;
    });
    on('reachEnd', () => {
      if (!swiper.params.debugger) return;
    });
  }

  var swiper = new Swiper('.swiper', {
    modules: [myPlugin],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Enable debugger
    debugger: true,
  });
}
