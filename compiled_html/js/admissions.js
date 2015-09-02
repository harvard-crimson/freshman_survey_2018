$(document).ready(function() {

    // Admissions
    createNumericChart('column', {
        2017: 'data/2017/1/0/sat_income.csv',
        2018: 'data/2018/1/0/sat_income.csv',
        2019: 'data/2019/1/0/sat_income.csv'
    }, '#sat-income');
    createFullChart('column', ['Male', 'Female'], null, {
        2017: ['data/2017/1/0/sat_male.csv', 'data/2017/1/0/sat_female.csv'],
        2018: ['data/2018/1/0/sat_male.csv', 'data/2018/1/0/sat_female.csv'],
        2019: ['data/2019/1/0/sat_male.csv', 'data/2019/1/0/sat_female.csv']
    }, '', '#sat-gender');
    createFullChart('column', ['Public', 'Private'], null, {
        2017: ['data/2017/1/0/sat_public.csv', 'data/2017/1/0/sat_private.csv'],
        2018: ['data/2018/1/0/sat_public.csv', 'data/2018/1/0/sat_private.csv'],
        2019: ['data/2019/1/0/sat_public.csv', 'data/2019/1/0/sat_private.csv']
    }, '', '#sat-school-type');

    // No data for class of 2019
    // createFullChart('column', ['Public', 'Private'], null, {
    //     2017: ['data/2017/1/0/sat_legacy.csv']
    //     2018: ['data/2018/1/0/sat_legacy.csv']
    // }, '', '#sat-legacy');

    createNumericChart('bar', {
        2017: 'data/2017/1/0/sat_ethnicity.csv',
        2018: 'data/2018/1/0/sat_ethnicity.csv',
        2019: 'data/2019/1/0/sat_ethnicity.csv'
    }, '#sat-ethnicity');
    csv_to_scatter({
        2017: 'data/2017/1/0/gpa_sat.csv',
        2018: 'data/2018/1/0/gpa_sat.csv',
        2019: 'data/2019/1/0/gpa_sat.csv'
    }, 'sat-gpa', 'GPA', 'SAT Score', colorset[colorindex++ % colorset.length], [2.8,4.0], [1200,2400]);

    // Financial Aid
    createChart('pie', {
        2017: 'data/2017/1/1/financial_aid_raw.csv',
        2018: 'data/2018/1/1/financial_aid_raw.csv',
        2019: 'data/2019/1/1/financial_aid_raw.csv'
    }, '#financial-aid');
    createChart('column', {
        2017: 'data/2017/1/1/parents_income.csv',
        2018: 'data/2018/1/1/parents_income.csv',
        2019: 'data/2019/1/1/parents_income.csv'
    }, '#parents-income', null, /* override */ { yAxis: { max: 25} });
    createChart('bar', {
        2017: 'data/2017/1/1/urbanity_aid.csv',
        2018: 'data/2018/1/1/urbanity_aid.csv',
        2019: 'data/2019/1/1/urbanity_aid.csv'
    }, '#urbanity-aid', null, /* override options */ { yAxis: { max: 90 } });
    createChart('pie', {
        2017: 'data/2017/1/1/counselor_raw.csv',
        2018: 'data/2018/1/1/counselor_raw.csv',
        2019: 'data/2019/1/1/counselor_raw.csv'
    }, '#counselor-raw');
    createChart('column', {
        2017: 'data/2017/1/1/income_counselor.csv',
        2018: 'data/2018/1/1/income_counselor.csv',
        2019: 'data/2019/1/1/income_counselor.csv'
    }, '#income-counselor', null, /* override */ { yAxis: { max: 35} });

    // College Acceptances
    csv_to_scatter({
        2017: 'data/2017/1/2/applied_accepted.csv',
        2018: 'data/2018/1/2/applied_accepted.csv',
        2019: 'data/2019/1/2/applied_accepted.csv'
    }, 'application-numbers', 'Applied to', 'Accepted to', colorset[colorindex++ % colorset.length]);
    createChart('pie', {
        2017: 'data/2017/1/2/early.csv',
        2018: 'data/2018/1/2/early.csv',
        2019: 'data/2019/1/2/early.csv'
    }, '#early');
    // No data
    // createChart('pie', {
    //     2017: 'data/2017/1/2/legacy_early.csv',
    //     2018: 'data/2018/1/2/legacy_early.csv'
    // }, '#early-legacy');
    // createChart('pie', {
    //     2017: 'data/2017/1/2/legacy_ethnicity.csv',
    //     2018: 'data/2018/1/2/legacy_ethnicity.csv'
    // }, '#legacy-ethnicity');
    createChart('pie', {
        2017: 'data/2017/1/2/top_choice.csv',
        2018: 'data/2018/1/2/top_choice.csv',
        2019: 'data/2019/1/2/top_choice.csv'
    }, '#top-choice');
    createChart('pie', {
        2017: 'data/2017/1/2/top_choice_early.csv',
        2018: 'data/2018/1/2/top_choice_early.csv',
        2019: 'data/2019/1/2/top_choice_early.csv'
    }, '#top-choice-early');
    createMultiChart('column', ['Below $40k', '$40k-$80k', '$80k-$125k', '$125k-$250k', '$250k-$500k', 'Above $500k'], null, {
        2017: ['data/2017/1/2/early_income_0.csv', 'data/2017/1/2/early_income_40.csv', 'data/2017/1/2/early_income_80.csv', 'data/2017/1/2/early_income_125.csv', 'data/2017/1/2/early_income_250.csv', 'data/2017/1/2/early_income_500.csv'],
        2018: ['data/2018/1/2/early_income_0.csv', 'data/2018/1/2/early_income_40.csv', 'data/2018/1/2/early_income_80.csv', 'data/2018/1/2/early_income_125.csv', 'data/2018/1/2/early_income_250.csv', 'data/2018/1/2/early_income_500.csv'],
        2019: ['data/2019/1/2/early_income_0.csv', 'data/2019/1/2/early_income_40.csv', 'data/2019/1/2/early_income_80.csv', 'data/2019/1/2/early_income_125.csv', 'data/2019/1/2/early_income_250.csv', 'data/2019/1/2/early_income_500.csv']
    }, '#early-income');
    createChart('pie', {
        2017: 'data/2017/1/2/early_school_type.csv',
        2018: 'data/2018/1/2/early_school_type.csv',
        2019: 'data/2019/1/2/early_school_type.csv'
    }, '#early-school-type');

    // Athletes
    createChart('pie', {
        2017: 'data/2017/0/0/athletes_raw.csv',
        2018: 'data/2018/0/0/athletes_raw.csv',
        2019: 'data/2019/0/0/athletes_raw.csv'
    }, '#athletes-raw-2');
    createNumericChart('bar', {
        2017: 'data/2017/1/3/recruited_sat.csv',
        2018: 'data/2018/1/3/recruited_sat.csv',
        2019: 'data/2019/1/3/recruited_sat.csv'
    }, '#sat-athletes');
    // createChart('column', {
    //     2017: 'data/2017/1/3/recruited_income.csv',
    //     2018: 'data/2018/1/3/recruited_income.csv',
    //     2019: 'data/2019/1/3/recruited_income.csv'
    // }, '#income-athletes');

    $(window).trigger('resize');
    for (var chart in Highcharts.charts) {
        if (Highcharts.charts[chart] != null) {
            Highcharts.charts[chart].redraw();
        }
    }
});
