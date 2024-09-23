import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksBanner extends Schema.Component {
  collectionName: 'components_shared_banners';
  info: {
    displayName: 'Banner';
    icon: 'message';
    description: '';
  };
  attributes: {
    bannerImage: Attribute.Media;
    mainTitle: Attribute.String & Attribute.Required;
    mainContent: Attribute.Text & Attribute.Required;
  };
}

export interface BlocksBlog extends Schema.Component {
  collectionName: 'components_blocks_blogs';
  info: {
    displayName: 'Blog';
    icon: 'book';
  };
  attributes: {
    blogHeader: Attribute.String;
    blogTopHeader: Attribute.String;
    blogApiDataUrl: Attribute.String & Attribute.Required;
  };
}

export interface BlocksCta extends Schema.Component {
  collectionName: 'components_blocks_ctas';
  info: {
    displayName: 'Cta';
    icon: 'envelop';
  };
  attributes: {
    ctaHeader: Attribute.String;
    ctaSubHeader: Attribute.Text;
    ctaLink: Attribute.Component<'elements.button', true>;
    ctaForm: Attribute.Component<'elements.form'>;
  };
}

export interface BlocksServices extends Schema.Component {
  collectionName: 'components_blocks_services';
  info: {
    displayName: 'Services';
    icon: 'cog';
    description: '';
  };
  attributes: {
    servicesHeader: Attribute.String;
    servicesTopHeader: Attribute.String;
    servicesDescription: Attribute.Text;
    servicesButton: Attribute.Component<'elements.button'>;
    serviceItems: Attribute.Component<'elements.service-item', true>;
    servicesBackground: Attribute.Media;
  };
}

export interface BlocksSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'monitor';
    description: '';
  };
  attributes: {
    slideItem: Attribute.Component<'elements.slide-item', true>;
  };
}

export interface BlocksSolutions extends Schema.Component {
  collectionName: 'components_blocks_solutions';
  info: {
    displayName: 'Solutions';
    icon: 'command';
    description: '';
  };
  attributes: {
    header: Attribute.String & Attribute.Required;
    topHeader: Attribute.String;
    bottomText: Attribute.String;
    bottomTextLink: Attribute.Boolean & Attribute.DefaultTo<false>;
    bottomTextLinkLabel: Attribute.String;
    bottomTextLinkUrl: Attribute.String;
    solutionItem: Attribute.Component<'elements.solution-item', true>;
  };
}

export interface ElementsButton extends Schema.Component {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'Button';
    icon: 'feather';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    buttonType: Attribute.Enumeration<['mainOne', 'mainTwo', 'linkOne']>;
    link: Attribute.String & Attribute.Required;
    action: Attribute.Enumeration<
      ['post_mail_lead', 'page_anchor', 'page_link']
    >;
  };
}

export interface ElementsFooterContacts extends Schema.Component {
  collectionName: 'components_elements_footer_contacts';
  info: {
    displayName: 'footerContacts';
    icon: 'phone';
    description: '';
  };
  attributes: {
    footerContactFone: Attribute.String;
    footerFacebookActive: Attribute.Boolean & Attribute.DefaultTo<false>;
    footerFacebookLink: Attribute.String;
    footerWhatsappActive: Attribute.Boolean & Attribute.DefaultTo<false>;
    footerWhatsappLink: Attribute.String;
    footerXActive: Attribute.Boolean & Attribute.DefaultTo<false>;
    footerXLink: Attribute.String;
  };
}

export interface ElementsForm extends Schema.Component {
  collectionName: 'components_elements_forms';
  info: {
    displayName: 'Form';
    icon: 'layout';
  };
  attributes: {
    formHeader: Attribute.String;
    formText: Attribute.String;
    input: Attribute.Component<'elements.input', true> & Attribute.Required;
  };
}

export interface ElementsInput extends Schema.Component {
  collectionName: 'components_elements_inputs';
  info: {
    displayName: 'Input';
    icon: 'expand';
    description: '';
  };
  attributes: {
    inputPlaceholder: Attribute.String;
    inputLabel: Attribute.String & Attribute.DefaultTo<'null'>;
    inputName: Attribute.String;
    inputType: Attribute.Enumeration<
      [
        'button',
        'checkbox',
        'color',
        'date',
        'datetime-local',
        'email',
        'file',
        'hidden',
        'image',
        'month',
        'number',
        'password',
        'radio',
        'range',
        'reset',
        'search',
        'submit',
        'tel',
        'text',
        'textarea',
        'time',
        'url',
        'week'
      ]
    >;
  };
}

