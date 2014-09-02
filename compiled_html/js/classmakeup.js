 $(document).ready(function () {
    // Makeup of the Class

    // Demographics
    createChart('pie','data/0/0/gender.csv', '#gender');
    createChart('column','data/0/0/race.csv', '#race');
    createChart('pie','data/0/0/sexual_orientation.csv', '#sexual-orientation');
    createChart('pie','data/0/0/birth_order.csv', '#birth-order');
    createChart('pie','data/0/0/school_type.csv', '#school-type');
    createChart('pie','data/0/0/athletes_raw.csv', '#athletes-raw');
    createChart('column','data/0/0/athletes_vs_race.csv', '#athletes-vs-race');

    // Geography
    createChart('pie','data/0/1/urbanity.csv', '#urbanity');

    // Employment
    createChart('pie','data/0/2/starting_salary.csv', '#starting-salary');
    createMultiChart('column', ['Male', 'Female'], null, 
            ['data/0/2/starting-salary-male.csv', 'data/0/2/starting-salary-female.csv'], "#starting-salary-vs-gender");
    createMultiChart('bar', ['2017', '2027'], ['#1abc9c', '#ba0600'], 
            ['data/0/2/sector-start-2017.csv', 'data/0/2/sector-start-2027.csv'], "#sector-start-over-time");
    createMultiChart('bar', ['Male', 'Female'], ['#71c3ff', '#ba0600'], 
            ['data/0/2/sector-start-male.csv', 'data/0/2/sector-start-female.csv'], "#sector-start-by-gender");
    createMultiChart('bar', ['Private', 'Public'], null, 
            ['data/0/2/sector-start-private.csv', 'data/0/2/sector-start-public.csv'], "#sector-start-by-school-type");


    $(window).trigger('resize');
    // var width = $('.graph').first().parents('.scroll-row').first().width();
    // $('.graph').width(width);
    for (var chart in Highcharts.charts) {
        if (Highcharts.charts[chart] != null) {
            Highcharts.charts[chart].redraw();
        }
    }
});