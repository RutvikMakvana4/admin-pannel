class dashboardController {
    /**
     * @description: Dashboard
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    static async dashboard(req, res) {
        return res.render("admin/dashboard");
    }

    static async add(req, res) {
        return res.render("admin/form");
    }

    static async view(req, res) {
        return res.render("admin/table");
    }
}

export default dashboardController;