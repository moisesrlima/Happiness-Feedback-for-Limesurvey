/* --------------------------------------------------------
Javascript para Limesurvey - Happyness Feedback Widget 
Limesurvey: https://limesurvey.org
versão: 2.3
modificado pela última vez: 29/07/2019 por Moisés Rabelo de Lima
autor: Moisés Rabelo de Lima
email: moisesrlima@gmail.com
website: https://www.behance.net/moisesrlima

Objetivos: Chama a função sendURL e abre a modal com o iframe com o questionário do Limesurvey
---------------------------------------------------------- */

jQuery(function () {

    jQuery("#chat-square").click(function () {
        jQuery("#chat-square").click(sendURL())
        jQuery("#chat-square").toggleClass('close');
        jQuery(".chat-box").toggleClass('open');
    })

    jQuery(".chat-box-toggle").click(function () {
        jQuery("#chat-square").toggleClass('close');
        jQuery(".chat-box").toggleClass('open');
    })

})