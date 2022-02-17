/*
  Kreirao: Kristijan Kučina
*/

let $;

//nakon učitavanja i parsiranja HTML dokumenta
$( document ).ready(() => {
	//klik na desnu tipku
	$('.right').click(() => {
		let flagAnimationOn = $(':animated').length;
		if (!flagAnimationOn) {
			$('.image-wrapper1 > div:first-child').fadeOut(1000, () => {
				$('.image-wrapper1').append($('.image-wrapper1 > div:first-child'));
				$('.image-wrapper1 > div:last-child').fadeIn("slow");
			});

			$('.image-wrapper2 > div:first-child').fadeOut(1000, () => {
				$('.image-wrapper2').append($('.image-wrapper2 > div:first-child'));
				$('.image-wrapper2 > div:last-child').fadeIn("slow");
			});
		} else{
			$('.right').prop('disabled', true);
		}
		$('.right').prop('disabled', false);
	});

	//klik na lijevu tipku
	$('.left').click(() => {
		let flagAnimationOn = $(':animated').length;
		if (!flagAnimationOn) {
			$('.image-wrapper1 > div:last-child').fadeOut(1000, () => {
				$('.image-wrapper1').prepend($('.image-wrapper1 > div:last-child'));
				$('.image-wrapper1 > div:first-child').fadeIn("slow");
			});

			$('.image-wrapper2 > div:last-child').fadeOut(1000, () => {
				$('.image-wrapper2').prepend($('.image-wrapper2 > div:last-child'));
				$('.image-wrapper2 > div:first-child').fadeIn("slow");
			});
		} else{
			$('.left').prop('disabled', true);
		}
		$('.left').prop('disabled', false);
	});
});