export default {
  // ...
  webmenu: {
    enabled: false,
    resolve: "./src/plugins/webmenu",
  },
  cloud: {
    enabled: false,
  },
  navigation: {
    enabled: true,
    config: {
      additionalFields: [
        "audience",
        { name: "my_custom_field", type: "boolean", label: "My custom field" },
      ],
      contentTypes: ["api::page.page"],
      contentTypesNameFields: {
        "api::page.page": ["title"],
      },
      pathDefaultFields: {
        "api::page.page": ["slug"],
      },
      allowedLevels: 2,
    },
  },
};
