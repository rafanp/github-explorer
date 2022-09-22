import React from 'react';
import { useTranslation } from 'react-i18next';
import { BrasilFlag, EuaFlag } from '../../assets';

import Flag from './Flag';
import { FlagsContainer } from './styles';

const I18n = () => {
  const { i18n } = useTranslation();

  function handleChangeLanguage(language: any) {
    i18n.changeLanguage(language);
  }

  const selectedLanguage = i18n.language;
  return (
    <FlagsContainer>
      <Flag
        image={BrasilFlag}
        isSelected={selectedLanguage === 'pt-BR'}
        onClick={() => handleChangeLanguage('pt-BR')}
      />
      <Flag
        image={EuaFlag}
        isSelected={selectedLanguage === 'en-US'}
        onClick={() => handleChangeLanguage('en-US')}
      />
    </FlagsContainer>
  );
};

export default I18n;
