const fontFamily = {
  valyuBoldFont: 'Inter-Bold',
  valyuBlackFont: 'Inter-Black',
  valyuSemiBoldFont: 'Inter-SemiBold',
  valyuRegularFont: 'Inter-Regular',
  valyuMediumFont: 'Inter-Medium',
  valyuExtraLightFont: 'Inter-ExtraLight',
};

const fontSize = {
  fontSize2XS: 10,
  fontSizeXS: 12,
  fontSizeS: 14,
  fontSizeN: 16,
  fontSizeL: 18,
  fontSizeXL: 20,
  fontSize2XL: 24,
  fontSize3XL: 28,
  fontSize4XL: 36,
  fontSize5XL: 48,
  fontSize6XL: 64,
};

function textVariants() {
  return {
    Headline: {
      XL: {
        fontFamily: fontFamily.valyuBoldFont,
        fontSize: fontSize.fontSizeXL,
      },
      S: {
        fontFamily: fontFamily.valyuBoldFont,
        fontSize: fontSize.fontSizeS,
      },
      N: {
        fontFamily: fontFamily.valyuBoldFont,
        fontSize: fontSize.fontSizeN,
      },
      L: {
        fontFamily: fontFamily.valyuBoldFont,
        fontSize: fontSize.fontSizeL,
      },
      XS: {
        fontFamily: fontFamily.valyuBoldFont,
        fontSize: fontSize.fontSizeXS,
      },
    },
    Title: {
      XL: {
        fontFamily: fontFamily.valyuMediumFont,
        fontSize: fontSize.fontSizeXL,
      },
      S: {
        fontFamily: fontFamily.valyuMediumFont,
        fontSize: fontSize.fontSizeS,
      },
      N: {
        fontFamily: fontFamily.valyuMediumFont,
        fontSize: fontSize.fontSizeN,
      },
      L: {
        fontFamily: fontFamily.valyuMediumFont,
        fontSize: fontSize.fontSizeL,
      },
      XS: {
        fontFamily: fontFamily.valyuMediumFont,
        fontSize: fontSize.fontSizeXS,
      },
    },
    SubTitle: {
      XL: {
        fontFamily: fontFamily.valyuMediumFont,
        fontSize: fontSize.fontSizeXL,
      },
      S: {
        fontFamily: fontFamily.valyuMediumFont,
        fontSize: fontSize.fontSizeS,
      },
      N: {
        fontFamily: fontFamily.valyuMediumFont,
        fontSize: fontSize.fontSizeN,
      },
      L: {
        fontFamily: fontFamily.valyuMediumFont,
        fontSize: fontSize.fontSizeL,
      },
      XS: {
        fontFamily: fontFamily.valyuMediumFont,
        fontSize: fontSize.fontSizeXS,
      },
    },
    Paragraph: {
      XL: {
        fontFamily: fontFamily.valyuMediumFont,
        fontSize: fontSize.fontSizeXL,
      },
      S: {
        fontFamily: fontFamily.valyuMediumFont,
        fontSize: fontSize.fontSizeS,
      },
      N: {
        fontFamily: fontFamily.valyuMediumFont,
        fontSize: fontSize.fontSizeN,
      },
      L: {
        fontFamily: fontFamily.valyuMediumFont,
        fontSize: fontSize.fontSizeL,
      },
      XS: {
        fontFamily: fontFamily.valyuMediumFont,
        fontSize: fontSize.fontSizeXS,
      },
    },
  };
}

export default {
  fontFamily,
  fontSize,
  textVariants,
};
