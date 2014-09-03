$(document).ready(function() {

    // Admissions
    createNumericChart('column', {
        2017: 'data/2017/1/0/sat_income.csv',
        2018: 'data/2018/1/0/sat_income.csv'
    }, '#sat-income');
    createFullChart('column', ['Male', 'Female'], null, {
        2017: ['data/2017/1/0/sat_male.csv', 'data/2017/1/0/sat_female.csv'],
        2018: ['data/2018/1/0/sat_male.csv', 'data/2018/1/0/sat_female.csv']
    }, '', '#sat-gender');    
    createFullChart('column', ['Public', 'Private'], null, {
        2017: ['data/2017/1/0/sat_public.csv', 'data/2017/1/0/sat_private.csv'],
        2018: ['data/2017/1/0/sat_public.csv', 'data/2017/1/0/sat_private.csv']
    }, '', '#sat-school-type');    
    createNumericChart('bar', {
        2017: 'data/2017/1/0/sat_ethnicity.csv',
        2018: 'data/2018/1/0/sat_ethnicity.csv'
    }, '#sat-ethnicity');
    csv_to_scatter({
        2017: 'data/2017/1/0/gpa_sat.csv',
        2018: 'data/2018/1/0/gpa_sat.csv'
    }, 'sat-gpa', 'GPA', 'SAT Score', colorset[colorindex++ % colorset.length]);

    // Financial Aid
    createChart('pie', {
        2017: 'data/2017/1/1/financial_aid_raw.csv',
        2018: 'data/2018/1/1/financial_aid_raw.csv'
    }, '#financial-aid');
    createChart('column', {
        2017: 'data/2017/1/1/parents_income.csv',
        2018: 'data/2018/1/1/parents_income.csv'
    }, '#parents-income');
    createChart('bar', {
        2017: 'data/2017/1/1/urbanity_aid.csv',
        2018: 'data/2018/1/1/urbanity_aid.csv'
    }, '#urbanity-aid');
    createChart('pie', {
        2017: 'data/2017/1/1/counselor_raw.csv',
        2018: 'data/2018/1/1/counselor_raw.csv'
    }, '#counselor-raw');
    createChart('column', {
        2017: 'data/2017/1/1/income_counselor.csv',
        2018: 'data/2018/1/1/income_counselor.csv'
    }, '#income-counselor');

    // College Acceptances
    csv_to_scatter({
        2017: 'data/2017/1/2/applied_accepted.csv',
        2018: 'data/2018/1/2/applied_accepted.csv',
    }, 'application-numbers', 'Applied to', 'Accepted to', colorset[colorindex++ % colorset.length]);
    createChart('pie', {
        2017: 'data/2017/1/2/early.csv',
        2018: 'data/2018/1/2/early.csv'
    }, '#early');
    createChart('pie', {
        2017: 'data/2017/1/2/top_choice.csv',
        2018: 'data/2018/1/2/top_choice.csv'
    }, '#top-choice');
    createChart('pie', {
        2017: 'data/2017/1/2/top_choice_early.csv',
        2018: 'data/2018/1/2/top_choice_early.csv'
    }, '#top-choice-early');
    createMultiChart('column', ['Below $40k', '$40k-$80k', '$80k-$125k', '$125k-$250k', '$250k-$500k', 'Above $500k'], null, {
        2017: ['data/2017/1/2/early_income_0.csv', 'data/2017/1/2/early_income_40.csv', 'data/2017/1/2/early_income_80.csv', 'data/2017/1/2/early_income_125.csv', 'data/2017/1/2/early_income_250.csv', 'data/2017/1/2/early_income_500.csv'],
        2018: ['data/2018/1/2/early_income_0.csv', 'data/2018/1/2/early_income_40.csv', 'data/2018/1/2/early_income_80.csv', 'data/2018/1/2/early_income_125.csv', 'data/2018/1/2/early_income_250.csv', 'data/2018/1/2/early_income_500.csv']
    }, '#early-income');    
    createChart('pie', {
        2017: 'data/2017/1/2/early_school_type.csv',
        2018: 'data/2018/1/2/early_school_type.csv'
    }, '#early-school-type');

    // Athletes
    createChart('pie', {
        2017: 'data/2017/0/0/athletes_raw.csv',
        2018: 'data/2018/0/0/athletes_raw.csv'
    }, '#athletes-raw');
    createNumericChart('bar', {
        2017: 'data/2017/1/3/recruited_sat.csv',
        2018: 'data/2018/1/3/recruited_sat.csv'
    }, '#sat-athletes');
    createChart('column', {
        2017: 'data/2017/1/3/recruited_income.csv',
        2018: 'data/2018/1/3/recruited_income.csv'
    }, '#income-athletes');

    $(window).trigger('resize');
    for (var chart in Highcharts.charts) {
        if (Highcharts.charts[chart] != null) {
            Highcharts.charts[chart].redraw();
        }
    }
});
