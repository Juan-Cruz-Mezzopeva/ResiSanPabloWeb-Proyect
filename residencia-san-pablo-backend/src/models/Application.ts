import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

interface ApplicationAttributes {
  id: number;
  fullName: string;
  birthDate: Date;
  dni: string;
  email: string;
  phone: string;
  university: string;
  career: string;
  startYear: number;
  motivation: string;
  attachments?: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
  createdAt?: Date;
  updatedAt?: Date;
}

interface ApplicationCreationAttributes {
  fullName: string;
  birthDate: Date;
  dni: string;
  email: string;
  phone: string;
  university: string;
  career: string;
  startYear: number;
  motivation: string;
  attachments?: string;
}

class Application extends Model<ApplicationAttributes, ApplicationCreationAttributes> implements ApplicationAttributes {
  public id!: number;
  public fullName!: string;
  public birthDate!: Date;
  public dni!: string;
  public email!: string;
  public phone!: string;
  public university!: string;
  public career!: string;
  public startYear!: number;
  public motivation!: string;
  public attachments?: string;
  public status!: 'pending' | 'reviewed' | 'accepted' | 'rejected';
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Application.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    dni: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    university: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    career: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    motivation: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    attachments: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('pending', 'reviewed', 'accepted', 'rejected'),
      defaultValue: 'pending',
    },
  },
  {
    sequelize,
    modelName: 'application',
  }
);

export default Application;