const bemFactory = function bemFactory(blockName) {
  return function createBemClasses(options) {
    const {
      elementName = '',
      modifiers = {},
      withJsPrefix = false,
      jsPrefix = 'js',
    } = options || {};

    const isElement = blockName !== '' && elementName !== '';

    const baseClass = isElement ? `${blockName}__${elementName}` : blockName;

    const classes = [];

    classes.push(baseClass);

    const modifiersClasses = Object.entries(modifiers).map((item) => {
      const [modifierName, modifierValue] = item;
      if (modifierValue === true) {
        return `${baseClass}_${modifierName}`;
      }
      if (!modifierValue) {
        return '';
      }
      return `${baseClass}_${modifierName}_${modifierValue}`;
    }).filter(Boolean);

    classes.push(...modifiersClasses);

    if (withJsPrefix === true) {
      classes.push(`${jsPrefix}-${baseClass}`);
    }

    return classes;
  };
};

const formatCurrency = function formatCurrency(options) {
  const { value = '', locale = 'ru-RU', sign = '₽' } = options || {};

  return `${value.toLocaleString(locale).replace(',', '&nbsp;')}${sign}`;
};

export {
  bemFactory,
  formatCurrency,
};