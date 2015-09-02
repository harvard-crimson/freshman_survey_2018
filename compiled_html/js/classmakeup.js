 $(document).ready(function () {
    // Narrative
    // var showNarrative = false;
    // $('#narrative-button').click(function() {
    //     if (showNarrative) {
    //         $('#data')
    //             .height('initial')
    //             .css("opacity", 1);
    //         $('#narrative')
    //             .height(0)
    //             .css("opacity", 0);
    //         $('#narrative-button').html("Read Narrative");
    //     } else {
    //         $('#data')
    //             .height(0)
    //             .css("opacity", 0);;
    //         $('#narrative')
    //             .height('initial')
    //             .css("opacity", 1);;
    //         $('#narrative-button').html("See Data");
    //     }
    //     showNarrative = !showNarrative;
    // });

    // Makeup of the Class

    // Demographics
    createChart('pie', {
        2017: 'data/2017/0/0/gender.csv',
        2018: 'data/2018/0/0/gender.csv',
        2019: 'data/2019/0/0/gender.csv'
    }, '#gender');
    createChart('column', {
        2017: 'data/2017/0/0/race.csv',
        2018: 'data/2018/0/0/race.csv',
        2019: 'data/2019/0/0/race.csv'
    }, '#race');
    createChart('pie', {
        2017: 'data/2017/0/0/sexual_orientation.csv',
        2018: 'data/2018/0/0/sexual_orientation.csv',
        2019: 'data/2019/0/0/sexual_orientation.csv'
    }, '#sexual-orientation');
    createChart('pie', {
        2017: 'data/2017/0/0/birth_order.csv',
        2018: 'data/2018/0/0/birth_order.csv',
        2019: 'data/2019/0/0/birth_order.csv'
    }, '#birth-order');
    createChart('pie', {
        2017: 'data/2017/0/0/school_type.csv',
        2018: 'data/2018/0/0/school_type.csv',
        2019: 'data/2019/0/0/school_type.csv'
    }, '#school-type');
    createChart('pie', {
        2017: 'data/2017/0/0/athletes_raw.csv',
        2018: 'data/2018/0/0/athletes_raw.csv',
        2019: 'data/2019/0/0/athletes_raw.csv'
    }, '#athletes-raw');
    createChart('column', {
        2018: 'data/2018/0/0/athletes-family-income.csv',
        2019: 'data/2019/0/0/athletes-family-income.csv'
    }, '#athletes-vs-income');
    createChart('column', {
        2018: 'data/2018/0/0/community-legacy-bar.csv',
        2019: 'data/2019/0/0/community-legacy-bar.csv'
    }, '#legacy-community');
    createChart('column', {
        2018: 'data/2018/0/0/family-income-legacy-bar.csv',
        2019: 'data/2019/0/0/family-income-legacy-bar.csv'
    }, '#legacy-income', null, /* option overrides */ { yAxis: { max: 50 } } );
    createChart('column', {
        2018: 'data/2018/0/0/legacy-bar.csv',
        2019: 'data/2019/0/0/legacy-bar.csv'
    }, '#legacy');
    createChart('column', {
        2018: 'data/2018/0/0/secondary-school-legacy-bar.csv',
        2019: 'data/2018/0/0/secondary-school-legacy-bar.csv'
    }, '#legacy-secondary-school');
    createChart('pie', {
        2019: 'data/2019/0/0/transgender.csv'
    }, '#transgender');
    createChart('pie', {
        2019: 'data/2019/0/0/firstgen.csv'
    }, '#first-gen');
    createMultiChart('column', ['First Generation', 'Not First Generation'], null,
    {
        2019: ['data/2019/0/0/ethnicity-first-gen.csv', 'data/2019/0/0/ethnicity-not-first-gen.csv']
    }, "#first-gen-ethnicity");
    createChart('pie', {
        2019: 'data/2019/0/0/fgen_financialaid.csv'
    }, '#first-gen-financialaid');
    createChart('pie', {
        2019: 'data/2019/0/0/fgen_income.csv'
    }, '#first-gen-income');

    // Geography
    createChart('pie', {
        2017: 'data/2017/0/1/urbanity.csv',
        2018: 'data/2018/0/1/urbanity.csv',
        2019: 'data/2019/0/1/urbanity.csv'
    }, '#urbanity');

    // Employment
    createChart('pie', {
        2017: 'data/2017/0/2/starting_salary.csv',
        2018: 'data/2018/0/2/starting_salary.csv',
        2019: 'data/2019/0/2/starting_salary.csv'
    }, '#starting-salary');
    createMultiChart('column', ['Male', 'Female'], null,
    {
        2017: ['data/2017/0/2/starting-salary-male.csv', 'data/2017/0/2/starting-salary-female.csv'],
        2018: ['data/2018/0/2/starting-salary-male.csv', 'data/2018/0/2/starting-salary-female.csv'],
        2019: ['data/2019/0/2/starting-salary-male.csv', 'data/2019/0/2/starting-salary-female.csv']
    }, "#starting-salary-vs-gender", null, /* override */ { yAxis: { max: 35} });
    //createMultiChart('bar', ['2017', '2027'], ['#1abc9c', '#ba0600'],
    //{
    //    2018: ['7ata/2018/0/2/sector-start-2018.csv', 'data/2018/0/2/sector-start-2028.csv'],
    //    2018: ['data/2018/0/2/sector-start-2018.csv', 'data/2018/0/2/sector-start-2028.csv'],
    //    2019: ['data/2019/0/2/sector-start-2017.csv', 'data/2019/0/2/sector-start-2027.csv']
    //}, "#sector-start-over-time");
    createMultiChart('bar', ['Male', 'Female'], ['#71c3ff', '#ba0600'],
    {
        2017: ['data/2017/0/2/sector-start-male.csv', 'data/2017/0/2/sector-start-female.csv'],
        2018: ['data/2018/0/2/sector-start-male.csv', 'data/2018/0/2/sector-start-female.csv'],
        2019: ['data/2019/0/2/sector-start-male.csv', 'data/2019/0/2/sector-start-female.csv']
    }, "#sector-start-by-gender", null, /* override */ { yAxis: { max: 30} });
    createMultiChart('bar', ['Private', 'Public'], null,
    {
        2017: ['data/2017/0/2/sector-start-private.csv', 'data/2017/0/2/sector-start-public.csv'],
        2018: ['data/2018/0/2/sector-start-private.csv', 'data/2018/0/2/sector-start-public.csv'],
        2019: ['data/2019/0/2/sector-start-private.csv', 'data/2019/0/2/sector-start-public.csv']
    }, "#sector-start-by-school-type", null, /* override */ { yAxis: { max: 30} });


    $(window).trigger('resize');
    // var width = $('.graph').first().parents('.scroll-row').first().width();
    // $('.graph').width(width);
    for (var chart in Highcharts.charts) {
        if (Highcharts.charts[chart] != null) {
            Highcharts.charts[chart].redraw();
        }
    }
});
