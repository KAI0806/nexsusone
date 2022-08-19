import NextLink from 'next/link'
import { Heading, Text, UnorderedList, ListItem, Box, Flex, Center,Link } from '@chakra-ui/react';

import EntryButton from '../components/EntryButton';
import Slider from '../components/Slider';

export default function Home() {
  return (
    <main>
      <Box as='section' h='calc(100vh - 10rem)' position='relative'
        _before={{position: 'absolute', content: '""', width: '100%', height: '100%', top: 0, background: 'url(/top/mv_bg.jpg) no-repeat center center/cover'}}
        _after={{position: 'absolute', content: '""', width: '100%', height: '100%', top: 0, background: 'url(/top/mv_cover.png) no-repeat center center/cover'}}>
        <Box w='100%' h='100%' position='relative' zIndex={10}
         _before={{position: 'absolute', content: '""', width: '100%', height: '100%', top: 0, background: 'url(/top/mv_fromt.png) no-repeat center center/cover'}}>
          <Box position='absolute' top='50%' right='15%' transform='translate(0, -40%)'>
            <Heading as='h2' fontSize='6.8rem' fontWeight='normal' fontFamily='a-otf-ud-reimin-pr6n, sans-serif' mb='7.2rem' position='relative'
            _before={{position: 'absolute', content: '""', width: '21rem', height: '.3rem', bottom: '20%', right: '4rem', transform: 'transelate(-100%, 50%)', background: 'linear-gradient(to left, #55E1FF, #2B519B)'}}>
              可能性の未来へ、<br/>
              突き進め
            </Heading>
            
            <EntryButton path='/recruit' txt='採用情報を見る'/>
          </Box>
        </Box>
      </Box>

      {/* recruit */}
      <Box as='section' pt='10.4rem' mb='8.8rem'>
        <Flex w='75%' m=' 0 auto 8.8rem' justify='center' align='center'>
          <Box w='50%'>
            <Heading as='h3' textAlign='center' className='hansans' color='#2B519B' fontSize='3.6rem' mb='6.4rem'>
              １度切り開いた
                <Box as='span' fontSize='4.3rem' m='0 3.2rem' background='linear-gradient(to left, #55E1FF, #2B519B)' backgroundClip='text' color='transparent'>
                  未来
                </Box>
              は<br/>
              次に進むための1つのステップです。
            </Heading>

            <Text align='center' lineHeight={2}>
              次の成功、次の幸運をつかむ、<br/>
              成果をあげる想いを込めた「Nexsus」に、<br/>
              各々がNo.1になるというゴールを込めて「Nexsusone」は誕生しました。<br/>
              <br/>
              未経験者でも、自分のゴールに向かって<br/>
              努力し挑戦し続ける人を私たちは応援します。
            </Text>
          </Box>

          <Box w='50%' padding='0 2.4rem'>
            <Center as='h2' w='28rem' p='.5rem 0' mb='2.4rem' color='white' background='#A9A9A9'>
              WANTED
            </Center>

            <Heading as='h3' mb='2.4rem' className='hansans' color='#2B519B' fontSize='2.8rem'>
              現在募集中の職種
            </Heading>

            <Box>
              <NextLink href='/recruit#recruit01'  passHref>
                <Link w='100%' h='15rem' mb='1.6rem' display='flex' justifyContent='flex-start' alignItems='stretch' boxShadow='0 .3rem .6rem rgba(0, 0, 0, 16%)'
                  _hover={{boxShadow: 'inset .3rem .3rem .6rem rgba(0, 0, 0, 30%)'}}>
                  <Center w='22.5%' color='white' fontSize='2rem' background='url(/top/job_bg.jpg) no-repeat center center/cover'>
                    正社員
                  </Center>
                  <Flex w='77.5%' h='100%' pl='8rem' flexDirection='column' justify='center' position='relative'
                    _before={{position: 'absolute', content: '""', width: '1.5rem', height: '1.5rem', top: '50%', right: '2.8rem',  borderRight: '.5rem solid #2B519B', borderBottom: '.5rem solid #2B519B', transform: 'translate(-50%, -50%) rotateZ(-45deg)'}}>
                    <Heading as='h4' fontSize='2.4rem'>
                      Webクリエイター
                    </Heading>
                    <Text fontWeight='normal'>
                      勤務地:東京都
                    </Text>
                  </Flex>
                </Link>
              </NextLink>

              <NextLink href='/recruit#recruit02'  passHref>
                <Link w='100%' h='15rem' mb='1.6rem' display='flex' justifyContent='flex-start' alignItems='stretch' boxShadow='0 .3rem .6rem rgba(0, 0, 0, 16%)'
                  _hover={{boxShadow: 'inset .3rem .3rem .6rem rgba(0, 0, 0, 30%)'}}>
                  <Center w='22.5%' color='white' fontSize='2rem' background='url(/top/job_bg.jpg) no-repeat center center/cover'>
                    正社員
                  </Center>
                  <Flex w='77.5%' h='100%' pl='8rem' flexDirection='column' justify='center' position='relative'
                    _before={{position: 'absolute', content: '""', width: '1.5rem', height: '1.5rem', top: '50%', right: '2.8rem',  borderRight: '.5rem solid #2B519B', borderBottom: '.5rem solid #2B519B', transform: 'translate(-50%, -50%) rotateZ(-45deg)'}}>
                    <Heading as='h4' fontSize='2.4rem'>
                      映像クリエイター
                    </Heading>
                    <Text fontWeight='normal'>
                      勤務地:東京都
                    </Text>
                  </Flex>
                </Link>
              </NextLink>
            </Box>
          </Box>
        </Flex>

        <Center>
          <EntryButton path='/contact' txt='エントリーはこちら'/>
        </Center>
      </Box>

      {/* about */}
      <Box as='section' p='10.8rem 0 8.8rem' background='url(/top/about_bg.jpg) no-repeat center center/cover'>
        <Box w='75%' m='auto'>
          <Heading as='h2' className='hansans' textAlign='center' color='white' fontSize='3.6rem' mb='8.8rem'>
            Nexsusoneについて
          </Heading>

          <Text align='center' color='white' lineHeight={2.5} mb='9.6rem'>
            現在はWEBデザイナーや映像クリエイターなどの人材を育てクライアントへご紹介しています。<br/>
            ゼロからスタートする未経験者でも、しっかり研修を受けスキルを身に付け、現在東京の現場で活躍されている人員が多く在籍しております。<br/>
            <br/>
            IT技術を要する専門職から営業代行まで幅広く対応できお客様の「人材不足解消」と更なる発展へのサポートを致します。
          </Text>

          <Flex justify='space-between' align='stretch'>
            <NextLink href='/company' passHref>
              <Link className='aboutLink' fontSize='2.1rem' color='white' w='30%' textAlign='center' padding='8rem 0' border='solid .15rem white' position='relative' transition='all .2s ease-in-out' boxShadow='0 .3rem .6rem #243452, inset 0 .3rem .6rem #243452'
                _before={{position: 'absolute', content: '""', width: '1rem', height: '1rem', top: '50%', right: '3.8rem',  borderRight: '.4rem solid white', borderBottom: '.4rem solid white', transform: 'translate(-50%, -50%) rotateZ(-45deg)', transition:'all .2s ease-in-out'}}
                _hover={{color: '#2B519B', background: 'white', transition:'all .3s ease-in-out'}}>
                代表メッセージ
              </Link>
            </NextLink>

            <NextLink href='/service' passHref>
              <Link className='aboutLink' fontSize='2.1rem' color='white' w='30%' textAlign='center' padding='8rem 0' border='solid .15rem white' position='relative' transition='all .2s ease-in-out' boxShadow='0 .3rem .6rem #243452, inset 0 .3rem .6rem #243452'
                _before={{position: 'absolute', content: '""', width: '1rem', height: '1rem', top: '50%', right: '3.8rem',  borderRight: '.4rem solid white', borderBottom: '.4rem solid white', transform: 'translate(-50%, -50%) rotateZ(-45deg)', transition:'all .2s ease-in-out'}}
                _hover={{color: '#2B519B', background: 'white', transition:'all .3s ease-in-out'}}>
                事業内容
              </Link>
            </NextLink>

            <NextLink href='/company#about' passHref>
              <Link className='aboutLink' fontSize='2.1rem' color='white' w='30%' textAlign='center' padding='8rem 0' border='solid .15rem white' position='relative' transition='all .2s ease-in-out' boxShadow='0 .3rem .6rem #243452, inset 0 .3rem .6rem #243452'
                _before={{position: 'absolute', content: '""', width: '1rem', height: '1rem', top: '50%', right: '3.8rem',  borderRight: '.4rem solid white', borderBottom: '.4rem solid white', transform: 'translate(-50%, -50%) rotateZ(-45deg)', transition:'all .2s ease-in-out'}}
                _hover={{color: '#2B519B', background: 'white', transition:'all .3s ease-in-out'}}>
                会社情報
              </Link>
            </NextLink>
          </Flex>
        </Box>
      </Box>

      <Slider/>
    </main>
  )
};