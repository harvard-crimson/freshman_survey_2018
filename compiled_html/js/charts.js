var colorset = ['#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce', '#492970',
        '#f28f43', '#77a1e5', '#c42525', '#a6c96a'];
var colorindex = 0;

function makeLegend(years, id, divsel) {
    var leg = $("<ul class='year-switch'></ul>").append($.map(years, function (year) {
        return $("<li class='year-switch-option'></li>").text(year);
    }));

    var old = $(divsel).attr("class");
    if (old === undefined)
        old = "";
    else
        old += " ";

    $(divsel).attr("class", old + id);

    leg.find("li").click(function (year) {
        $(this).addClass("selected");
        $(this).siblings("li").removeClass("selected");
        $("." + id).hide();
        $("#" + id + $(this).text()).show();
        $(window).trigger("resize");
    });
    $(divsel).before(leg);

    return leg;
}

$(document).ready(function () {

    $('.nav-tabs li a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
        $(window).trigger('resize');
    });

    // Never actually gets called...
    $('a[data-toggle="tab"]').on('show', function (e) {
        $(window).trigger('resize');
    });

    $(window).on('debouncedresize', function () {
        for (var chart in Highcharts.charts) {
            if (Highcharts.charts[chart] != null) {
                Highcharts.charts[chart].redraw();
            }
        }
    });
});

function add_scatter_plot(vals, wrapper, xlabel, ylabel, color, xrange, yrange) {
    nv.addGraph({
      generate: function() {
          var chart = nv.models.scatterChart()
                    // .showDistX(true)
                    // .showDistY(true)
                    .showLegend(false)
                    .color([color]);
          chart.xAxis.tickFormat(d3.format('.02f'));
          chart.yAxis.tickFormat(d3.format('.02f'));
          chart.xAxis.axisLabel(xlabel);
          chart.yAxis.axisLabel(ylabel);
          if (xrange) { chart.xDomain(xrange); }
          if (yrange) { chart.yDomain(yrange); }

        d3.select('#' + wrapper)
        .datum([
            {
                values: vals
            }
         ])
        .transition().duration(500)
          .call(chart);

        d3.select(".nv-legendWrap")
            .attr("display", "none");

        nv.utils.windowResize(chart.update);

        return chart;
      }
    });
}

function csv_to_scatter(filenamesByYear, id, xlabel, ylabel, color, xrange, yrange) {
    var divsel = "#" + id;
    var yearLegend = makeLegend(Object.keys(filenamesByYear), id, "#" + id);
    var maxYear = Math.max.apply(Math, Object.keys(filenamesByYear));

    $.each(filenamesByYear, function (year, filename) {
        var div = $(divsel).clone();
        var vals = [];
        div.attr("id", id + year);
        $(divsel).after(div);
        $.get(filename, function(data) {
            // Split the lines
            data = data.replace(/\r(?!\n)/g, "\n");
            var lines = data.split('\n');
            var items_last = [0, 0];
            var size = 1;
            $.each(lines, function(lineNo, line) {
                var items = line.split(',');
                items[0] = parseFloat(items[0]);
                items[1] = parseFloat(items[1])

                if (items[0] == items_last[0] && items[1] == items_last[1]) {
                  size++;
                }
                else if (items_last[0] != 0) {
                  vals.push({x: items_last[0], y: items_last[1], size: size});
                  size = 1;
                }
                if (lineNo == lines.length - 1) {
                  vals.push({x: items[0], y: items[1], size: size});
                }
                items_last = [items[0],items[1]];
            });

            console.log("filename: " + filename + ", id: " + id + year);
            add_scatter_plot(vals, id + year, xlabel, ylabel, color, xrange, yrange);
        });
    });

    $("." + id).hide();
    $("#" + id + maxYear).show();
    yearLegend.find("li:contains(" + maxYear + ")").addClass("selected");
}

// optional: default_tab
function createChart(type, filename, divsel, default_tab, moreOptions) {
    createMultiChart(type, null, null, filename, divsel, default_tab, moreOptions);
}

function createNumericChart(type, filename, divsel, moreOptions)
{
    createFullChart(type, null, null, filename, '', divsel, null, moreOptions);
}

function createChartColor(type, color, filename, divsel, moreOptions) {
    createMultiChart(type, null, [color], filename, divsel, moreOptions);
}

// optional: default_tab
function createMultiChart(type, titles, colors, filenames, divsel, default_tab, moreOptions) {
    createFullChart(type, titles, colors, filenames, '%', divsel, default_tab, moreOptions)
}

