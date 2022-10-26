import Head from "next/head";

const Meta = ({ title, keywords, description, image }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && (
        <>
          <meta name="twitter:image" content={image} />
          <meta name="twitter:card" content="summary_large_image" />
        </>
      )}
      <title>
        {title.includes("Fiezt") ? title : title.concat(" | Fiezt")}
      </title>
    </Head>
  );
};

export default Meta;
