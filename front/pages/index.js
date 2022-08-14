import { Heading, Text, UnorderedList, ListItem, Box, Flex } from '@chakra-ui/react';

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

      <Box as='section'>
        <Flex>
          <Box></Box>

          <Box></Box>
        </Flex>

        <EntryButton txt='エントリーはこちら'/>
      </Box>

      <Heading as='h1' fontWeight='bold' m={0} fontSize='5rem'>Hello World</Heading>
      <Text m={0}>このHPは下記のツールでコーディングを行います。</Text>
      <UnorderedList m={0}>
        <ListItem>Next.js</ListItem>
        <ListItem>Chakra UI</ListItem>
        <ListItem>AOS.js</ListItem>
      </UnorderedList>
    </main>
  )
};