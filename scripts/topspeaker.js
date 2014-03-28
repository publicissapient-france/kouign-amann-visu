var speaker = {

    init: function (container, data) {
        return {
            container: container,
            data: data,
            draw: function () {
                this.container.empty();

                var margin = {top: 10, right: 10, bottom: 10, left: 10},
                    width = this.container.width() - margin.left - margin.right,
                    height = this.container.width() - margin.top - margin.bottom;


            }
        }
    }
}
