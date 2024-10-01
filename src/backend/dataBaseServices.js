import config from './conf';
import { Client, ID, Databases, Storage, Query } from 'appwrite';

class databaseServices {
  client = new Client();
  Databases;
  bucket;
  constructor() {
    this.client.setEndpoint(config.endPoint).setProject(config.projectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // Upload project
  async uploadProject({
    projectName,
    projectDescription,
    projectImage,
    projectLink,
    projectTechs,
    projectUser,
  }) {
    try {
      return await this.databases.createDocument(
        config.databaseId,
        ID.unique(),
        {
          projectName,
          projectDescription,
          projectImage,
          projectLink,
          projectTechs,
          projectUser,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }
      );
    } catch (error) {
      console.error('Appwrite :: uploadProject :: error: ', error);
      throw new Error(error.message);
    }
  }

  // Update project
  async updateProject(documentId, {}) {}

  // Get all projects
  async getAllProjects() {
    try {
      const query = new Query();
      query.limit(100);
      const projects = await this.databases.listDocuments(
        config.databaseId,
        query
      );
      return projects;
    } catch (error) {
      console.error('Appwrite :: getAllProjects :: error: ', error);
      throw new Error(error.message);
    }
  }

  // Delete project
  async deleteProject(documentId) {
    try {
      await this.databases.deleteDocument(config.databaseId, documentId);
    } catch (error) {
      console.error('Appwrite :: deleteProject :: error: ', error);
      throw new Error(error.message);
    }
  }
}

databaseServices = new databaseServices();

export default databaseServices;
