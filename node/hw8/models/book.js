import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
  const Book = sequelize.define(
    "Book",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      title: {
        type: DataTypes.STRING(150),   // длина строки ограничена 150 символами
        allowNull: false,              // обязательное поле
        validate: {
          notEmpty: true,              // не пустая строка
        },
      },

      author: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },

      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true,                 // только число
          min: 0,                      // не может быть отрицательным
          max: new Date().getFullYear() // не позже текущего года
        },
      },
    },
    {
      tableName: "Books",   // явно указываем имя таблицы
      timestamps: false,    // отключаем createdAt / updatedAt
    }
  );

export default Book;
