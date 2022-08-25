import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from 'next/script'

class MyDocument extends Document{
    render(){
        return(
            <Html lang="ja" prefix="og:http://ogp.me/ns# fb:http://ogp.me/ns/fb# website:http://ogp.me/ns/website#">
                <Head>
                    <Script id="gtm" strategy="afterInteractive" dangerouslySetInnerHTML={{
                        __html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-N6VV952');`,}}
                    />

                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>

                    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                    <link rel="manifest" href="/favicon/site.webmanifest" />
                    <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
                    <meta name="msapplication-TileColor" content="#2b5797"/>
                    <meta name="theme-color" content="#ffffff"></meta>

                    <meta name="description" content="株式会社Nexsusoneは、人材派遣事業・SES事業・クリエイター育成を初め、自分のゴールに向かって真摯に挑戦する人材を育てます。Nexsusoneも成長段階にいる会社で本気で「次のステップへ架け橋となる会社」として走り続けている会社になります。" />
                    <meta property="og:locale" content="ja_JP" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="株式会社Nexsusone｜公式ホームページ" />
                    <meta property="og:description" content="株式会社Nexsusoneは、人材派遣事業・SES事業・クリエイター育成を初め、自分のゴールに向かって真摯に挑戦する人材を育てます。Nexsusoneも成長段階にいる会社で本気で「次のステップへ架け橋となる会社」として走り続けている会社になります。" />
                    <meta property="og:url" content="index.html" />
                    <meta property="og:site_name" content="株式会社Nexsusone｜公式ホームページ" />
                    <meta property="og:image" content="https://nexsusone.com/common/OGP.jpg" />
                    <meta property="og:image:secure_url" content="https://nexsusone.com/common/OGP.jpg" />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:description" content="株式会社Nexsusoneは、人材派遣事業・SES事業・クリエイター育成を初め、自分のゴールに向かって真摯に挑戦する人材を育てます。Nexsusoneも成長段階にいる会社で本気で「次のステップへ架け橋となる会社」として走り続けている会社になります。" />
                    <meta name="twitter:title" content="株式会社Nexsusone｜公式ホームページ" />
                    <meta name="twitter:image" content="https://nexsusone.com/common/OGP.jpg" />

                    <Script id="formrun" src="https://sdk.form.run/js/v2/formrun.js" async/>

                    <Script id="adobeFonts" dangerouslySetInnerHTML={{ __html: `
                        (function(d) {
                            var config = {
                            kitId: 'kab6mfq',
                            scriptTimeout: 3000,
                            async: true
                            },
                            h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
                        })(document);
                    ` }} async/>
                </Head>
                
                <body>
                    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N6VV952"
                    height="0" width="0" style={{display: 'none',visibility: 'hidden'}}></iframe></noscript>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}
export default MyDocument;