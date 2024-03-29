const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', { 
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[A-Za-z]+$/
      }
    },
    img: {
      type: DataTypes.STRING,
    },
    hp: {
      type: DataTypes.INTEGER,
      validate: {   
        max: 999,
        min: 1
    }
    },
    attack: {
      type: DataTypes.INTEGER,
      validate: {   
        max: 999,
        min: 1
    }
    },
    defense: {
      type: DataTypes.INTEGER,
      validate: {   
        max: 999,
        min: 1
    }
    },
    speed: {
      type: DataTypes.INTEGER,
      validate: {   
        max: 999,
        min: 1
    }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {   
        max: 999,
        min: 1
    }
    },
    weight: {
      type: DataTypes.INTEGER,
      validate: {   
        max: 999,
        min: 1
    }
    },
    specialDefense: {
      type: DataTypes.INTEGER,
      validate: {   
        max: 999,
        min: 1
    }
    },
    specialAttack: {
      type: DataTypes.INTEGER,
      validate: {   
        max: 999,
        min: 1
    }
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });
};

