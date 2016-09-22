import React from 'react';

import messages from './messages';
import A from 'components/A';
import styles from './styles.css';
import { FormattedMessage } from 'react-intl';
import LocaleToggle from 'containers/LocaleToggle';

function Footer() {
  return (
    <footer className={styles.footer}>
      <section>
        <p>
          <FormattedMessage {...messages.licenseMessage} />
        </p>
      </section>
      <section>
        <LocaleToggle />
      </section>
      <section>
        <a href="#">Limitless Web App Kit</a> by <a href="http://themeforest.net/user/Kopyov" target="_blank">Eugene Kopyov</a>
      </section>
    </footer>
  );
}

export default Footer;
