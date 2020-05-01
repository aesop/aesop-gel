import { HYPERLINK_STYLE_TYPES } from '~/constants';

const { EXTERNAL_NO_ICON_TEXT_LINK } = HYPERLINK_STYLE_TYPES;

export default {
  copy: {
    default: {
      eyebrow: 'Praesent tincidunt accumsan',
      heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      subHeading: 'Sed consectetur facilisis imperdiet',
      description:
        'Aliquam turpis libero, posuere sed nisl in, porta facilisis lorem. Phasellus eu turpis in quam efficitur hendrerit.',
    },
    expectations: {
      eyebrow: 'Quisque blandit est erat',
      heading: 'Fusce et dui nisi',
      description:
        'Aliquam lectus purus, gravida id metus dignissim, efficitur tempus lacus. Maecenas a cursus diam. Vivamus ultrices nisi non ex placerat, vel elementum sapien condimentum.',
    },
  },
  image: {
    default: {
      altText: 'alt image',
      large:
        'https://www.aesop.com/medias/Aesop-Skin-Classic-Purifying-Facial-Exfoliant-Paste-Texture-50-50-Mobile-640x640px.jpg?context=bWFzdGVyfGltYWdlc3wyNDg1OHxpbWFnZS9qcGVnfGltYWdlcy9oMjIvaDBkLzkxMTYyMjg1MTc5MTguanBnfDJjZDUzMjI4N2EzZDgyYzE1ZTk3MTM4OWFjODU5N2Q2NjQ4YTAxNzcwZmE4YjBlZDQ2YTJmYTRhOTI5ZWQyY2I',
      medium:
        'https://www.aesop.com/medias/Aesop-Skin-Classic-Purifying-Facial-Exfoliant-Paste-Texture-50-50-Mobile-640x640px.jpg?context=bWFzdGVyfGltYWdlc3wyNDg1OHxpbWFnZS9qcGVnfGltYWdlcy9oMjIvaDBkLzkxMTYyMjg1MTc5MTguanBnfDJjZDUzMjI4N2EzZDgyYzE1ZTk3MTM4OWFjODU5N2Q2NjQ4YTAxNzcwZmE4YjBlZDQ2YTJmYTRhOTI5ZWQyY2I',
      small:
        'https://www.aesop.com/medias/Aesop-Skin-Classic-Purifying-Facial-Exfoliant-Paste-Texture-50-50-Mobile-640x640px.jpg?context=bWFzdGVyfGltYWdlc3wyNDg1OHxpbWFnZS9qcGVnfGltYWdlcy9oMjIvaDBkLzkxMTYyMjg1MTc5MTguanBnfDJjZDUzMjI4N2EzZDgyYzE1ZTk3MTM4OWFjODU5N2Q2NjQ4YTAxNzcwZmE4YjBlZDQ2YTJmYTRhOTI5ZWQyY2I',
    },
    kit: {
      altText: 'alt image',
      large:
        'https://www.aesop.com/medias/Aesop-Kit-PSAO-Extended-PDP-2nd-Asset-Desktop-1440x1800px.png?context=bWFzdGVyfGltYWdlc3wyNjIzNDh8aW1hZ2UvcG5nfGltYWdlcy9oYjIvaDlhLzg5NjQ1MzAwNDQ5NTgucG5nfDIxMWM1ZTIzOGNjNTU3YWQxMTNiMTIyZmQxNmE2NTQ5NjVhZWVkNDQzNzM0YThlMjg2ZmZiNzAzZTYyODdlZGM',
      medium:
        'https://www.aesop.com/medias/Aesop-Kit-PSAO-Extended-PDP-2nd-Asset-Tablet-1536x864px.png?context=bWFzdGVyfGltYWdlc3wxOTkxNDV8aW1hZ2UvcG5nfGltYWdlcy9oOTgvaGYyLzg5NjQ1MzAyMDg3OTgucG5nfDY0NGMwZWE4OWI5NjU0NDEwMDA5ZTc2YzIxMGZiNGQ4NmViZWQ4NjQ4NDM4NDA5OWZmMTcxNjRjNzAwNjM1NGU',
      small:
        'https://www.aesop.com/medias/Aesop-Kit-PSAO-Extended-PDP-2nd-Asset-Mobile-640x640px.png?context=bWFzdGVyfGltYWdlc3w2NjIzMXxpbWFnZS9wbmd8aW1hZ2VzL2hmZi9oMmQvODk2NDUzMDI3NDMzNC5wbmd8MTdiZTljZjAxMTQ2YjBjMTE5MjA2NTJkNDA2MDhiMTA1ZDcyMjE4MTQ1NjI1ZDZlOTkzMTBmZTkyMTc5YTM3OQ',
    },
    hero: {
      altText: 'alt image',
      large: '/assets/images/MediaWithContent/hero-large.jpg',
      medium: '/assets/images/MediaWithContent/hero-medium.jpg',
      small: '/assets/images/MediaWithContent/hero-small.jpg',
    },
    foreground: {
      altText: 'alt image',
      large: '/assets/images/MediaWithContent/foreground-large.jpg',
      medium: '/assets/images/MediaWithContent/foreground-large.jpg',
      small: '/assets/images/MediaWithContent/foreground-large.jpg',
    },
    background: {
      altText: 'alt image',
      large: '/assets/images/MediaWithContent/background-large.jpg',
      medium: '/assets/images/MediaWithContent/background-large.jpg',
      small: '/assets/images/MediaWithContent/background-large.jpg',
    },
    expectations: {
      altText: 'alt image',
      large:
        'https://www.aesop.com/medias/Aesop-Room-Sprays-Hybris-Cythera-Pattern-Desktop-1440x1600.jpg?context=bWFzdGVyfGltYWdlc3w0MTU4Mjl8aW1hZ2UvanBlZ3xpbWFnZXMvaGIyL2g0MS84ODEzNzIxNTUwODc4LmpwZ3wxODAxZWQ5YTdlNzMxNDYxZWZhMThiNzQ1YTJhZTRmMjE3ZWU3YzEzZDJmOGZjZWU0M2Y4ZWJlNjg2YjE1NjQ2',
      medium:
        'https://www.aesop.com/medias/Aesop-Room-Sprays-Hybris-Cythera-Pattern-Desktop-1440x1600.jpg?context=bWFzdGVyfGltYWdlc3w0MTU4Mjl8aW1hZ2UvanBlZ3xpbWFnZXMvaGIyL2g0MS84ODEzNzIxNTUwODc4LmpwZ3wxODAxZWQ5YTdlNzMxNDYxZWZhMThiNzQ1YTJhZTRmMjE3ZWU3YzEzZDJmOGZjZWU0M2Y4ZWJlNjg2YjE1NjQ2',
      small:
        'https://www.aesop.com/medias/Aesop-Room-Sprays-Hybris-Cythera-Pattern-Desktop-1440x1600.jpg?context=bWFzdGVyfGltYWdlc3w0MTU4Mjl8aW1hZ2UvanBlZ3xpbWFnZXMvaGIyL2g0MS84ODEzNzIxNTUwODc4LmpwZ3wxODAxZWQ5YTdlNzMxNDYxZWZhMThiNzQ1YTJhZTRmMjE3ZWU3YzEzZDJmOGZjZWU0M2Y4ZWJlNjg2YjE1NjQ2',
    },
    fullWidth: {
      altText: 'alt image',
      large:
        'https://acceptance.aesop.com/medias/Aesop-Gift-Kits-2019-20-Hybris-The-Humourist-PDP-Tertiary-50-50-Desktop-1440x1800px.png?context=bWFzdGVyfGltYWdlc3w1MzQ1MnxpbWFnZS9wbmd8aW1hZ2VzL2hhNC9oN2YvOTE2MjAxNjQ1NjczNC5wbmd8MzE4ZmYyZDU3YTU4NWQ5ODczNmYwODczNjA2OTAyM2EwNjcwMmQ0MzQ4NDFiZjRjZWJkNzAzZmI2OWI2ODQyOQ',
      medium:
        'https://acceptance.aesop.com/medias/Aesop-Gift-Kits-2019-20-Hybris-The-Humourist-PDP-Tertiary-50-50-Tablet-1536x1685px.png?context=bWFzdGVyfGltYWdlc3w1OTMwMnxpbWFnZS9wbmd8aW1hZ2VzL2g4Mi9oYWMvOTE2MjAxNjUyMjI3MC5wbmd8NjBmNzczOTA3MGVmNDBmNWZjNGY5MjBjZWE0Y2VlZmE5NjM1NTc2NGQ1MGIxMDRiOWU5ZDJiNDg4ZGJhMDQ3Mg',
      small:
        'https://acceptance.aesop.com/medias/Aesop-Gift-Kits-2019-20-Hybris-The-Humourist-PDP-Tertiary-1-Mobile-640x800px.png?context=bWFzdGVyfGltYWdlc3wyMjU1MXxpbWFnZS9wbmd8aW1hZ2VzL2gxMy9oMTIvOTE2MjAxNjU4NzgwNi5wbmd8NWQ2NzcyMWNhNTMzMTkyOTA2ODg5ZDhkM2ZkYzcwYzk2NGFjMzBjM2QzNDJlYzUyNTE1NzU3MjFjOGNmNWFjMQ',
    },
  },
  definitionList: {
    items: [
      {
        description: 'Proin vulputate eros quis lectus pretium gravida.',
        id: '1',
        term: 'Aliquam',
      },
      {
        description: 'Pulvinar nulla enim, eu elementum lacus vehicula sed.',
        id: '2',
        term: 'Etiam eu augue quam',
      },
      {
        description: 'Sed ac ipsum vel risus aliquam rutrum.',
        id: '3',
        term: 'Duis at elit',
      },
    ],
  },
  kitList: {
    copy: {
      eyebrow: 'Fusce nisi risus',
      heading: 'Duis at elit eget augue pellentesque interdum maximus.',
    },
    items: [
      { content: 'Pellentesque vitae sapien leo', id: '1' },
      { content: 'Nunc in euismod lectus', id: '2' },
      {
        content: 'Aenean magna lectus, gravida non mi et, varius mattis sapien',
        id: '3',
      },
      {
        content:
          'Donec vel sapien accumsan, scelerisque lacus placerat, placerat est',
        id: '4',
      },
    ],
  },
  linkButtonGroup: {
    link: {
      text: 'Proin vulputate',
      url: 'https://aesop.com',
      style: 'Internal No Icon Button Link',
    },
    secondaryLink: {
      text: 'Quisque lacus',
      url: 'https://aesop.com',
      style: 'Internal No Icon Button Link',
    },
  },
  hyperlinkButtonDark: {
    style: 'Internal Button Link',
    url: 'https://aesop.com',
    theme: 'dark',
    children: 'Sed egestas scelerisque',
  },
  subNav: {
    links: [
      {
        id: 'aenean-magna-lectus',
        style: EXTERNAL_NO_ICON_TEXT_LINK,
        children: 'Aenean magna lectus',
        url: 'https://www.aesop.com',
      },
      {
        id: 'phasellus-magna-nulla',
        style: EXTERNAL_NO_ICON_TEXT_LINK,
        children: 'Phasellus magna nulla',
        url: 'https://www.aesop.com',
      },
      {
        id: 'sed-facilisis-felis-venenatis',
        style: EXTERNAL_NO_ICON_TEXT_LINK,
        children: 'Sed facilisis felis venenatis',
        url: 'https://www.aesop.com',
      },
      {
        id: 'curabitur-auctor',
        style: EXTERNAL_NO_ICON_TEXT_LINK,
        children: 'Curabitur auctor',
        url: 'https://www.aesop.com',
      },
    ],
  },
};
