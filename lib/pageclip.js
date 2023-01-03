import fetcher from "./fetcher";

const siteKey =
  process.env.PAGECLIP_SITE_KEY || "Q9L9ey7vrkqctJCSSJT9vVRWwBzwFwTX";
const formName = process.env.PAGECLIP_FORM_NAME || "contact-form";

const submitEndpoint = `https://send.pageclip.co/${siteKey}/${formName}`;


