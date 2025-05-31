// Charts

// Date / Year
getChartData = (data) => {
    var dict = {};
    angular.forEach(data, function (value, key) {
        var year = new Date(value.GigDate).getFullYear();
        if (dict.hasOwnProperty(year)) {
            dict[year] += 1;
        } else {
            dict[year] = 1;
        }
    });
    // console.log(dict);
    return dict;
};

setupChart = (chartData) => {
    Chart.register(ChartDataLabels);

    const options = {
        plugins: {
            datalabels: {
                color: "#36A2EB",
            },
        },
    };

    const config = {
        type: "bar",
        data: {
            labels: Object.keys(chartData),
            datasets: [
                {
                    label: "Films per year",
                    data: Object.values(chartData),
                    fill: false,
                    borderColor: "rgb(75, 192, 192)",
                    tension: 0.1,
                },
            ],
        },
        options,
    };

    let ctx = $("#chartYear");

    let lineGraph = new Chart(ctx, config);
};

// ----- ----- ----- ----- -----

// Band
getChartDataBand = (data) => {
    var dict = {};
    angular.forEach(data, function (value, key) {
        var musician = value.Musician;
        if (dict.hasOwnProperty(musician)) {
            dict[musician] += 1;
        } else {
            dict[musician] = 1;
        }
    });
    // console.log(dict);
    return dict;
};

setupChartBand = (chartData) => {
    Chart.register(ChartDataLabels);

    const options = {
        plugins: {
            datalabels: {
                color: "#36A2EB",
            },
        }
    };

    const config = {
        type: "bar",
        data: {
            labels: Object.keys(chartData),
            datasets: [
                {
                    label: "Band Count",
                    data: Object.values(chartData),
                    fill: false,
                    borderColor: "rgb(75, 192, 192)",
                    tension: 0.1
                },
            ],
        },
        options,
    };

    let ctx = $("#chartBand");

    let lineGraph = new Chart(ctx, config);
};
