import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../../components/Logo';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './RegistrationPage.module.sass';
import { clearAuthError } from '../../store/slices/authSlice';
import CONSTANTS from '../../constants';
import QuestionsList from './QuestionsList/QuestionsList';

const { TEL_NUMBER } = CONSTANTS.COMPANY_CONTACTS;

const RegistrationPage = props => {
  props.clearError();

  return (
    <div className={styles.signUpPage}>
      <div className={styles.signUpContainer}>
        <div className={styles.headerSignUpPage}>
          <Logo src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} />
          <div className={styles.linkLoginContainer}>
            <Link to='/login' style={{ textDecoration: 'none' }}>
              <span>Login</span>
            </Link>
          </div>
        </div>
        <RegistrationForm history={props.history} />
      </div>
      <div className={styles.footer}>
        <QuestionsList>
          Check out our <span>FAQs</span> or send us a<span>message</span>. For
          assistance with launching a contest, you can also call us at
          {TEL_NUMBER} or schedule a<span>Branding Consultation</span>
        </QuestionsList>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearError: () => dispatch(clearAuthError()),
});

export default connect(null, mapDispatchToProps)(RegistrationPage);
