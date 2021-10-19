const { Sequelize, QueryTypes } = require("sequelize");

const sequelize = new Sequelize("popular_flowers", "root", "secret", {
  host: "mysql_PopularFlowers",
  dialect: "mysql",
});

const Query = {
  flowers: async () => {
    const FetchFlowers = await sequelize.query("SELECT * FROM flowers", {
      type: QueryTypes.SELECT,
    });
    return FetchFlowers;
  },
};

module.exports = { Query };
