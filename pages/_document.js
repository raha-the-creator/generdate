import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Add your custom font links here */}
          <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&family=Roboto+Mono:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
