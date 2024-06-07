const client = require("./database.js");

const dataMapper = {
  getAllCoffees: async () => {
    const coffees = 'SELECT * FROM "coffee" ;'; //pour la sécuration de la requête on la stocke
    const result = await client.query(coffees);
    const coffee = result.rows;

    return coffee;
  },

  getThreeCoffees: async () => {
    const coffees = 'SELECT * FROM "coffee" ORDER BY id DESC LIMIT 3;';
    const result = await client.query(coffees);
    const coffee = result.rows;

    return coffee;
  },

  getRandomCoffees: async () => {
    const coffees = 'SELECT * FROM "coffee" ORDER BY RANDOM() LIMIT 3;';
    const result = await client.query(coffees);
    const coffee = result.rows;

    return coffee;
  },

  getOneCoffee: async (id) => {
    const coffees = `SELECT * FROM "coffee" WHERE "id"= $1;`;
    const result = await client.query(coffees, [id]);
    const coffee = result.rows[0];
    console.log(coffee);
    return coffee;
  },

  getOneCoffeeWithCategory: async (id) => {
    // const coffees = `
    //   SELECT * FROM "coffee"
    //   JOIN category ON "coffee".category_id = category.id
    //   WHERE "coffee"."id"= $1;
    // `;

    //Autre exemple
    // SELECT coffee.*, category.name AS cat_name, category.id AS cat_id
    // FROM coffee
    // JOIN category
    // ON coffee.category_id = category.id;

    const coffees = `
      SELECT c.*, ct.name as category_name 
      FROM "coffee" AS c
      JOIN category AS ct ON c.category_id = ct.id
      WHERE c."id"= $1;
    `;
    const result = await client.query(coffees, [id]);
    const coffee = result.rows[0];

    // remplace le if dans le ejs avec cette commande :
    // coffee.available = coffee.available ? 'Oui' : 'Non';

    return coffee;
  },

  // getCategoryName: async (name) => {
  //   const category = `SELECT * FROM "category" WHERE "name"= $1;`;

  //   const result = await client.query(category, [name]);
  //   const coffee = result.rows[0];

  //   return coffee;
  // },

  getThreeCategory: async () => {
    const categorys = 'SELECT * FROM "category" LIMIT 3;';
    const result = await client.query(categorys);
    const category = result.rows;

    return category;
  },

  getAllCategory: async () => {
    const categorys = 'SELECT * FROM "category";';
    const result = await client.query(categorys);
    const allCategory = result.rows;

    return allCategory;
  },

  getOneCategory: async (id) => {
    const categorys = `SELECT * FROM "coffee" WHERE "category_id"= $1;`;
    const result = await client.query(categorys, [id]);
    const category = result.rows;
    console.log(category);

    return category;
  },
};

module.exports = dataMapper;
