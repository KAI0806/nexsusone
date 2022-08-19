import '../styles/globals.css';
import Head from 'next/head'
import NextLink from 'next/link'
import { Flex, Heading, Image, Link, Center, Box, Text, } from '@chakra-ui/react';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>株式会社Nexsusone</title>
      </Head>

      <Flex as='header' justify='space-between' align='center' position='fixed' top='0' width='100%' height='10rem' zIndex={1000} background='white'>
        <Heading as='h1' ml='2rem'>
          <NextLink href='/' passHref>
            <Link verticalAlign='text-top' transition='all .2s ease-in-out' _hover={{opacity: '.7', transition: 'all .3s ease-in-out' }}>
              <Image className='logo' src='/common/logo.svg' alt='ロゴ' width='28rem' />
            </Link>
          </NextLink>
        </Heading>

        <Flex as='nav' className='pc_flex' justify='space-between' align='center' height='100%'>
          <NextLink href='/' passHref>
            <Link fontSize='2rem' mr='6rem' transition='all .2s ease-in-out' 
              _hover={{opacity: '.6', transition: 'all .3s ease-in-out'}}>HOME</Link>
          </NextLink>
          
          <NextLink href='/recruit' passHref>
            <Link fontSize='2rem' mr='6rem' transition='all .2s ease-in-out'
              _hover={{opacity: '.6', transition: 'all .3s ease-in-out'}}>採用情報</Link>
          </NextLink>

          <NextLink href='/company' passHref>
            <Link fontSize='2rem' mr='6rem' transition='all .2s ease-in-out' 
              _hover={{opacity: '.6', transition: 'all .3s ease-in-out'}}>会社情報</Link>
          </NextLink>

          <NextLink href='/service' passHref>
            <Link fontSize='2rem' mr='6rem' transition='all .2s ease-in-out' 
              _hover={{opacity: '.6', transition: 'all .3s ease-in-out'}}>事業内容</Link>
          </NextLink>
          
          <NextLink href='/contact' passHref>
            <Link fontSize='2rem' w='24rem' h='100%' background='linear-gradient(to right, #55E1FF, #2B519B)'
              _hover={{boxShadow: 'inset .3rem .3rem .6rem rgba(0, 0, 0, 30%)'}}>
              <Center height='100%' color='white'>お問い合わせ</Center>
            </Link>
          </NextLink>
        </Flex>

        <div id='hamburger' className='sp_only'>
          <span id='line1' className='inner_line'></span>
          <span id='line2' className='inner_line'></span>
          <span id='line3' className='inner_line'></span>
        </div>

        <nav id='nav' className='sp_only'>
          <div className='nav_wrap'>
            <Image src='/common/logo.svg' alt='ロゴ' width='21.6rem' margin='0 auto 4.4rem' display='block'/>

            <ul>
              <li><NextLink href="/" passHref><a>HOME</a></NextLink></li>
              <li><NextLink href="/recruit" passHref><a>採用情報</a></NextLink></li>
              <li><NextLink href="/service" passHref><a>事業内容</a></NextLink></li>
              <li><NextLink href="/company" passHref><a>会社情報</a></NextLink></li>
              <li><NextLink href="/contact" passHref><a>お問い合わせ</a></NextLink></li>
            </ul>
          </div>

          <div className='recruit'>
            <p>JOIN US</p>

            <p>
              Nexsusoneでは、<br/>
              新しいことに挑むことを恐れない心を持ち、<br/>
              次のステップに進みたいメンバーを求めています。
            </p>

            <NextLink href='/contact' passHref>
              <Link className='entry_button'>応募する</Link>
            </NextLink>
          </div>
        </nav>
      </Flex>

      <Component {...pageProps} />

      <Box as='footer'>
        <Flex className='wrap' borderBottom='.1rem solid #707070'>
          <Flex className='left' flexDirection='column' w='37.5%' p='4.8rem 0' justify='center' align='center' background='url(/common/footer_bg.jpg) no-repeat center center/cover'>
            <Center as='p' width='28rem' color='white' p='.5rem 0' mb='4.8rem' background='#A9A9A9'>JOIN US!</Center>
            
            <Text textAlign='center' color='white' lineHeight={2} mb='5.6rem'>
              Nexsusoneでは、<br/>
              共に働けるメンバーを募集しています。
            </Text>

            <NextLink href='/recruit' passHref>
              <Link className='entry_button'>エントリーはこちら</Link>
            </NextLink>
          </Flex>

          <Flex className='right' w='58%' pt='4.8rem' pl='3.2rem' justify='space-between' align='flex-start'>
            <Box className='recruit' width='36%'>
              <Center as='h3' w='28rem' color='white'fontSize='1.8rem' mb='4.8rem' p='.5rem' background='#A9A9A9'>最新求人</Center>

              <NextLink href='/recruit#recruit01' passHref>
                <Link
                  display='block' fontSize='1.8rem' pl='.5rem' pb='.95rem' mb='4.2rem' borderBottom='.1rem solid #707070' position='relative' transition='all .2s ease-in-out'
                  _before={{position: 'absolute', content: '""', width: '.6rem', height: '.6rem', borderRight: '.25rem solid #2B519B', borderBottom: '.25rem solid #2B519B', top: '50%', right: '0', transform: 'translate(-50%, -50%) rotateZ(-45deg)' }}
                  _hover={{color: ' #2B519B', borderBottom: '.1rem solid #2B519B', transition: 'all .2s ease-in-out' }} >
                  Webクリエイター
                </Link>
              </NextLink>
              <NextLink href='/recruit#recruit02' passHref>
                <Link 
                  display='block' fontSize='1.8rem' pl='.5rem' pb='.95rem' mb='4.2rem' borderBottom='.1rem solid #707070' position='relative' transition='all .2s ease-in-out'
                  _before={{position: 'absolute', content: '""', width: '.6rem', height: '.6rem', borderRight: '.25rem solid #2B519B', borderBottom: '.25rem solid #2B519B', top: '50%', right: '0', transform: 'translate(-50%, -50%) rotateZ(-45deg)' }}
                  _hover={{color: ' #2B519B', borderBottom: '.1rem solid #2B519B', transition: 'all .2s ease-in-out' }} >
                  映像クリエイター
                </Link>
              </NextLink>
            </Box>

            <Box>
              <NextLink href='/' passHref>
                <Link transition='all .2s ease-in-out' 
                  _hover={{opacity: '.7', transition: 'all .3s ease-in-out' }}>
                  <Image className='logo' src='/common/logo.svg' alt='ロゴ' width='40rem'  mb='2.4rem'/>
                </Link>
              </NextLink>

              <Text lineHeight={2} mb='5.6rem'>
                〒135-0064<br/>
                東京都江東区青海-7-4 theSOHO1106号室
              </Text>

              <Flex as='ul'>
                <NextLink href='/' passHref>
                  <Link fontSize='1.8rem' mr='6.4rem' transition='all .2s ease-in-out'
                      _hover={{opacity: '.6', transition: 'all .3s ease-in-out'}}>HOME</Link>
                </NextLink>

                <NextLink href='/recruit' passHref>
                  <Link fontSize='1.8rem' mr='6.4rem' transition='all .2s ease-in-out'
                      _hover={{opacity: '.6', transition: 'all .3s ease-in-out'}}>採用情報</Link>
                </NextLink>

                <NextLink href='/company' passHref>
                  <Link fontSize='1.8rem' mr='6.4rem' transition='all .2s ease-in-out'
                      _hover={{opacity: '.6', transition: 'all .3s ease-in-out'}}>会社情報</Link>
                </NextLink>

                <NextLink href='/service' passHref>
                  <Link fontSize='1.8rem' mr='6.4rem' transition='all .2s ease-in-out'
                      _hover={{opacity: '.6', transition: 'all .3s ease-in-out'}}>事業内容</Link>
                </NextLink>

                <NextLink href='/contact' passHref>
                  <Link fontSize='1.8rem' transition='all .2s ease-in-out'
                      _hover={{opacity: '.6', transition: 'all .3s ease-in-out'}}>お問い合わせ</Link>
                </NextLink>
              </Flex>
            </Box>
          </Flex>
        </Flex>

        <Center className='copy' padding='3.2rem 0' fontSize='1.6rem'>&copy; Copyright {getYear()} 株式会社Nexsusone</Center>
      </Box>
    </>
  )
}

if (typeof window === 'object') {
  function hamburger(){
    document.getElementById('line1').classList.toggle('line_1');
    document.getElementById('line2').classList.toggle('line_2');
    document.getElementById('line3').classList.toggle('line_3');
    document.getElementById('nav').classList.toggle('in');
  };
  document.getElementById('hamburger').addEventListener('click',function(){
    hamburger();
  });
  document.getElementById('nav').addEventListener('click',function(){
    hamburger();
  });
}

export default MyApp;

function getYear() {
  return new Date().getFullYear();
};
