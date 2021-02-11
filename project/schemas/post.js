export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "teaser",
      title: "Teaser",
      type: "text",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "mtr",
      title: "Minutes to Read",
      type: "number",
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "created_at",
      title: "Created at",
      type: "datetime",
    },
    {
      name: "content",
      title: "Content",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "thumbnail",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};