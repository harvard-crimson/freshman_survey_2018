$(document).ready(function() {

    // Religion
    createChart('pie', {
        2017: 'data/2017/3/0/religion_raw.csv',
        2018: 'data/2018/3/0/religion_raw.csv',
        2019: 'data/2019/3/0/religion_raw.csv'
    }, '#religion');

    createChart('column', {
        2017: 'data/2017/3/0/religiosity_raw.csv',
        2018: 'data/2018/3/0/religiosity_raw.csv',
        2019: 'data/2019/3/0/religiosity_raw.csv'
    }, '#religiosity', null, { yAxis: { max: 40 } });
    createMultiChart('bar', ['Catholic', 'Protestant', 'Jewish', 'Muslim', 'Buddhist', 'Hindu', 'Mormon', 'Agnostic', 'Atheist', 'Other'], null, {
        2017: ['data/2017/3/0/catholic_race.csv', 'data/2017/3/0/protestant_race.csv', 'data/2017/3/0/jew_race.csv', 'data/2017/3/0/muslim_race.csv', 'data/2017/3/0/buddhist_race.csv', 'data/2017/3/0/hindu_race.csv', 'data/2017/3/0/mormon_race.csv', 'data/2017/3/0/agnostic_race.csv', 'data/2017/3/0/atheist_race.csv', 'data/2017/3/0/other_race.csv'],
        2018: ['data/2018/3/0/catholic_race.csv', 'data/2018/3/0/protestant_race.csv', 'data/2018/3/0/jew_race.csv', 'data/2018/3/0/muslim_race.csv', 'data/2018/3/0/buddhist_race.csv', 'data/2018/3/0/hindu_race.csv', 'data/2018/3/0/mormon_race.csv', 'data/2018/3/0/agnostic_race.csv', 'data/2018/3/0/atheist_race.csv', 'data/2018/3/0/other_race.csv'],
        2019: ['data/2019/3/0/catholic_race.csv', 'data/2019/3/0/protestant_race.csv', 'data/2019/3/0/jew_race.csv', 'data/2019/3/0/muslim_race.csv', 'data/2019/3/0/buddhist_race.csv', 'data/2019/3/0/hindu_race.csv', 'data/2019/3/0/mormon_race.csv', 'data/2019/3/0/agnostic_race.csv', 'data/2019/3/0/atheist_race.csv', 'data/2019/3/0/other_race.csv']
    }, '#religion-race', null, { yAxis: { max: 50 } });
    createMultiChart('bar', ['Not at all religious', 'Not very religious', 'Somewhat religious', 'Religious', 'Very religious'], null, {
        2017: ['data/2017/3/0/religiosity_income_0.csv', 'data/2017/3/0/religiosity_income_1.csv', 'data/2017/3/0/religiosity_income_2.csv', 'data/2017/3/0/religiosity_income_3.csv', 'data/2017/3/0/religiosity_income_4.csv'],
        2018: ['data/2018/3/0/religiosity_income_0.csv', 'data/2018/3/0/religiosity_income_1.csv', 'data/2018/3/0/religiosity_income_2.csv', 'data/2018/3/0/religiosity_income_3.csv', 'data/2018/3/0/religiosity_income_4.csv'],
        2019: ['data/2019/3/0/religiosity_income_0.csv', 'data/2019/3/0/religiosity_income_1.csv', 'data/2019/3/0/religiosity_income_2.csv', 'data/2019/3/0/religiosity_income_3.csv', 'data/2019/3/0/religiosity_income_4.csv']
    }, '#religion-income', null, { yAxis: { max: 45 } });
    createNumericChart('column', {
        2017: 'data/2017/3/0/religion_religiosity.csv',
        2018: 'data/2018/3/0/religion_religiosity.csv',
        2019: 'data/2019/3/0/religion_religiosity.csv'
    }, '#religion-religion', null, { yAxis: { max: 55 } });
    createMultiChart('bar', ['Catholic', 'Protestant', 'Jewish', 'Muslim', 'Hindu', 'Agnostic', 'Atheist'], null, {
        2017: ['data/2017/3/0/catholic_region.csv', 'data/2017/3/0/protestant_region.csv', 'data/2017/3/0/jew_region.csv', 'data/2017/3/0/muslim_region.csv', 'data/2017/3/0/hindu_region.csv', 'data/2017/3/0/agnostic_region.csv', 'data/2017/3/0/atheist_region.csv'],
        2018: ['data/2018/3/0/catholic_region.csv', 'data/2018/3/0/protestant_region.csv', 'data/2018/3/0/jew_region.csv', 'data/2018/3/0/muslim_region.csv', 'data/2018/3/0/hindu_region.csv', 'data/2018/3/0/agnostic_region.csv', 'data/2018/3/0/atheist_region.csv'],
        2019: ['data/2019/3/0/catholic_region.csv', 'data/2019/3/0/protestant_region.csv', 'data/2019/3/0/jew_region.csv', 'data/2019/3/0/muslim_region.csv', 'data/2019/3/0/hindu_region.csv', 'data/2019/3/0/agnostic_region.csv', 'data/2019/3/0/atheist_region.csv']
    }, '#religion-region', null, { yAxis: { max: 30 } });

    // Politics
    createChart('column', {
        2017: 'data/2017/3/1/politics_raw.csv',
        2018: 'data/2018/3/1/politics_raw.csv',
        2019: 'data/2019/3/1/politics_raw.csv'
    }, '#politics');
    createMultiChart('bar', ['Liberal', 'Moderate', 'Conservative'], null, {
        2017: ['data/2017/3/1/liberal_income.csv', 'data/2017/3/1/moderate_income.csv', 'data/2017/3/1/conservative_income.csv'],
        2018: ['data/2018/3/1/liberal_income.csv', 'data/2018/3/1/moderate_income.csv', 'data/2018/3/1/conservative_income.csv'],
        2019: ['data/2019/3/1/liberal_income.csv', 'data/2019/3/1/moderate_income.csv', 'data/2019/3/1/conservative_income.csv']
    }, '#politics-income', null, { yAxis: { max: 80 } });
    createMultiChart('bar', ['Liberal', 'Moderate', 'Conservative'], null, {
        2017: ['data/2017/3/1/liberal_religion.csv', 'data/2017/3/1/moderate_religion.csv', 'data/2017/3/1/conservative_religion.csv'],
        2018: ['data/2018/3/1/liberal_religion.csv', 'data/2018/3/1/moderate_religion.csv', 'data/2018/3/1/conservative_religion.csv'],
        2019: ['data/2019/3/1/liberal_religion.csv', 'data/2019/3/1/moderate_religion.csv', 'data/2019/3/1/conservative_religion.csv']
    }, '#politics-religion');
    createMultiChart('bar', ['Liberal', 'Moderate', 'Conservative'], null, {
        2017: ['data/2017/3/1/liberal_sexuality.csv', 'data/2017/3/1/moderate_sexuality.csv', 'data/2017/3/1/conservative_sexuality.csv'],
        2018: ['data/2018/3/1/liberal_sexuality.csv', 'data/2018/3/1/moderate_sexuality.csv', 'data/2018/3/1/conservative_sexuality.csv'],
        2019: ['data/2019/3/1/liberal_sexuality.csv', 'data/2019/3/1/moderate_sexuality.csv', 'data/2019/3/1/conservative_sexuality.csv']
    }, '#politics-sexuality');
    createMultiChart('bar', ['Liberal', 'Moderate', 'Conservative'], null, {
        2017: ['data/2017/3/1/liberal_race.csv', 'data/2017/3/1/moderate_race.csv', 'data/2017/3/1/conservative_race.csv'],
        2018: ['data/2018/3/1/liberal_race.csv', 'data/2018/3/1/moderate_race.csv', 'data/2018/3/1/conservative_race.csv'],
        2019: ['data/2019/3/1/liberal_race.csv', 'data/2019/3/1/moderate_race.csv', 'data/2019/3/1/conservative_race.csv']
    }, '#politics-ethnicity', null, { yAxis: { max: 70 } });

    // Sex
    createChart('pie', {
        2017: 'data/2017/3/2/virginity_raw.csv',
        2018: 'data/2018/3/2/virginity_raw.csv',
        2019: 'data/2019/3/2/virginity_raw.csv'
    }, '#sex');
    createChart('column', {
        2018: 'data/2018/3/2/sexual_activity_finalclubs.csv',
        2019: 'data/2019/3/2/sexual_activity_finalclubs.csv'
    }, '#sex-final-clubs');
    createChart('column', {
        2017: 'data/2017/3/2/virginity_loss.csv',
        2018: 'data/2018/3/2/virginity_loss.csv',
        2019: 'data/2019/3/2/virginity_loss.csv'
    }, '#sex-age');
    createChart('column', {
        2017: 'data/2017/3/2/sex_gender.csv',
        2018: 'data/2018/3/2/sex_gender.csv',
        2019: 'data/2019/3/2/sex_gender.csv'
    }, '#sex-gender');
    createChart('bar', {
        2017: 'data/2017/3/2/sex_partners.csv',
        2018: 'data/2018/3/2/sex_partners.csv',
        2019: 'data/2019/3/2/sex_partners.csv'
    }, '#sex-partners', null, { yAxis: { max: 70 } });
    createChart('column', {
        2017: 'data/2017/3/2/sex_religion.csv',
        2018: 'data/2018/3/2/sex_religion.csv',
        2019: 'data/2019/3/2/sex_religion.csv'
    }, '#sex-religion', null, { yAxis: { max: 60 } });
    createChart('column', {
        2017: 'data/2017/3/2/sex_recruited.csv',
        2018: 'data/2018/3/2/sex_recruited.csv',
        2019: 'data/2019/3/2/sex_recruited.csv'
    }, '#sex-partners-athletes', null, { yAxis: { max: 70 } });
    createChart('column', {
        2017: 'data/2017/3/2/sex_sexuality.csv',
        2018: 'data/2018/3/2/sex_sexuality.csv',
        2019: 'data/2019/3/2/sex_sexuality.csv'
    }, '#sex-orientation', null, { yAxis: { max: 80 } });


    // Drugs
    createChart('pie', {
        2017: 'data/2017/3/3/alcohol_raw.csv',
        2018: 'data/2018/3/3/alcohol_raw.csv',
        2019: 'data/2019/3/3/alcohol_raw.csv'
    }, '#drugs-alcohol');
    createChart('pie', {
        2017: 'data/2017/3/3/marijuana_raw.csv',
        2018: 'data/2018/3/3/marijuana_raw.csv',
        2019: 'data/2019/3/3/marijuana_raw.csv'
    }, '#drugs-weed');
    createChart('column', {
        2017: 'data/2017/3/3/other_drugs_raw.csv',
        2018: 'data/2018/3/3/other_drugs_raw.csv',
        2019: 'data/2019/3/3/other_drugs_raw.csv'
    }, '#drugs-hard', null, { yAxis: { max: 4 } });
    createChart('pie', {
        2017: 'data/2017/3/3/fake_raw.csv',
        2018: 'data/2018/3/3/fake_raw.csv',
        2019: 'data/2019/3/3/fake_raw.csv'
    }, '#drugs-fake');
    createChart('bar', {
        2017: 'data/2017/3/3/fake_urbanity.csv',
        2018: 'data/2018/3/3/fake_urbanity.csv',
        2019: 'data/2019/3/3/fake_urbanity.csv'
    }, '#drugs-fake-urban', null, { yAxis: { max: 20 } });

    createMultiChart('column', ['Male','Female'], null, {
        2017: ['data/2017/3/3/drugs_male.csv', 'data/2017/3/3/drugs_female.csv'],
        2018: ['data/2018/3/3/drugs_male.csv', 'data/2018/3/3/drugs_female.csv'],
        2019: ['data/2019/3/3/drugs_male.csv', 'data/2019/3/3/drugs_female.csv']
    }, '#drugs-gender');
    createMultiChart('column', ['Public','Private'], null, {
        2017: ['data/2017/3/3/drugs_public.csv', 'data/2017/3/3/drugs_private.csv'],
        2018: ['data/2018/3/3/drugs_public.csv', 'data/2018/3/3/drugs_private.csv'],
        2019: ['data/2019/3/3/drugs_public.csv', 'data/2019/3/3/drugs_private.csv']
    }, '#drugs-school-type');
    createMultiChart('column', ['Recruited Athlete','Not a Recruited Athlete'], null, {
        2017: ['data/2017/3/3/drugs_recruited.csv', 'data/2017/3/3/drugs_not_recruited.csv'],
        2018: ['data/2018/3/3/drugs_recruited.csv', 'data/2018/3/3/drugs_not_recruited.csv'],
        2019: ['data/2019/3/3/drugs_recruited.csv', 'data/2019/3/3/drugs_not_recruited.csv']
    }, '#drugs-athletes', null, { yAxis: { max: 80 } });
    createChart('bar', {
        2017: 'data/2017/3/3/alcohol_religion.csv',
        2018: 'data/2018/3/3/alcohol_religion.csv',
        2019: 'data/2019/3/3/alcohol_religion.csv'
    }, '#drugs-religion');


    // Mental Health
    createChart('pie',  {
        2017: 'data/2017/3/4/mental_health_raw.csv',
        2018: 'data/2018/3/4/mental_health_raw.csv',
        2019: 'data/2019/3/4/mental_health_raw.csv'
    }, '#mental');
    createChart('column',  {
        2017: 'data/2017/3/4/mental_health_income.csv',
        2018: 'data/2018/3/4/mental_health_income.csv',
        2019: 'data/2019/3/4/mental_health_income.csv'
    }, '#mental-income', null, { yAxis: { max: 30 } });
    createChart('column',  {
        2017: 'data/2017/3/4/mental_health_orientation.csv',
        2018: 'data/2018/3/4/mental_health_orientation.csv',
        2019: 'data/2019/3/4/mental_health_orientation.csv'
    }, '#mental-sexuality', null, { yAxis: { max: 60 } });


    // Tech
    createChart('pie',  {
        2017: 'data/2017/3/5/computer_raw.csv',
        2018: 'data/2018/3/5/computer_raw.csv',
        2019: 'data/2019/3/5/computer_raw.csv'
    }, '#computers');
    createChart('pie',  {
        2017: 'data/2017/3/5/phone_raw.csv',
        2018: 'data/2018/3/5/phone_raw.csv',
        2019: 'data/2019/3/5/phone_raw.csv'
    }, '#phone-type');
    createChart('column',  {
        2017: 'data/2017/3/5/mac_income.csv',
        2018: 'data/2018/3/5/mac_income.csv',
        2019: 'data/2019/3/5/mac_income.csv'
    }, '#income-mac');
    createChart('column',  {
        2017: 'data/2017/3/5/iphone_income.csv',
        2018: 'data/2018/3/5/iphone_income.csv',
        2019: 'data/2019/3/5/iphone_income.csv'
    }, '#income-iphone');
    createChart('bar',  {
        2017: 'data/2017/3/5/facebook_raw.csv',
        2018: 'data/2018/3/5/facebook_raw.csv',
        2019: 'data/2019/3/5/facebook_raw.csv'
    }, '#facebook', null, { yAxis: { max: 30 } });
    createChart('bar',  {
        2017: 'data/2017/3/5/twitter_raw.csv',
        2018: 'data/2018/3/5/twitter_raw.csv',
        2019: 'data/2019/3/5/twitter_raw.csv'
    }, '#twitter', null, { yAxis: { max: 60 } });


    $(window).trigger('resize');
    for (var chart in Highcharts.charts) {
        if (Highcharts.charts[chart] != null) {
            Highcharts.charts[chart].redraw();
        }
    }
});
