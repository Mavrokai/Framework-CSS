class Popin {
    constructor() {
        this.modals = document.querySelectorAll(".modal");
        this.init();
    }

    init() {
        document.querySelectorAll("[data-target]").forEach((button) => {
            button.addEventListener("click", () => {
                const target = button.getAttribute("data-target");
                this.show(target);
            });
        });

        document.querySelectorAll(".popin-dismiss").forEach((button) => {
            button.addEventListener("click", () => {
                this.hide(button.closest(".modal"));
            });
        });

        this.modals.forEach((modal) => {
            modal.addEventListener("click", (event) => {
                if (event.target === modal) {
                    this.hide(modal);
                }
            });
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                this.modals.forEach((modal) => this.hide(modal));
            }
        });
    }

    show(target) {
        const modal = document.querySelector(target);
        if (modal) {
            modal.style.display = "flex";
        }
    }

    hide(modal) {
        if (modal) {
            modal.style.display = "none";
        }
    }
}

new Popin();