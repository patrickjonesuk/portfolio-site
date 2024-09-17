import { type IconLink, type TechCategory } from './types';

export const Category: { [key: string]: (...icons: IconLink[]) => TechCategory } = {
  Languages(...icons) {
    return {
      name: 'Languages',
      icons: icons,
    };
  },
  Databases(...icons) {
    return {
      name: 'Databases',
      icons: icons,
    };
  },
  Tools(...icons) {
    return {
      name: 'Tools',
      icons: icons,
    };
  },
  Frameworks(...icons) {
    return {
      name: 'Frameworks & Libraries',
      icons: icons,
    };
  },
  Infra(...icons) {
    return {
      name: 'Infrastructure',
      icons: icons,
    };
  },
};
