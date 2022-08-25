import { AspectRatio, Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";

import styles from '../../styles/company.module.css'

export default function Company() {
    return (
        <main>
            <Box as="section" id={styles.kv} className="kv" h='56rem' position='relative' background='url(/company/kv_bg.jpg) no-repeat center center/cover'>
                <Heading className="hansans" color='white' fontSize='6.8rem' position='absolute' top='50%' left='24rem' transform='translate(0, -50%)'
                    _before={{position: 'absolute', content: '""', top: '50%', left: '50%', width: '36rem', height: '38rem', transform: 'translate(-50%, -40%)', blendMode: 'screen', zIndex: '-1',  background: 'url(/company/kv_txt.svg) no-repeat center center/contain'}}>
                    COMPANY
                </Heading>
            </Box>

            {/* message */}
            <Box id="message" className={styles.message} as="section">
                <Flex className={styles.wrap} w='66.66%' m='0 auto -3rem' p='3.2rem 5.6rem 6.4rem' justify='center' align='center' direction='column' position='relative' zIndex={10} background='white' boxShadow='0 .3rem .6rem rgba(0,0,0,16%)' transform='translateY(-11.2rem)'>
                    <Center as='h2' className="hansans" w='36.8rem' pb='1.6rem' mb='4.2rem' color='#2B519B' fontSize='3.6rem' borderBottom='solid .1rem #A9A9A9'>
                        代表挨拶
                    </Center>
                    
                    <Flex className={styles.content} w='100%' justify='center' align='center'>
                        <Image src="/company/message.jpg" alt="代表取締役" width='44.52%' mr='6.4rem'/>

                        <Box w='50%'>
                            <Text align='center' mb='2.4rem' >
                                Nexsusoneが目指す理想の姿は<br/>
                                「次のステップ（未来）へ<br className="sp_only"/>架け橋となる会社」です。<br/>
                                人はそれぞれが様々な経験をして、<br className="sp_only"/>今に至ると思います。<br/>
                                <br/>
                                「次の成功や次の幸運をつかみたい」<br/>
                                成果に繋げていくことだけではなく<br/>
                                やるからには各々がNo.1になると<br/>
                                そういった熱い想いを持った人と<br className="sp_only"/>仕事をしていきたいです。<br/>
                                <br/>
                                私自身、<br className="sp_only"/>経営者として成長過程にいる中で、<br/>
                                毎日が挑戦と試行錯誤の連続です。<br/>
                                <br className="pc_only"/>
                                Nexsusoneも成長段階にいる会社で<br className="sp_only"/>本気で<br className="pc_only"/>
                                「次のステップへ架け橋となる会社」<br className="sp_only"/>として<br className="pc_only"/>
                                走り続けている会社になります。<br/><br className="sp_only"/>
                                だからこそ皆で創り上げ、<br className="sp_only"/>盛り上げていきたいと思っております。<br/>
                                私たちが目指す姿や、 成し遂げようと<br className="sp_only"/>していることを全員で共有し、<br/>
                                その実現に向けて協力していきます。
                            </Text>
                            <Text align='right'>代表取締役　佐々木 孝</Text>
                        </Box>
                    </Flex>
                </Flex>
            </Box>

            {/* about */}
            <Box id="about" className={styles.about} as="section" p='9.6rem 0 8.8rem' background='url(/company/about_bg.jpg) no-repeat center center/cover'>
                <Flex className={styles.wrap} w='66.66%' m='0 auto' justify='center' align='center' direction='column'>
                    <Center as="h2" className="hansans" w='19.2rem' color='white' fontSize='3.6rem' pb='1rem' mb='8rem' borderBottom='solid .1rem white'>
                        会社概要
                    </Center>

                    <Flex className={styles.content} justifyContent='space-around' align='flex-start' w='100%'>
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
                                    代表取締役
                                </Heading>
                                <Text color='white'>
                                    佐々木 孝
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
                                    東京都江東区青海2-7-4 <br className="sp_only"/>theSOHO 1106号室
                                </Text>
                            </Box>
                        </Box>
                    </Flex>
                </Flex>
            </Box>

            <AspectRatio className="pc_only" ratio={16/4}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12974.437555675633!2d139.77451488478488!3d35.6127007833635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889ffadd0e6fd%3A0x438e0175fbcc3e2d!2sthe%20SOHO%20Odaiba!5e0!3m2!1sja!2sjp!4v1660907558163!5m2!1sja!2sjp" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
            </AspectRatio>

            <AspectRatio className="sp_only" ratio={16/9}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12974.437555675633!2d139.77451488478488!3d35.6127007833635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889ffadd0e6fd%3A0x438e0175fbcc3e2d!2sthe%20SOHO%20Odaiba!5e0!3m2!1sja!2sjp!4v1660907558163!5m2!1sja!2sjp" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
            </AspectRatio>
        </main>
    );
}