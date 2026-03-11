$(function () {
  // ハンバーガーメニュー
  var hamburger = $('.hamburger-menu');

  // ハンバーガーボタンをクリックしたら開く
  $('.hamburger-button').click(function () {
    hamburger.fadeToggle();
  });

  // カルーセル
  $('.cover-slick').slick({
    infinite: true,
    arrows: false, // 左右のナビゲーションを無効
    dots: true, //ドット表示
    autoplay: true,     // 自動再生ON)
    autoplaySpeed: 5000, // 5秒ごとに切り替え
    fade: true,            // フェード切り替えを有効化
    speed: 600,            // フェード時間（ミリ秒：お好みで調整）
    slidesToShow: 1,       // フェード時は1枚表示
    slidesToScroll: 1,    // フェード時は1枚ずつ
  });

  // タブ
  $('#smarttab').smartTab({
    enableUrlHash: false, // タブidにもとづいたURLハッシュの付与を無効
    autoAdjustHeight: false
  });

  // スクロールアニメーション
  window.addEventListener('scroll', function () {
    const fadeElements = document.querySelectorAll('.point-fadein-left');
    fadeElements.forEach(function (element) {
      // 要素が画面内に入ったかどうかを判定
      if (element.getBoundingClientRect().top < window.innerHeight) {
        element.style.opacity = '1';
        element.style.transform = 'translateX(0)'; // 初期位置に戻す
      }
    });
  });

  window.addEventListener('scroll', function () {
    const fadeElements = document.querySelectorAll('.point-fadein-right');
    fadeElements.forEach(function (element) {
      // 要素が画面内に入ったかどうかを判定
      if (element.getBoundingClientRect().top < window.innerHeight) {
        element.style.opacity = '1';
        element.style.transform = 'translateX(0)'; // 初期位置に戻す
      }
    });
  });

  /* アコーディオン */
  $(function () {
    $('.accordion .accordion-item').removeClass('is-open'); // 追加（念のため全て閉じ見た目に）
    // 初期は全部閉じる
    $('.accordion [class^="accordion-content"]').hide();
    // タイトルをクリック → 親にis-openを付け外し＋中身を開閉
    $('.accordion').on('click', '.accordion-title, .accordion-title-second, .accordion-title-third, .accordion-title-fourth', function () {
      const $sec = $(this).closest('section'); const $content = $(this).next('[class^="accordion-content"]');
      $sec.toggleClass('is-open');
      $content.stop(true, true).slideToggle(220);

      // 1つだけ開く仕様にしたい場合は下を有効化
      // $sec.siblings('section')
      //     .removeClass('is-open')
      //     .find('[class^="accordion-content"]').slideUp(220);
    }
    );
  });
});