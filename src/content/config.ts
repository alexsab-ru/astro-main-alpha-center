import { defineCollection } from 'astro:content';

const seoCollection = defineCollection({});
const servicesCollection = defineCollection({});
const remontCollection = defineCollection({});
const autoserviceCollection = defineCollection({});
const aboutCollection = defineCollection({});
const corporateClientsCollection = defineCollection({});
const actionsCollection = defineCollection({});

export const collections = {
  seo: seoCollection,
  services: servicesCollection,
  remont: remontCollection,
  autoservice: autoserviceCollection,
  about: aboutCollection,
  corporateClients: corporateClientsCollection,
  actions: actionsCollection
};