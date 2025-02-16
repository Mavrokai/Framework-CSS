class Tooltip {
    constructor() {
        this.tooltips = document.querySelectorAll(".tooltip");
        this.init();
    }


    init() {
        this.tooltips.forEach((tooltip) => {
            const title = tooltip.getAttribute("title");


            if (!title) {
                tooltip.style.cursor = "default";
                return;
            }



            tooltip.addEventListener("mouseenter", () => {
                this.showTooltip(tooltip);
            });

            tooltip.addEventListener("mouseleave", () => {
                this.hideTooltip(tooltip);
            });
        });
    }


    showTooltip(tooltip) {
        const tooltipElement = tooltip.querySelector(".tooltip-text");
        if (tooltipElement) {
            tooltipElement.style.opacity = "1";
            tooltipElement.style.visibility = "visible";
        }
    }


    hideTooltip(tooltip) {
        const tooltipElement = tooltip.querySelector(".tooltip-text");
        if (tooltipElement) {
            tooltipElement.style.opacity = "0";
            tooltipElement.style.visibility = "hidden";
        }
    }
}


new Tooltip();