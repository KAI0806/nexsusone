import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function Company() {
    return (
        <main>
            <Box as="section" h='56rem' position='relative' background='url(/company/kv_bg.jpg) no-repeat center center/cover'>
                <Heading className="hansans" color='white' fontSize='6.8rem' position='absolute' top='50%' left='24rem' transform='translate(0, -50%)'
                    _before={{position: 'absolute', content: '""', top: '50%', left: '50%', width: '36rem', height: '38rem', transform: 'translate(-50%, -40%)', blendMode: 'screen', zIndex: '-1',  background: 'url(/company/kv_txt.svg) no-repeat center center/contain'}}>
                    COMPANY
                </Heading>
            </Box>

            {/* message */}
            <Box id="message" as="section">
                <Flex w='66.66%' m='0 auto' p='3.2rem 5.6rem 6.4rem' justify='center' align='center' direction='column' position='relative' zIndex={10} background='white' boxShadow='0 .3rem .6rem rgba(0,0,0,16%)' transform='translateY(-11.2rem)'>
                    <Center as='h2' className="hansans" w='36.8rem' pb='1.6rem' mb='4.2rem' color='#2B519B' fontSize='3.6rem' borderBottom='solid .1rem #A9A9A9'>
                        代表挨拶
                    </Center>
                    
                    <Flex w='100%' justify='center' align='center'>
                        <Image src="/company/sample.jpg" alt="代表取締役" width='44.52%' mr='6.4rem'/>

                        <Box w='50%'>
                            <Text mb='2.4rem' lineHeight={2.5}>
                                案件概要、どういう仕事か、等。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                            </Text>
                            <Text align='right'>代表取締役　佐々木 孝</Text>
                        </Box>
                    </Flex>
                </Flex>
            </Box>

            {/* about */}
            <Box id="about" as="section" p='5.6rem 0 8.8rem' background='url(/company/about_bg.jpg) no-repeat center center/cover'>
                <Flex w='66.66%' m='0 auto' justify='center' align='center' direction='column'>
                    <Center as="h2" className="hansans" w='19.2rem' color='white' fontSize='3.6rem' pb='1rem' mb='8rem' borderBottom='solid .1rem white'>
                        会社概要
                    </Center>

                    <Flex justifyContent='space-around' align='flex-start' w='100%'>
                        <Box w='35%'>
                            <Box borderBottom='.1rem solid white' pb='.8rem' mb='1.6rem'>
                                <Heading as='h3' fontSize='1.8rem' color='white' mb='.4rem'>
                                    会社名
                                </Heading>
                                <Text color='white'>
                                    株式会社Nexsusone
                                </Text>
                            </Box>

                            <Box borderBottom='.1rem solid white' pb='.8rem' mb='1.6rem'>
                                <Heading as='h3' fontSize='1.8rem' color='white' mb='.4rem'>
                                    代表名
                                </Heading>
                                <Text color='white'>
                                    佐々木 考
                                </Text>
                            </Box>

                            <Box borderBottom='.1rem solid white' pb='.8rem'>
                                <Heading as='h3' fontSize='1.8rem' color='white' mb='.4rem'>
                                    事業内容
                                </Heading>
                                <Text color='white'>
                                    ・人材派遣事業、人材紹介<br/>
                                    ・システム開発<br/>
                                    ・SES事業<br/>
                                    ・クリエイター育成<br/>
                                    ・コンサルティング事業
                                </Text>
                            </Box>
                        </Box>

                        <Box w='35%'>
                            <Box borderBottom='.1rem solid white' pb='.8rem' mb='1.6rem'>
                                <Heading as='h3' fontSize='1.8rem' color='white' mb='.4rem'>
                                    資本金
                                </Heading>
                                <Text color='white'>
                                    2000万円（資本準備金も含む）
                                </Text>
                            </Box>

                            <Box borderBottom='.1rem solid white' pb='.8rem' mb='1.6rem'>
                                <Heading as='h3' fontSize='1.8rem' color='white' mb='.4rem'>
                                    設立
                                </Heading>
                                <Text color='white'>
                                    2022年7月27日
                                </Text>
                            </Box>

                            <Box borderBottom='.1rem solid white' pb='.8rem'>
                                <Heading as='h3' fontSize='1.8rem' color='white' mb='.4rem'>
                                    所在地
                                </Heading>
                                <Text color='white'>
                                    〒135-0064<br/>
                                    東京都江東区青海2-7-4 theSOHO 1106号室
                                </Text>
                            </Box>
                        </Box>
                    </Flex>
                </Flex>
            </Box>
        </main>
    );
}