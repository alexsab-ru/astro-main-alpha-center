import { defineCollection } from 'astro:content';

const seoCollection = defineCollection({});
const servicesCollection = defineCollection({});
const remontCollection = defineCollection({});
const autoserviceCollection = defineCollection({});

export const collections = {
  seo: seoCollection,
  services: servicesCollection,
  remont: remontCollection,
  autoservice: autoserviceCollection
};