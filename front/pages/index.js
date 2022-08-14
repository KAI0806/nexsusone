import NextLink from 'next/Link'
import { Heading, Text, UnorderedList, ListItem, Box, Flex, Center,Link } from '@chakra-ui/react';

import EntryButton from '../components/entryButton';

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
            
            <EntryButton txt='採用情報を見る'/>
          </Box>
        </Box>
      </Box>

      {/* recruit */}
      <Box as='section' pt='10.4rem' mb='8.8rem'>
        <Flex w='75%' m=' 0 auto 8.8rem' justify='center' align='center'>
          <Box w='50%'>
            <Heading as='h3' className='hansans' color='#2B519B' fontSize='3.6rem' mb='6.4rem'>
              １度切り開いた未来は<br/>
              次に進むための1つのステップです。
            </Heading>

            <Text lineHeight={2}>
              次のステップ、その先の幸せや成果に繋げるという意味を込めた「Next」と、<br/>
              各々がオンリーワン「One」になるという2つの意味を込めて<br/>
              Nexsusoneは誕生しました。<br/>
              やるからには、ここまでやるかと言われるくらい真正面に<br/>
              ぶつかってくるように頑張り、<br/>
              次のステップやその先の幸せや成果を得る道を目指しませんか？
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
              <NextLink href='/'  passHref>
                <Link w='100%' h='15rem' mb='1.6rem' display='flex' justifyContent='flex-start' alignItems='stretch' boxShadow='0 .3rem .6rem rgba(0, 0, 0, 16%)'
                  _hover={{boxShadow: 'inset .3rem .3rem .6rem rgba(0, 0, 0, 30%)'}}>
                  <Center w='22.5%' color='white' fontSize='2rem' background='url(/top/job_bg.jpg) no-repeat center center/cover'>
                    雇用形態
                  </Center>
                  <Flex w='77.5%' h='100%' pl='8rem' flexDirection='column' justify='center' position='relative'
                    _before={{position: 'absolute', content: '""', width: '1.5rem', height: '1.5rem', top: '50%', right: '2.8rem',  borderRight: '.5rem solid #2B519B', borderBottom: '.5rem solid #2B519B', transform: 'translate(-50%, -50%) rotateZ(-45deg)'}}>
                    <Heading as='h4' fontSize='2.4rem'>
                      職種名職種名職種名
                    </Heading>
                    <Text fontWeight='normal'>
                      勤務地:東京都港区
                    </Text>
                  </Flex>
                </Link>
              </NextLink>

              <NextLink href='/'  passHref>
                <Link w='100%' h='15rem' mb='1.6rem' display='flex' justifyContent='flex-start' alignItems='stretch' boxShadow='0 .3rem .6rem rgba(0, 0, 0, 16%)'
                  _hover={{boxShadow: 'inset .3rem .3rem .6rem rgba(0, 0, 0, 30%)'}}>
                  <Center w='22.5%' color='white' fontSize='2rem' background='url(/top/job_bg.jpg) no-repeat center center/cover'>
                    雇用形態
                  </Center>
                  <Flex w='77.5%' h='100%' pl='8rem' flexDirection='column' justify='center' position='relative'
                    _before={{position: 'absolute', content: '""', width: '1.5rem', height: '1.5rem', top: '50%', right: '2.8rem',  borderRight: '.5rem solid #2B519B', borderBottom: '.5rem solid #2B519B', transform: 'translate(-50%, -50%) rotateZ(-45deg)'}}>
                    <Heading as='h4' fontSize='2.4rem'>
                      職種名職種名職種名
                    </Heading>
                    <Text fontWeight='normal'>
                      勤務地:東京都港区
                    </Text>
                  </Flex>
                </Link>
              </NextLink>

              <NextLink href='/'  passHref>
                <Link w='100%' h='15rem' display='flex' justifyContent='flex-start' alignItems='stretch' boxShadow='0 .3rem .6rem rgba(0, 0, 0, 16%)'
                  _hover={{boxShadow: 'inset .3rem .3rem .6rem rgba(0, 0, 0, 30%)'}}>
                  <Center w='22.5%' color='white' fontSize='2rem' background='url(/top/job_bg.jpg) no-repeat center center/cover'>
                    雇用形態
                  </Center>
                  <Flex w='77.5%' h='100%' pl='8rem' flexDirection='column' justify='center' position='relative'
                    _before={{position: 'absolute', content: '""', width: '1.5rem', height: '1.5rem', top: '50%', right: '2.8rem',  borderRight: '.5rem solid #2B519B', borderBottom: '.5rem solid #2B519B', transform: 'translate(-50%, -50%) rotateZ(-45deg)'}}>
                    <Heading as='h4' fontSize='2.4rem'>
                      職種名職種名職種名
                    </Heading>
                    <Text fontWeight='normal'>
                      勤務地:東京都港区
                    </Text>
                  </Flex>
                </Link>
              </NextLink>
            </Box>
          </Box>
        </Flex>

        <Center>
          <EntryButton txt='エントリーはこちら'/>
        </Center>
      </Box>

      {/* about */}
      <Box as='section' p='10.8rem 0 8.8rem' background='url(/top/about_bg.jpg) no-repeat center center/cover'>
        <Box w='75%' m='auto'>
          <Heading as='h2' className='hansans' color='white' fontSize='3.6rem' mb='8.8rem'>
            Nexsusoneについて
          </Heading>

          <Text color='white' lineHeight={2.5} mb='12.8rem'>
            現在はWEBデザイナー、映像クリエイターなどの人材を育て、クライアントへご紹介しています。<br/>
            ゼロからスタートする未経験者でも、しっかり研修を受け、スキルを付けて、現場で活躍されている方はたくさんいます。<br/>
            弊社のサポートを最大限に活かして、次のステップへ進みませんか？
          </Text>

          <Flex justify='space-between' align='stretch'>
            <NextLink href='/' passHref>
              <Link className='aboutLink' fontSize='2.1rem' color='white' w='30%' textAlign='center' padding='8rem 0' border='solid .15rem white' position='relative' transition='all .2s ease-in-out'
                _before={{position: 'absolute', content: '""', width: '1rem', height: '1rem', top: '50%', right: '3.8rem',  borderRight: '.4rem solid white', borderBottom: '.4rem solid white', transform: 'translate(-50%, -50%) rotateZ(-45deg)', transition:'all .2s ease-in-out'}}
                _hover={{color: '#2B519B', background: 'white', transition:'all .3s ease-in-out'}}>
                代表メッセージ
              </Link>
            </NextLink>

            <NextLink href='/' passHref>
              <Link className='aboutLink' fontSize='2.1rem' color='white' w='30%' textAlign='center' padding='8rem 0' border='solid .15rem white' position='relative' transition='all .2s ease-in-out'
                _before={{position: 'absolute', content: '""', width: '1rem', height: '1rem', top: '50%', right: '3.8rem',  borderRight: '.4rem solid white', borderBottom: '.4rem solid white', transform: 'translate(-50%, -50%) rotateZ(-45deg)', transition:'all .2s ease-in-out'}}
                _hover={{color: '#2B519B', background: 'white', transition:'all .3s ease-in-out'}}>
                私たちの働き方
              </Link>
            </NextLink>

            <NextLink href='/' passHref>
              <Link className='aboutLink' fontSize='2.1rem' color='white' w='30%' textAlign='center' padding='8rem 0' border='solid .15rem white' position='relative' transition='all .2s ease-in-out'
                _before={{position: 'absolute', content: '""', width: '1rem', height: '1rem', top: '50%', right: '3.8rem',  borderRight: '.4rem solid white', borderBottom: '.4rem solid white', transform: 'translate(-50%, -50%) rotateZ(-45deg)', transition:'all .2s ease-in-out'}}
                _hover={{color: '#2B519B', background: 'white', transition:'all .3s ease-in-out'}}>
                会社情報
              </Link>
            </NextLink>
          </Flex>
        </Box>
      </Box>
    </main>
  )
};