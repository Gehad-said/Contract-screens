const colors = {
  primary: '#0067B3',
  greyscale: {
    white: `hsl(0, 0%, 100%)`,
    grey95: `hsl(0, 0%, 95%)`,
    grey75: `hsl(0, 0%, 75%)`,
    grey60: `hsl(0, 0%, 60%)`,
    grey40: `hsl(0, 0%, 40%)`,
    black: `hsl(0, 0%, 0%)`,
  },
  blue: {
    95: `hsl(205, 100%, 95%)`,
    80: `hsl(205, 100%, 80%)`,
    50: `hsl(205, 100%, 50%)`,
    35: `hsl(205, 100%, 35%)`,
    30: `hsl(205, 100%, 30%)`,
    20: `hsl(205, 100%, 20%)`,
  },
};

export const customTheme = {
  colors,
  accordion: {
    accentColor: colors.primary, // accordion accent color theme input
    fontColor: '#666666', // accordion font color theme input
  },
  button: {
    baseColor: colors.primary, // button base color theme input
    hoverBaseColor: colors.blue[80], // button hover base color theme input
    primaryFontColor: '#ffffff', // button primary font color theme input
    primaryHoverBackgroundColor: '#0086e8',
    primaryActiveBackgroundColor: '#0095ff',
    primaryHoverFontColor: '#ffffff', // button primary hover font color theme input
    secondaryFontColor: '#000000', // button secondary font color theme input
    secondaryHoverFontColor: '#000000', // button secondary hover font color theme input
    textFontColor: colors.primary, // button text font color theme input
    textHoverFontColor: '#ffffff', // button text hover font color theme input
  },
  checkbox: {
    baseColor: '#0067b3', // checkbox base color theme input
    checkColor: '#ffffff', // checkbox check color theme input
  },
  chip: {
    baseColor: '#eeeeee', // chip base color theme input
    accentColor: '', // chip accent color theme input
    fontColor: '#000000', // chip font color theme input
  },
  date: {
    baseColor: colors.primary, // date base color theme input
    accentColor: '#ffffff', // date accent color theme input
  },
  dropdown: {
    baseColor: '#ffffff', // dropdown base color theme input
    fontColor: '#000000', // dropdown font color theme input
  },
  footer: {
    baseColor: '#000000', // footer base color theme input
    fontColor: '#ffffff', // footer font color theme input
    accentColor: '#0067b3', // footer accent color theme input
    logo: `assets/image/default_footer.png`, // footer logo theme input
  },
  header: {
    baseColor: '#ffffff', // header base color theme input
    accentColor: '#000000', // header accent color theme input
    fontColor: '#000000', // header font color theme input
    menuBaseColor: '#ffffff', // header menu base color theme input
    hamburguerColor: '#000000', // header hamburger color theme input
    logo: `assets/image/default_header.png`, // header logo theme input
    logoResponsive: `assets/image/default_responsiveheader.png`, // header logo responsive theme input
    focusBorderColorOnDark: '#000000',
  },
  newInputText: {
    selectedBaseColor: '#D9D9D9', // inputText selected base color theme input
  },
  paginator: {
    baseColor: '#eeeeee', // paginator base color theme input
    fontColor: '#000000', // paginator font color theme input
  },
  progressBar: {
    accentColor: '#FFED00', // progressBar accent color theme input
    baseColor: '#000000', // progressBar base color theme input
  },
  radio: {
    baseColor: '#000000', // radio base color theme input
  },
  select: {
    baseColor: '#D9D9D9', // select base color theme input
  },
  sidenav: {
    baseColor: colors.primary, // sidenav base color theme input
    arrowBaseColor: '#F8F8F8', // sidenav arrow base color theme input
    arrowAccentColor: '#000000', // sidenav arrow accent color theme input
  },
  slider: {
    baseColor: '#0067b3', // slider base color theme input
  },
  spinner: {
    accentColor: colors.primary, // spinner accent color theme input
    baseColor: '#ffffff', // spinner base color theme input
  },
  switch: {
    checkedBaseColor: colors.primary, // switch checked base color theme input
  },
  table: {
    baseColor: colors.primary, // table base color theme input
    fontColor: '#ffffff', // table font color theme input
  },
  tabs: {
    baseColor: colors.primary, // tabs base color theme input
  },
  toggleGroup: {
    selectedBaseColor: colors.primary, // toggleGroup selected base color theme input
    selectedHoverBaseColor: '#000000', // toggleGroup selected hover base color theme input
    selectedFontColor: '#ffffff', // toggleGroup selected font color theme input
    selectedHoverFontColor: '#ffffff', // toggleGroup selected hover font color theme input
    unselectedBaseColor: '#D9D9D9', // toggleGroup unselected base color theme input
    unselectedHoverBaseColor: '#eeeeee', // toggleGroup unselected hover base color theme input
    unselectedFontColor: '#000000', // toggleGroup unselected font color theme input
    unselectedHoverFontColor: '#000000', // toggleGroup unselected hover font color theme input
  },
  wizard: {
    baseColor: colors.primary, // wizard base color theme input
    fontColor: '#ffffff', // wizard font color theme input
  },
};
