const dataMapper = require("../dataMapper");

const mainController = {
  // méthode pour la page d'accueil
  homePage: async (request, response) => {
    try {
      const coffees = await dataMapper.getThreeCoffees();

      response.render("index", { coffees });
    } catch (error) {
      console.error(error);
      response.status(500).render(" 500");
    }
  },

  cataloguePage: async (request, response) => {
    try {
      const coffees = await dataMapper.getThreeCoffees();
      const allCoffees = await dataMapper.getAllCoffees();
      const randomCoffees = await dataMapper.getRandomCoffees();
      const allCategory = await dataMapper.getAllCategory();
      const category = await dataMapper.getThreeCategory();

      response.render("catalogue", {
        coffees,
        allCoffees,
        allCategory,
        category,
        randomCoffees,
      });
    } catch (error) {
      console.error(error);
      response.status(500).render("500");
    }
  },

  categoryPage: async (request, response) => {
    try {
      const categoryId = parseInt(request.params.id);
      const allCoffees = await dataMapper.getAllCoffees();
      const randomCoffees = await dataMapper.getRandomCoffees();
      const coffees = await dataMapper.getOneCoffeeWithCategory();
      const allCategory = await dataMapper.getAllCategory();
      const oneCategory = await dataMapper.getOneCategory(categoryId);
      response.render("catalogueFilter", {
        allCoffees,
        randomCoffees,
        coffees,
        allCategory,
        oneCategory,
      });
    } catch (error) {
      console.error(error);
      response.status(500).render("500");
    }
  },

  contactPage: async (request, response) => {
    try {
      response.render("contact");
    } catch (error) {
      console.error(error);
      response.status(500).render("500");
    }
  },

  aboutPage: async (request, response) => {
    try {
      response.render("about");
    } catch (error) {
      console.error(error);
      response.status(500).render("500");
    }
  },

  boutiquePage: async (request, response) => {
    try {
      const coffee = request.session.boutique || [];
      const allCoffees = await dataMapper.getAllCoffees();
      const coffees = await dataMapper.getThreeCoffees();
      const oneCoffee = await dataMapper.getOneCoffee();
      const allCategory = await dataMapper.getAllCategory();
      const totalPrice = parseFloat(
        coffee
          .reduce((total, cofe) => {
            return total + cofe.price_kg;
          }, 0)
          .toFixed(2)
      );
      response.render("boutique", {
        coffees,
        allCoffees,
        allCategory,
        coffee,
        oneCoffee,
        totalPrice,
      });
    } catch (error) {
      console.error(error);
      response.status(500).render("500");
    }
  },

  fullCataloguePage: async (request, response) => {
    try {
      const allCoffees = await dataMapper.getAllCoffees();
      const coffees = await dataMapper.getThreeCoffees();
      const allCategory = await dataMapper.getAllCategory();
      response.render("catalogueAll", { coffees, allCoffees, allCategory });
    } catch (error) {
      console.error(error);
      response.status(500).render("500");
    }
  },

  contact: async (request, response) => {
    // Récupérer les informations du formulaire
    try {
      const pseudo = request.body.pseudo;
      // On veut stocker le pseudo dans la session !
      request.session.pseudo = pseudo;

      console.log(request.session.pseudo);
      // Rediriger vers la home page
      response.redirect("/contact");
    } catch (error) {
      console.error(error);
      response.status(500).render("500");
    }
  },
};

module.exports = mainController;
