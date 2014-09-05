 $(document).ready(function () {
    // Yale

    createChart('pie', {
        'Harvard': 'data/2018/0/0/gender.csv',
        'Yale': 'data/2018/4/yale_gender_raw.csv'
    }, '#gender', 'Harvard');

    createChart('pie', {
        'Harvard': 'data/2018/1/2/early.csv',
        'Yale': 'data/2018/4/yale_early_action.csv'
    }, '#ea', 'Harvard');
    createChart('column', {
        'Harvard': 'data/2018/0/0/legacy-bar.csv',
        'Yale': 'data/2018/4/yale_legacies.csv'
    }, '#legacy', 'Harvard');
    createChart('pie',{
        'Harvard': 'data/2018/2/2/greek.csv',
        'Yale': 'data/2018/4/yale_greek.csv'
    }, '#greek', 'Harvard');
    createChart('pie', {
        'Harvard': 'data/2018/0/0/athletes_raw.csv',
        'Yale': 'data/2018/4/yale_sports.csv'
    }, '#athletics', 'Harvard');


    $(window).trigger('resize');
    // var width = $('.graph').first().parents('.scroll-row').first().width();
    // $('.graph').width(width);
    for (var chart in Highcharts.charts) {
        if (Highcharts.charts[chart] != null) {
            Highcharts.charts[chart].redraw();
        }
    }
});
