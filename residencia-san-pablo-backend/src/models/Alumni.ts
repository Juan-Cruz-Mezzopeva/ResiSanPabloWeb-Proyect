import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

interface AlumniAttributes {
  id: number;
  name: string;
  photo: string;
  description: string;
  graduationYear: number;
  career: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface AlumniCreationAttributes {
  name: string;
  photo: string;
  description: string;
  graduationYear: number;
  career: string;
}

class Alumni extends Model<AlumniAttributes, AlumniCreationAttributes> implements AlumniAttributes {
  public id!: number;
  public name!: string;
  public photo!: string;
  public description!: string;
  public graduationYear!: number;
  public career!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Alumni.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    graduationYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    career: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'alumni',
  }
);

export default Alumni;