// optional: default_tab
function createFullChart(type, titlesByYear, colors, filenamesByYear, unit, divsel, default_tab, moreOptions) {
    var id = $(divsel).attr("id");
    var yearLegend = makeLegend(Object.keys(filenamesByYear), id, divsel);
    if (default_tab === undefined || default_tab === null)
        var maxYear = Math.max.apply(Math, Object.keys(filenamesByYear));
    else
        var maxYear = default_tab

    var startidx = colorindex;
    $.each(filenamesByYear, function (year, filenames) {
        var div = $(divsel).clone();
        div.attr("id", id + year);
        $(divsel).after(div);

        if (!Array.isArray(filenames)) {
            filenames = [filenames];
        }

        var titles = titlesByYear;
        if (typeof titles === "object" && !Array.isArray(titles) && titles !== null) {
            titles = titlesByYear[year];
        }

        var inc = 0;
        if (type != 'pie')
            inc = filenames.length;
        else
            inc = 2;

        createFullerChart(type, titles, colors, filenames, unit, div, startidx, inc, moreOptions);
    });

    $("." + id).hide();
    $("#" + id + maxYear).show();
    yearLegend.find("li:contains(" + maxYear + ")").addClass("selected");
}

function createFullerChart(type, titles, colors, filenames, unit, div, startidx, inc, moreOptions) {
    colorindex += inc;
    var options = {
        chart: {
            defaultSeriesType: type,
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            style: {position: "inherit"}
        },
        credits: {
            enabled: false
        },
        exporting: {
            buttons: {
                contextButton: {
                    enabled: false
                }
            }
        },
        legend: {
            enabled: filenames.length > 1
        },
        series: [],
        tooltip: {
            valueSuffix: unit
        },
        title: {
            text: ''
        },
        plotOptions: {
            series: {
                tooltip: {}
            }
        }
    };

    if (filenames.length > 1) {
        options.plotOptions.series.tooltip.headerFormat = '<span style="font-size: 10px">{series.name}</span><br/>';
    }

    for (var i = 0; i < filenames.length; i++) {
        options.series.push({
            data: [],
        });
    }

    var pieOptions = {
        plotOptions: {
            pie: {
                size: '60%',
                allowPointSelect: true,
                cursor: 'pointer',
                colors: [],
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    formatter: function() {
                        return '<b>'+ this.point.name +'</b>: '+ Math.round(10 * this.percentage) / 10 + unit;
                    }
                }
            }
        },
        tooltip: {
            pointFormat: '<b>{point.percentage:.1f}' + unit + '</b>'
        },
    };

    var columnOptions = {
        xAxis: {
            categories: [],
        },
        yAxis: {
            title: {
                text: unit == '%' ? 'Percentage' : ''
            }
        },
        tooltip: {
            pointFormat: '<b>{point.y:.1f}' + unit + '</b><br/>'
        }
    }

    var barOptions = {
        xAxis: {
            categories: [],
        },
        yAxis: {
            title: {
                text: unit == '%' ? 'Percentage' : ''
            }
        },
        tooltip: {
            pointFormat: '<b>{point.y:.1f}' + unit + '</b><br/>'
        }
    }
    if (unit == '%') {
        barOptions.yAxis.ceiling = 100;
        columnOptions.yAxis.ceiling = 100;
    }

    if (type == 'pie') {
        options = $.extend(options, pieOptions);
    }
    else if (type == 'column') {
        options = $.extend(options, columnOptions);
    }
    else if (type == 'bar') {
        options = $.extend(options, barOptions);
    }
    // Override with our "moreOptions"
    if (moreOptions) {
        for (key in options) {
            if (key in moreOptions)
                options[key] = $.extend(options[key], moreOptions[key]);
        }
    }

    $.each(filenames, function(datanum, filename){
        $.get(filename, function(data) {
            // Split the lines
            data = data.replace(/\r(?!\n)/g, "\n");
            var lines = data.split('\n');

            if (titles != null) {
                options.series[datanum]['name'] = titles[datanum];
            }
            if (colors != null) {
                options.series[datanum]['color'] = colors[datanum];
            }
            else if (type != 'pie') {
                options.series[datanum]['color'] = colorset[startidx++ % colorset.length];
            }

            // Iterate over the lines and add categories or series
            $.each(lines, function(lineNo, line) {

                if (line != '' && line != null) {
                    var items = line.split(',');
                    for (var i = 0; i < items.length; i++) {
                        items[i] = items[i].replace(/&#44;/g, ",");
                    }

                    if (type == 'pie') {
                        options.series[datanum].data.push([items[0], parseFloat(items[1])]);
                        options.plotOptions.pie.colors.push(colorset[startidx++ % colorset.length]);
                    }
                    else if (type == 'column') {
                        if (datanum == 0) {
                            options.xAxis.categories.push(items[0]); // set first column from CSV as category
                        }
                        options.series[datanum].data.push(parseFloat(items[1]));
                    }
                    else if (type == 'bar') {
                        if (datanum == 0) {
                            options.xAxis.categories.push(items[0]); // set first column from CSV as category
                        }
                        options.series[datanum].data.push(parseFloat(items[1]));
                    }
                }
            });

            div.highcharts(options);

        });
    });
}
