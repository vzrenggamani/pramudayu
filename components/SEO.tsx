import Head from "next/head";
const siteUrl = "https://pramuka2wonoayu.my.id";

// create types from props

type SEOProps = {
  title: string;
  description: string;
  ogImgUrl?: string;
  ogUrl: string;
  ogImgAlt?: string;
  ogType?: string;
};

export default function SEO({
  title = "Portal Informasi Pramuka SMPN 2 Wonoayu",
  description = "Portal Informasi Pramuka SMPN 2 Wonoayu",
  ogImgUrl = `${siteUrl}/opengraph-main.png`,
  ogUrl = `${siteUrl}/`,
  ogImgAlt = "Portal Informasi Pramuka SMPN 2 Wonoayu",
  ogType = "website",
}: SEOProps) {
  return (
    <Head>
      <title key="title">{title}</title>
      <meta key="desc" name="description" content={description} />
      <meta key="ogurl" property="og:url" content={ogUrl} />
      <meta key="ogtype" property="og:type" content={ogType} />
      <meta key="ogtitle" property="og:title" content={title} />
      <meta key="ogdesc" property="og:description" content={description} />
      <meta key="ogimage" property="og:image" content={ogImgUrl} />
      <meta key="ogimagealt" property="og:image:alt" content={ogImgAlt} />
      <meta key="twttitle" name="twitter:title" content={title} />
      <meta key="twtdesc" name="twitter:description" content={description} />
      <meta key="twturl" name="twitter:url" content={ogUrl} />
      <meta key="twtimage" name="twitter:image:src" content={ogImgUrl} />
      <meta key="twtimagealt" name="twitter:image:alt" content={ogImgAlt} />
      <meta key="twtcreator" name="twitter:creator" content="@haloedtechid" />
      <meta key="twtsite" name="twitter:site" content="@haloedtechid" />
    </Head>
  );
}
