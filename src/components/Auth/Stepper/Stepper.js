import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import "../../../layout/style/Stepper.css";



const tutorialSteps = [
  {
    round:
      './assets/img/1stRound.png',

    bar:
      './assets/img/1stBar.png',

    para: 'If we reach 1,000 subscribers we will be able to develop the site with ' +
      'more functions/apps and other things based on your requests.' +
      'Additionally, we will have the possibility to add more exclusive' +
      'content at a faster pace. ' +
      ' In the forum section you can start threads and communicate directly' +
      'with us regarding this platform, and/or connect with other people.',

  },

  {
    round:
      './assets/img/2rdRound.png',

    bar:
      './assets/img/2rdBar.png',

    para: 'With 3,000 subscribers we can start planning and fund our own tours in Europe. And via a survey/poll system on the platform – you get to decide what countries we shall visit. This also means that we could schedule recurring tours/shows on set dates each year.'+ 
    'For example; 3-4 weeks of touring in the spring or fall – every year! Additionally, since were funding the tours through this platform, we could offer the shows for free. Or at least with a super-low ticket price.',

    flag:
      './assets/img/flag1.png',
  },


  {
    round:
      './assets/img/3rdRound.png',

    bar:
      './assets/img/3rdBar.png',

    para: 'If we reach 5,000 subscribers we can do some serious stuff.'+' Now we can easily plan tours in the USA, Australia, Canada, and New Zealand. And same here – this can now be set dates and cities that well return to every year.'+' And you get to decide what cities to visit. And since were funding the tours through this platform, we could offer the shows for free. Or at least with a super-low ticket price. Additionally, we want to produce more free merch to our AA users and with 5k subscribers this will be possible.',

    flag:
      './assets/img/flag2.png',
  },
  {
    round:
      './assets/img/4thRound.png',

    bar:
      './assets/img/4thBar.png',

    para: 'With 10k subscribers the sky is the limit. With all of the other features already included, we can now fund our own high-end music'+' videos for pretty much every single song we make. We can fly-in AA users from all over the world to participate and be present in the videos. We can hire people to help develop the April Army site. Bring fans on tour in a separate professional tour bus that follows ours. Plan tours in India, Brazil, and Mexico. Release new music more often, and develop more games etc etc. Lets dream big!',

    flag:
      './assets/img/flag3.png',
  },


];

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '70%',
    margin: '0px auto',
  },
  header: {
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    width: '100%',
  },
}));

export default function TextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <div className="stepperContainer">
    <div className={classes.root}>

      <div className="row">

        <div className="col-md-4 col-lg-4">
          <img 
          
            className={classes.img}
            src={tutorialSteps[activeStep].bar}
            alt={tutorialSteps[activeStep].label}
          />
        </div>
        <div className="col-md-4 col-sm-12 col-lg-8 ">
          <div className="centerIcons">
            <img
              className="homeSliderRoundIcon"
              src={tutorialSteps[activeStep].round}
              alt={tutorialSteps[activeStep].label}
            />
           
            <img
              className="homeSliderFlagIcon"
              src={tutorialSteps[activeStep].flag}

            />
            <div className="subscribeHeader"><h1>&nbsp;Subscribers</h1></div>

          </div>
          <div className="row homeImageSliderRow">
            <div className="col-md-12">
              <p className="homeSliderParagraph">{tutorialSteps[activeStep].para}</p>
            </div>
          </div>
          <MobileStepper
            variant="dots"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            className={classes.root}
            nextButton={
              <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              </Button>
            }
          />
        </div>
      </div>
    </div>
    </div>
  );
}
