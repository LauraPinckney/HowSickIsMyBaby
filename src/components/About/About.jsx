import styles from './About.module.scss';

export const About = () => {
  return (
    <>
      <div className={styles.container}>
        <h2>Conditions with a low score which may need medical attention:</h2>
        <p>
          Babies sometimes develop problems such as thrush, sticky eyes, or
          lumps or swellings. Although rarely serious these conditions may still
          need medical attention. You should ask your health centre about them.
        </p>
        <h2>If you are still worried:</h2>
        <p>
          How Sick is my Baby? is not meant to replace your own judgement. You
          know your baby better than anyone. If your baby’s total score is low
          but you are still worried, ask your health visitor, midwife or doctor
          for advice.
        </p>
        <h2>If you think your baby is getting worse:</h2>
        <p>Do the questions again and follow the result advice.</p>
        <h2>If you think your baby is seriously ill:</h2>
        <p>
          Phone your doctor. If you get an answerphone message, call the number
          given on the message or call NHS 111. If you can’t make a phone call,
          take your baby to the Accident and Emergency (Casualty) Department at
          the nearest hospital which deals with children.
        </p>
        <h2 className={styles.alert}>
          If you think your baby’s life is in danger:
        </h2>
        <h3 className={styles.alert}>
          Telephone 999. Ask for the ambulance service and say it is for a baby.
          You do not need to pay for any 999 calls (so they can be made from
          mobile phones without any credit).
        </h3>
        <p>
          Very, very rarely babies die suddenly with no signs of illness. How
          Sick is my Baby? is not designed to pick out such babies. How Sick is
          my Baby? is a guide to help you decide how well your baby is. Although
          it is accurate most of the time, its advice cannot be guaranteed. If
          you are still worried about your baby, consult a doctor.
        </p>
      </div>
    </>
  );
};
