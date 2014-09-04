$(document).ready(function() {

    // Academics/Extracurriculars

    // Cheating
    createChart('pie',{
        2017: 'data/2017/2/0/exam_cheaters.csv',
        2018: 'data/2018/2/0/exam_cheaters.csv'
    }, '#exam-cheaters');
    createChart('pie',{
        2017: 'data/2017/2/0/paper_cheaters.csv',
        2018: 'data/2018/2/0/paper_cheaters.csv'
    }, '#paper-cheaters');
    createChart('pie',{
        2017: 'data/2017/2/0/homework_cheaters.csv',
        2018: 'data/2018/2/0/homework_cheaters.csv'
    }, '#homework-cheaters');
    createMultiChart('column', ['Public', 'Private'], null, {
        2017: ['data/2017/2/0/public_cheating.csv', 'data/2017/2/0/private_cheating.csv'],
        2018: ['data/2018/2/0/public_cheating.csv', 'data/2018/2/0/private_cheating.csv']
    }, '#cheating-school-type');
    createChart('column',{
        2017: 'data/2017/2/0/cheating_by_recruit.csv',
        2018: 'data/2018/2/0/cheating_by_recruit.csv'
    }, '#cheating-recruits');
    createChart('column',{
        2018: 'data/2018/2/0/cheating_by_gender.csv'
    }, '#cheating-gender');
    // createMultiChart('column', ['Recruited Athlete', 'Not a Recruited Athlete'], null, ['data/2/0/recruited_cheaters.csv', 'data/2/0/not_recruited_cheaters.csv'], '#cheating-athlete');    
    // createMultiChart('column', ['Male', 'Female'], null, ['data/2/0/male_cheaters.csv', 'data/2/0/female_cheaters.csv'], '#cheating-gender');    

    // In High School
    createMultiChart('column', {
        2017: ['All'],
        2018: ['All', 'Only athletes']
    }, null, {
        2017: ['data/2017/2/1/hours_studying_past.csv'],
        2018: ['data/2018/2/1/hours_studying_past_all.csv', 'data/2018/2/1/hours_studying_past_athletes.csv']
    }, '#study-habits-past');
    createChart('pie',{
        2017: 'data/2017/2/1/sources_of_pressure.csv',
        2018: 'data/2018/2/1/sources_of_pressure.csv'
    }, '#pressure');
    createChart('bar',{
        2018: 'data/2018/2/1/athletics_by_income.csv'
    }, '#athletics-by-income');
    createChart('bar',{
        2017: 'data/2017/2/1/extracurriculars.csv',
        2018: 'data/2018/2/1/extracurriculars.csv'
    }, '#extracurriculars');
    createChart('bar',{
        2017: 'data/2017/2/1/presidents_raw.csv',
        2018: 'data/2018/2/1/presidents_raw.csv'
    }, '#leadership');
    createChart('bar',{
        2017: 'data/2017/2/1/government_belief.csv',
        2018: 'data/2018/2/1/government_belief.csv'
    }, '#government');
    // createMultiChart('column', ['Public', 'Private'], null, ['data/2/1/public_vs_math.csv', 'data/2/1/private_vs_math.csv'], '#math-school-type');
    // createMultiChart('column', ['Public', 'Private'], null, ['data/2/1/public_hours.csv', 'data/2/1/private_hours.csv'], '#study-hours-school-type');

    // At Harvard
    createChart('pie',{
        2017: 'data/2017/2/2/hours_studying_future.csv',
        2018: 'data/2018/2/2/hours_studying_future.csv'
    }, '#study-habits-future');
    createMultiChart('bar', ['Academics', 'Extracurriculars', 'Social Life', 'Paid Employment', 'Varsity Sports'], null, {
        2017: ['data/2017/2/2/priorities_academics.csv', 'data/2017/2/2/priorities_extracurriculars.csv', 'data/2017/2/2/priorities_social.csv', 'data/2017/2/2/priorities_job.csv', 'data/2017/2/2/priorities_sports.csv'],
        2018: ['data/2018/2/2/priorities_academics.csv', 'data/2018/2/2/priorities_extracurriculars.csv', 'data/2018/2/2/priorities_social.csv', 'data/2018/2/2/priorities_job.csv', 'data/2018/2/2/priorities_sports.csv']
    }, '#priorities-raw');
    createChart('pie',{
        2017: 'data/2017/2/2/secondary_raw.csv',
        2018: 'data/2018/2/2/secondary_raw.csv'
    }, '#secondary');
    createChart('pie',{
        2017: 'data/2017/2/2/concentration_raw.csv',
        2018: 'data/2018/2/2/concentration_raw.csv'
    }, '#concentration-raw');

    createMultiChart('column', ['Male', 'Female'], null, {
        2018: ['data/2018/2/2/concentrations_male.csv', 'data/2018/2/2/concentrations_female.csv']
    }, '#concentration-gender');

    createChart('pie',{
        2018: 'data/2018/2/2/greek.csv'
    }, '#greek');

    createMultiChart('column', ['Public', 'Private'], null, {
        2018: ['data/2018/2/2/greek_public.csv', 'data/2018/2/2/greek_private.csv']
    }, '#greek-school');

    // Athletics
    createChart('pie',{
        2017: 'data/2017/0/0/athletes_raw.csv',
        2018: 'data/2018/0/0/athletes_raw.csv'
    }, '#athletes-raw');
    createChart('bar', {
        2017: 'data/2017/2/3/four_years.csv',
        2018: 'data/2018/2/3/four_years.csv'
    }, '#attrition-athletics');
    createChart('column',{
        2017: 'data/2017/2/3/concussions.csv',
        2018: 'data/2018/2/3/concussions.csv'
    }, '#concussions');
    createMultiChart('column', ['Never been concussed', 'Concussed Athletes'], null, {
        2017: ['data/2017/2/3/not_concussed_changed_view.csv', 'data/2017/2/3/concussed_changed_view.csv'],
        2018: ['data/2018/2/3/not_concussed_changed_view.csv', 'data/2018/2/3/concussed_changed_view.csv']
    }, '#concussions-view');

    $(window).trigger('resize');
    for (var chart in Highcharts.charts) {
        if (Highcharts.charts[chart] != null) {
            Highcharts.charts[chart].redraw();
        }
    }
});
