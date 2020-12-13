export default {
  cms_manual_init: true,
  backend: {
    name: 'github',
    repo: 'jakeprins/nextwind',
    branch: 'master',
  },
  media_folder: 'public/img',
  public_folder: 'img',
  logo_url: 'https://demo.serverless.page/img/logo-cms.jpg',
  site_url: 'https://demo.serverless.page',
  collections: [
    {
      name: 'pages',
      label: 'Pages',
      files: [
        {
          label: 'Home',
          name: 'home',
          file: 'src/content/pages/home.md',
          fields: [
            {
              label: 'Hero Section Version',
              name: 'hero_version',
              widget: 'number',
              value_type: 'int',
              min: 1,
              max: 3,
            },
            {
              label: 'Hero Title',
              name: 'hero_title',
              widget: 'string',
            },
            {
              label: 'Hero Description',
              name: 'hero_description',
              widget: 'markdown',
            },
            {
              label: 'Hero Image',
              name: 'hero_image',
              widget: 'image',
            },
            {
              label: 'Feature Section Version',
              name: 'feature_version',
              widget: 'number',
              value_type: 'int',
              min: 1,
              max: 3,
            },
            {
              label: 'Feature Title',
              name: 'feature_title',
              widget: 'string',
            },
            {
              label: 'Feature Description',
              name: 'feature_description',
              widget: 'string',
            },
            {
              label: 'Features',
              name: 'features',
              widget: 'list',
              fields: [
                {
                  label: 'Name',
                  name: 'name',
                  widget: 'string',
                },
                {
                  label: 'Description',
                  name: 'description',
                  widget: 'text',
                },
              ],
            },
            {
              label: 'Steps Section Version',
              name: 'steps_version',
              widget: 'number',
              value_type: 'int',
              min: 1,
              max: 3,
            },
            {
              label: 'Steps',
              name: 'steps',
              widget: 'list',
              fields: [
                {
                  label: 'Name',
                  name: 'name',
                  widget: 'string',
                },
                {
                  label: 'Description',
                  name: 'description',
                  widget: 'text',
                },
              ],
            },
            {
              label: 'Steps Image',
              name: 'steps_image',
              widget: 'image',
            },
            {
              label: 'Pricing Title',
              name: 'pricing_title',
              widget: 'string',
            },
            {
              label: 'Pricing Description',
              name: 'pricing_description',
              widget: 'string',
            },
            {
              label: 'Plans',
              name: 'plans',
              widget: 'list',
              fields: [
                {
                  label: 'Name',
                  name: 'name',
                  widget: 'string',
                },
                {
                  label: 'Description',
                  name: 'description',
                  widget: 'text',
                },
                {
                  label: 'Price',
                  name: 'price',
                  widget: 'string',
                },
                {
                  label: 'USPs',
                  name: 'usps',
                  widget: 'list',
                },
              ],
            },
            {
              label: 'Team Section Version',
              name: 'team_version',
              widget: 'number',
              value_type: 'int',
              min: 1,
              max: 3,
            },
            {
              label: 'Team Title',
              name: 'team_title',
              widget: 'string',
            },
            {
              label: 'Team Description',
              name: 'team_description',
              widget: 'markdown',
            },
            {
              label: 'Team',
              name: 'team',
              widget: 'list',
              fields: [
                {
                  label: 'Name',
                  name: 'name',
                  widget: 'string',
                },
                {
                  label: 'Description',
                  name: 'description',
                  widget: 'text',
                },
                {
                  label: 'Position',
                  name: 'position',
                  widget: 'string',
                },
                {
                  label: 'Image',
                  name: 'image',
                  widget: 'image',
                },
              ],
            },
            {
              label: 'Blog Section Version',
              name: 'blog_version',
              widget: 'number',
              value_type: 'int',
              min: 1,
              max: 3,
            },
            {
              label: 'Blog Title',
              name: 'blog_title',
              widget: 'string',
            },
            {
              label: 'Blog Description',
              name: 'blog_description',
              widget: 'string',
            },
            {
              label: 'Featured Posts',
              name: 'posts',
              widget: 'relation',
              collection: 'posts',
              searchFields: ['title'],
              valueField: '{{slug}}',
              displayFields: ['title'],
              multiple: true,
            },
          ],
        },
      ],
    },
    {
      name: 'posts',
      label: 'Posts',
      folder: 'src/content/posts',
      create: true,
      slug: '{{slug}}',
      preview_path: 'posts/{{fields.slug}}',
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'string',
        },
        {
          label: 'Draft',
          name: 'draft',
          widget: 'boolean',
          default: true,
        },
        {
          label: 'Publish Date',
          name: 'date',
          widget: 'datetime',
        },
        {
          label: 'Description',
          name: 'description',
          widget: 'text',
        },
        {
          label: 'Category',
          name: 'category',
          widget: 'string',
        },
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
        },
        {
          label: 'Body',
          name: 'body',
          widget: 'markdown',
        },
        {
          label: 'Tags',
          name: 'tags',
          widget: 'list',
        },
      ],
    },
  ],
};
