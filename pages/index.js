import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import DapiScript from '../components/Dapi';

export default function Home() {
  const [dapiHandle, setDapiHandle] = useState(null);

  useEffect(() => {
    const handle = Dapi.create({
      environment: Dapi.environments.sandbox,
      appKey: process.env.NEXT_PUBLIC_DAPI_APP_KEY,
      countries: ['AE'],
      isExperimental: true,
      onSuccess: function (meta_data) {
        //This is the callback function when the end-user connects succesfully
        /**
         * meta_data contains all the keys required in order to talk to dapi api.
         * meta_data = {
         *  connectionID: "YOUR_CONNECTION_ID",
         *  userSecret: "YOUR_USER_SECRET",
         *  accessCode: "YOUR_ACCESS_CODE"
         * }
         **/
        console.log('Successfully connected');
        console.log(meta_data);
      },
      onFailure: function (err) {
        //This is the callback function when the end-user is unable to connect succesfully
        if (err != null) {
          console.log('Error');
          console.log(err);
        } else {
          console.log('No error');
        }
      },
    });

    setDapiHandle(handle);
  }, []);

  const handleClick = () => {
    dapiHandle.open();
  };

  return (
    <div className={styles.container}>
      <h1>Dapi Next.js Example</h1>
      <div>Use this simple API to enable no-fee payments on your app!</div>
      <button className={styles.button} onClick={handleClick}>
        Connect Your Bank Account
      </button>
      <DapiScript />
    </div>
  );
}
