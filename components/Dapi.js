import React from 'react';
import Head from 'next/head';

/*
 * Ensure to import ^v2 of the dapi script
 */
export default function Dapi() {
  return (
    <Head>
      <script
        type="text/javascript"
        src="https://cdn.dapi.co/connect/v2/connector.js"
      />
    </Head>
  );
}
