$(document).ready(function(){/* DOCUMENT. READY PARA VERIFICAR SI ESTA FUNCIONANDO ============*/

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.category_list .category_item[category="all"]').addClass('ct_item-active');/* LLAMAMOS A CATEGORY QUE CONTIENE TODO ============*/

	// FILTRANDO PELICULAS  ============================================

	$('.category_item').click(function(){
		var catPeliculas = $(this).attr('category');/* CREAMOS VARIABLE CATPELICULAS============*/
		console.log(catPeliculas);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.category_item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

		// OCULTANDO PELICULAS =========================
		$('.product-item').css('transform', 'scale(0)');
		function hideProduct(){
			$('.product-item').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PELICULAS =========================
		function showProduct(){
			$('.product-item[category="'+catPeliculas+'"]').show();
			$('.product-item[category="'+catPeliculas+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	// MOSTRANDO TODOS LAS PRODUCCIONS DE PELICULAS  =======================

	$('.category_item[category="all"]').click(function(){
		function showAll(){
			$('.product-item').show();
			$('.product-item').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});