export interface ElementsLink extends Schema.Component {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
    icon: 'cursor';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
    target: Attribute.Enumeration<['_blank', '_self', '_parent', '_top']> &
      Attribute.DefaultTo<'_blank'>;
  };
}

export interface ElementsServiceItem extends Schema.Component {
  collectionName: 'components_elements_service_items';
  info: {
    displayName: 'Service Item';
    icon: 'apps';
    description: '';
  };
  attributes: {
    serviceIcon: Attribute.Enumeration<
      [
        'icon-website',
        'icon-statistic',
        'icon-programming',
        'icon-server',
        'icon-cloud',
        'icon-technician',
        'icon-controls',
        'icon-network'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'icon-website'>;
    serviceHeader: Attribute.String & Attribute.Required;
    serviceDescription: Attribute.Text & Attribute.Required;
    serviceButton: Attribute.Component<'elements.button'>;
  };
}

export interface ElementsSlideItem extends Schema.Component {
  collectionName: 'components_shared_slide_items';
  info: {
    displayName: 'Slide Item';
    description: '';
  };
  attributes: {
    slideImage: Attribute.Media;
    header: Attribute.String;
    topHeader: Attribute.String;
    subHeader: Attribute.String;
    contentPosition: Attribute.Enumeration<
      ['align-v-h', 'c-slide-top-right', 'c-slide-top-left']
    >;
    contentEffect: Attribute.Enumeration<
      ['fade_in_up_sd', 'fade_in_rtl', 'fade_in_down_sd', 'fade_in_ltr']
    >;
    slideButtons: Attribute.Component<'elements.button', true>;
  };
}

export interface ElementsSolutionItem extends Schema.Component {
  collectionName: 'components_elements_solution_items';
  info: {
    displayName: 'Solution Item';
    icon: 'layout';
    description: '';
  };
  attributes: {
    solutionImage: Attribute.Media & Attribute.Required;
    solutionIcon: Attribute.Media;
    solutionTitle: Attribute.String & Attribute.Required;
    solutionSubTitle: Attribute.String;
    solutionDescription: Attribute.Text;
    solutionButton: Attribute.Component<'elements.button'>;
  };
}

export interface GlobalsFooter extends Schema.Component {
  collectionName: 'components_globals_footers';
  info: {
    displayName: 'Footer';
    icon: 'stack';
    description: '';
  };
  attributes: {
    footerLogo: Attribute.Media & Attribute.Required;
    footerCtaDescr: Attribute.Text & Attribute.Required;
    footerInputMail: Attribute.Component<'elements.input'>;
    footerSubmitButton: Attribute.Component<'elements.button'>;
    footerNavigationSections: Attribute.Relation<
      'globals.footer',
      'oneToMany',
      'api::footer-navigation-section.footer-navigation-section'
    >;
    footerContacts: Attribute.Component<'elements.footer-contacts'>;
    footerText: Attribute.Text;
  };
}

export interface GlobalsHeader extends Schema.Component {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'Header';
    icon: 'gate';
    description: '';
  };
  attributes: {
    logoImage: Attribute.Media & Attribute.Required;
    navigationSlug: Attribute.String & Attribute.Required;
    language: Attribute.Enumeration<['Portugu\u00EAs', 'English']> &
      Attribute.DefaultTo<'Portugu\u00EAs'>;
    loginActive: Attribute.Boolean & Attribute.DefaultTo<true>;
    searchActive: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.banner': BlocksBanner;
      'blocks.blog': BlocksBlog;
      'blocks.cta': BlocksCta;
      'blocks.services': BlocksServices;
      'blocks.slider': BlocksSlider;
      'blocks.solutions': BlocksSolutions;
      'elements.button': ElementsButton;
      'elements.footer-contacts': ElementsFooterContacts;
      'elements.form': ElementsForm;
      'elements.input': ElementsInput;
      'elements.link': ElementsLink;
      'elements.service-item': ElementsServiceItem;
      'elements.slide-item': ElementsSlideItem;
      'elements.solution-item': ElementsSolutionItem;
      'globals.footer': GlobalsFooter;
      'globals.header': GlobalsHeader;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
