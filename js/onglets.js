class Tabs {
    constructor() {
        this.tabContainers = document.querySelectorAll(".tab-container");
        this.init();
    }


    init() {
        this.tabContainers.forEach((container) => {
            const tabItems = container.querySelectorAll(".tab-item");
            const tabPanes = container.querySelectorAll(".tab-pane");

            tabItems.forEach((tab) => {
                tab.addEventListener("click", () => {


                    tabItems.forEach((item) => item.classList.remove("active"));
                    tabPanes.forEach((pane) => pane.classList.remove("active"));



                    tab.classList.add("active");
                    const target = tab.getAttribute("data-target");
                    const targetPane = container.querySelector(target);
                    if (targetPane) {
                        targetPane.classList.add("active");
                    }
                });
            });
        });
    }
}

new Tabs();