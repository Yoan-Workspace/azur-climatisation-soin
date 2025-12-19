import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nom du service',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description courte',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'fullDescription',
      title: 'Description complète',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Description détaillée du service',
    }),
    defineField({
      name: 'price',
      title: 'Prix',
      type: 'number',
      description: 'Prix en euros',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'priceLabel',
      title: 'Label du prix',
      type: 'string',
      description: 'Ex: "À partir de", "Dès", ou laisser vide',
      options: {
        list: [
          { title: 'Prix fixe', value: '' },
          { title: 'À partir de', value: 'À partir de' },
          { title: 'Dès', value: 'Dès' },
        ],
      },
    }),
    defineField({
      name: 'priceUnit',
      title: 'Unité de prix',
      type: 'string',
      description: 'Ex: "/unité", "/intervention", "/an"',
      initialValue: '/intervention',
    }),
    defineField({
      name: 'duration',
      title: 'Durée estimée',
      type: 'string',
      description: 'Ex: "1h30", "2-3h"',
    }),
    defineField({
      name: 'icon',
      title: 'Icône',
      type: 'string',
      description: 'Nom de l\'icône Lucide React (ex: Wind, Droplets, Shield)',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'features',
      title: 'Inclus dans le service',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Liste des prestations incluses',
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Entretien', value: 'entretien' },
          { title: 'Nettoyage', value: 'nettoyage' },
          { title: 'Maintenance', value: 'maintenance' },
          { title: 'Diagnostic', value: 'diagnostic' },
          { title: 'Installation', value: 'installation' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'popular',
      title: 'Service populaire',
      type: 'boolean',
      description: 'Mettre en avant ce service',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      description: 'Numéro pour l\'ordre d\'affichage (du plus petit au plus grand)',
    }),
    defineField({
      name: 'active',
      title: 'Actif',
      type: 'boolean',
      description: 'Afficher ce service sur le site',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      price: 'price',
      category: 'category',
      media: 'image',
    },
    prepare(selection) {
      const { title, price, category } = selection
      return {
        title: title,
        subtitle: `${price}€ - ${category}`,
        media: selection.media,
      }
    },
  },
  orderings: [
    {
      title: 'Ordre d\'affichage',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Prix croissant',
      name: 'priceAsc',
      by: [{ field: 'price', direction: 'asc' }],
    },
    {
      title: 'Prix décroissant',
      name: 'priceDesc',
      by: [{ field: 'price', direction: 'desc' }],
    },
  ],
})