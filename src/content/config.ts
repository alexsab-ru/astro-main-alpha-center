import { defineCollection } from 'astro:content';

const seoCollection = defineCollection({});
const servicesCollection = defineCollection({});

export const collections = {
  seo: seoCollection,
  services: servicesCollection
};