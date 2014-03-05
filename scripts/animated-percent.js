var animatedCounter = {

    init: function (container, data) {
        return {
            container: container,
            data: data,
            draw: function () {
                this.container.empty();
                var svg = d3.select(this.container.get(0)).append("svg")
                    .attr("width", 100)
                    .attr("height", 100)

                svg.selectAll(".txt")
                    .data([data.max])
                    .enter()
                    .append("text")
                    .text("")
                    .attr("class", "counter")
                    .attr("transform", "translate(" + 100 / 2 + "," + 100 * 0.85 + ")")
                    .transition()
                    .duration(data.duration)
                    .tween("text", function (d) {
                        var i = d3.interpolate(this.textContent, d),
                            prec = (d + "").split("."),
                            round = (prec.length > 1) ? Math.pow(10, prec[1].length) : 1;

                        return function (t) {
                            this.textContent = data.prefix + (Math.round(i(t) * round) / round) + data.suffix;
                        };
                    });
            }
        }
    }
}