var barchart = {

    init: function (container, data) {
        return {
            container: container,
            data: data,
            draw: function () {
                this.container.empty();

                var margin = {top: 20, right: 40, bottom: 30, left: 30},
                    width = this.container.width() - margin.left - margin.right,
                    height = 300 - margin.top - margin.bottom;

                var x = d3.scale.ordinal()
                    .rangeRoundBands([0, width], .1);

                var y = d3.scale.linear()
                    .range([height, 0]);

                var xAxis = d3.svg.axis()
                    .scale(x)
                    .orient("bottom");

                var yAxis = d3.svg.axis()
                    .scale(y)
                    .orient("left")
                    .tickValues([0, 0.25, 0.5, 1])
                    .tickFormat(d3.format("%"));

                var color = d3.scale.ordinal()
                    .domain([1, 2, 3, 4, 5])
                    .range(colorbrewer.RdYlGn[5]);

                // An SVG element with a bottom-right origin.
                var svg = d3.select(this.container.get(0)).append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                var nbVote = d3.sum(this.data.votes, function (d) {
                    return d[1]
                })
                x.domain([1, 2, 3, 4, 5]);
                y.domain([0, d3.max(this.data.votes, function (d) {
                    return d[1] / nbVote;
                })]);

                svg.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + height + ")")
                    .call(xAxis);

                svg.append("g")
                    .attr("class", "y axis")
                    .call(yAxis)

                svg.selectAll(".bar")
                    .data(this.data.votes)
                    .enter().append("rect")
                    .attr("class", "bar")
                    .attr("x", function (d) {
                        return x(d[0]);
                    })
                    .attr("width", x.rangeBand())
                    .attr("y", function (d) {
                        return y(d[1] / nbVote);
                    })
                    .attr("height", function (d) {
                        return height - y(d[1] / nbVote);
                    })
                    .attr("fill", function (d) {
                        return color(d[0])
                    })
                    .attr("fill-opacity", 0.8)
                    .attr("stroke", function (d) {
                        return color(d[0])
                    });

            }
        }
    }
}