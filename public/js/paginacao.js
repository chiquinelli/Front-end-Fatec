var items = $(".vagas .container-vaga");
    var numItems = items.length;
    var perPage = 3;

    items.slice(perPage).hide();

    $('#pagination-container').pagination({
        items: numItems,
        itemsOnPage: perPage,
        prevText: `<i class="fas fa-chevron-left"></i>`,
        nextText: `<i class="fas fa-chevron-right"></i>`,
        onPageClick: function (pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide().slice(showFrom, showTo).show();
        }
    });