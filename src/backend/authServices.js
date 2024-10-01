import { Client, Account, ID } from 'appwrite';
import config from './conf';

class AuthServices {
  client = new Client();
  account;
  constructor() {
    this.client.setEndpoint(config.endPoint).setProject(config.projectId);
    this.account = new Account(this.client);
  }

  // Login to the account
  async login(email, password) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.error('Appwrite authService :: login :: error ', error);
      throw new Error(error.message);
    }
  }

  // Logout from the account
  async logout() {
    try {
      await this.account.deleteSessions();
      return true;
    } catch (error) {
      console.error('Appwrite authService :: logout :: error ', error);
      throw new Error(error.message);
    }
  }

  // Register a new user
  async register(email, password, name) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return await this.login(email, password);
      } else {
        return userAccount;
      }
    } catch (error) {
      console.error('Appwrite authService :: register :: error ', error);
      throw new Error(error.message);
    }
  }

  // Get user
  async getUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error('Appwrite authService :: getUser :: error ', error);
      throw new Error(error.message);
    }
  }

  // Update user profile
  async updateUser(name, email, password) {
    try {
      const user = await this.getUser();
      user.update({
        name: name,
        email: email,
        password: password,
      });
      return user;
    } catch (error) {
      console.error('Appwrite authService :: updateUser :: error ', error);
      throw new Error(error.message);
    }
  }
  // Forgot password
  async forgotPassword(email) {
    // TODO: create forgot password for users
  }
  // Delete user
  async deleteUser() {
    try {
      await this.account.delete();
      return true;
    } catch (error) {
      console.error('Appwrite authService :: deleteUser :: error ', error);
      throw new Error(error.message);
    }
  }
}

const authServices = new AuthServices();

export default authServices;
