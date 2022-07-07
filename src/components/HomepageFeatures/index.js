import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Ex Nihilo: Sequentia',
    description: (
      <>
        Ex Nihilo: Sequentia is a modern port of Ex Nihilo: Creatio for 1.12, which in turn was a fork of Ex Nihilo: Adscensio for 1.10, which was a continuation of Ex Nihilo for 1.7.10.
      </>
    ),
  },
  {
    title: 'Ex Nihilo: Sequentia - AE Addon',
    description: (
      <>
        Addon that adds all neccessary items for compatibility with Applied Energistics 2.
      </>
    ),
  },
  {
    title: 'Ex Nihilo: Sequentia - Mekanism Addon',
    description: (
      <>
        Addon that adds all neccessary items for compatibility with Mekanism.
      </>
    ),
  },
  {
    title: 'Ex Nihilo: Sequentia - Tinkers Addon',
    description: (
      <>
        Addon that adds all neccessary items for compatibility with Tinkers Construct.
      </>
    ),
  },
  {
    title: 'Ex Nihilo: Sequentia - Thermal Addon',
    description: (
      <>
        Addon that adds all neccessary items for compatibility with the Thermal Series.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <div style={{ textAlign: "center", paddingTop: 10 }}>
      <h2>Mods</h2>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
