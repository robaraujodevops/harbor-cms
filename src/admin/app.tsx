import favicon from "./extensions/favicon.ico";
import MenuLogo from "./extensions/techarborLogo.png";

export default {
  config: {
    locales: [
      'pt-BR',
    ],
    head: {
      favicon: favicon,
    },
    menu: {
      logo: MenuLogo,
    },
    translations: {
      "pt-BR": {
        "app.components.LeftMenu.navbrand.title": "HarborCMS",
      }
    }
  },
  bootstrap() {},
};
