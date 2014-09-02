$(document).ready(function() {

    // Religion
    createChart('pie','data/3/0/religion_raw.csv', '#religion');
    createChart('column','data/3/0/religiosity_raw.csv', '#religiosity');
    createMultiChart('bar', ['Catholic', 'Protestant', 'Jewish', 'Muslim', 'Buddhist', 'Hindu', 'Mormon', 'Agnostic', 'Atheist', 'Other'], null, ['data/3/0/catholic_race.csv', 'data/3/0/protestant_race.csv', 'data/3/0/jew_race.csv', 'data/3/0/muslim_race.csv', 'data/3/0/buddhist_race.csv', 'data/3/0/hindu_race.csv', 'data/3/0/mormon_race.csv', 'data/3/0/agnostic_race.csv', 'data/3/0/atheist_race.csv', 'data/3/0/other_race.csv'], '#religion-race');
    createMultiChart('bar', ['Not at all religious', 'Not very religious', 'Somewhat religious', 'Religious', 'Very religious'], null, ['data/3/0/religiosity_income_0.csv', 'data/3/0/religiosity_income_1.csv', 'data/3/0/religiosity_income_2.csv', 'data/3/0/religiosity_income_3.csv', 'data/3/0/religiosity_income_4.csv'], '#religion-income');
    createNumericChart('column','data/3/0/religion_religiosity.csv', '#religion-religion');
    createMultiChart('bar', ['Catholic', 'Protestant', 'Jewish', 'Muslim', 'Hindu', 'Agnostic', 'Atheist'], null, ['data/3/0/catholic_region.csv', 'data/3/0/protestant_region.csv', 'data/3/0/jew_region.csv', 'data/3/0/muslim_region.csv', 'data/3/0/hindu_region.csv', 'data/3/0/agnostic_region.csv', 'data/3/0/atheist_region.csv'], '#religion-region');

    // Politics
    createChart('column','data/3/1/politics_raw.csv', '#politics');
    createMultiChart('bar', ['Liberal', 'Moderate', 'Conservative'], null, ['data/3/1/liberal_income.csv', 'data/3/1/moderate_income.csv', 'data/3/1/conservative_income.csv'], '#politics-income');
    createMultiChart('bar', ['Liberal', 'Moderate', 'Conservative'], null, ['data/3/1/liberal_religion.csv', 'data/3/1/moderate_religion.csv', 'data/3/1/conservative_religion.csv'], '#politics-religion');
    createMultiChart('bar', ['Liberal', 'Moderate', 'Conservative'], null, ['data/3/1/liberal_sexuality.csv', 'data/3/1/moderate_sexuality.csv', 'data/3/1/conservative_sexuality.csv'], '#politics-sexuality');
    createMultiChart('bar', ['Liberal', 'Moderate', 'Conservative'], null, ['data/3/1/liberal_race.csv', 'data/3/1/moderate_race.csv', 'data/3/1/conservative_race.csv'], '#politics-ethnicity');

    // Sex
    createChart('pie','data/3/2/virginity_raw.csv', '#sex');
    createChart('column','data/3/2/sex_gender.csv', '#sex-gender');
    createChart('column','data/3/2/virginity_loss.csv', '#sex-age');
    createChart('bar','data/3/2/sex_partners.csv', '#sex-partners');
    createChart('bar','data/3/2/sex_religion.csv', '#sex-religion');
    createNumericChart('column','data/3/2/partners_gender.csv', '#sex-partners-gender');
    createChart('column','data/3/2/sex_religion.csv', '#sex-religion');
    createChart('column','data/3/2/sex_recruited.csv', '#sex-partners-athletes');
    createChart('column','data/3/2/sex_sexuality.csv', '#sex-orientation');


    // Drugs
    createChart('pie','data/3/3/alcohol_raw.csv', '#drugs-alcohol');
    createChart('pie','data/3/3/marijuana_raw.csv', '#drugs-weed');
    createChart('column','data/3/3/other_drugs_raw.csv', '#drugs-hard');
    createChart('pie','data/3/3/fake_raw.csv', '#drugs-fake');
    createChart('bar','data/3/3/fake_urbanity.csv', '#drugs-fake-urban');
    createMultiChart('column', ['Male','Female'], null, ['data/3/3/drugs_male.csv', 'data/3/3/drugs_female.csv'], '#drugs-gender');    
    createMultiChart('column', ['Public','Private'], null, ['data/3/3/drugs_public.csv', 'data/3/3/drugs_private.csv'], '#drugs-school-type');    
    createMultiChart('column', ['Recruited Athlete','Not a Recruited Athlete'], null, ['data/3/3/drugs_recruited.csv', 'data/3/3/drugs_not_recruited.csv'], '#drugs-athletes');
    createChart('bar', 'data/3/3/alcohol_religion.csv', '#drugs-religion');


    // Mental Health
    createChart('pie', 'data/3/4/mental_health_raw.csv', '#mental');
    createChart('column', 'data/3/4/mental_health_income.csv', '#mental-income');
    createChart('column', 'data/3/4/mental_health_orientation.csv', '#mental-sexuality');


    // Tech
    createChart('pie', 'data/3/5/computer_raw.csv', '#computers');
    createChart('pie', 'data/3/5/phone_raw.csv', '#phone-type');
    createChart('column', 'data/3/5/mac_income.csv', '#income-mac');
    createChart('column', 'data/3/5/iphone_income.csv', '#income-iphone');
    createChart('bar', 'data/3/5/facebook_raw.csv', '#facebook');
    createChart('bar', 'data/3/5/twitter_raw.csv', '#twitter');


    $(window).trigger('resize');
    for (var chart in Highcharts.charts) {
        if (Highcharts.charts[chart] != null) {
            Highcharts.charts[chart].redraw();
        }
    }
});