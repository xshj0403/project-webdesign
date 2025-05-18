
//title標題動畫
$('.title span').each(function(index) {
  let delay = (index + 1) * 0.1; // 0.1s, 0.2s, ..., 1.5s
  $(this).css('animation-delay', delay + 's');
});
