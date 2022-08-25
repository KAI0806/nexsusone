import NextLink from 'next/link'
import { Box, Heading, Flex, Text, Link, Image, Center } from "@chakra-ui/react";

import Slider from '../../components/Slider';
import styles from '../../styles/service.module.css'

export default function Service() {
    return (
        <main>
            <Box as="section" id={styles.kv} className="kv" h='56rem' position='relative' background='url(/service/kv_bg.jpg) no-repeat center center/cover'>
                <Heading className="hansans" color='white' fontSize='6.8rem' position='absolute' top='50%' left='24rem' transform='translate(0, -50%)'
                    _before={{position: 'absolute', content: '""', top: '50%', left: '50%', width: '36rem', height: '38rem', transform: 'translate(-50%, -40%)', blendMode: 'screen', zIndex: '-1',  background: 'url(/company/kv_txt.svg) no-repeat center center/contain'}}>
                    SERVICE
                </Heading>
            </Box>

            <Box as='section' id={styles.service}>
                <Center className={styles.wrap} flexDirection='column' w='66.66%' m='auto' p='3.2rem 8.8rem 5.6rem' boxShadow=' 0 .3rem .6rem rgba(0,0,0,16%)' background='white' transform='translateY(-11.2rem)'>
                    <Heading as='h2' className="hansans" color='#2B519B' fontSize='3.6rem' textAlign='center' w='36rem' pb='1.6rem' mb='4.8rem' borderBottom='solid .1rem #A9A9A9'>
                        事業内容
                    </Heading>
                    <Text mb='6.4rem'>
                        私たちは、<br className='sp_only'/>真摯に挑戦する人材を育て、<br className='sp_only'/>貴社ビジネスの成功に貢献します。
                    </Text>

                    <Flex w='100%' justify='space-between' align='stretch' mb='2.4rem'>
                        <NextLink href='#service01' passHref>
                            <Link fontSize='2rem' color='white' textAlign='center' w='30%' p='6.4rem 0'  background='#2B519B' position='relative' transition='all .2s ease-in-out'
                                _before={{content: '""', position: 'absolute', width: '1rem', height: '1rem', top: '50%', right: '3.2rem', transform: 'translateY(-50%) rotateZ(-45deg)', borderRight: '.5rem solid white', borderBottom: '.5rem solid white'}}
                                _hover={{opacity: '.7', transition: 'all .3s ease-in-out'}}>
                                人材派遣・人材紹介
                            </Link>
                        </NextLink>

                        <NextLink href='#service02' passHref>
                            <Link fontSize='2rem' color='white' textAlign='center' w='30%' p='6.4rem 0'  background='#2B519B' position='relative' transition='all .2s ease-in-out'
                                _before={{content: '""', position: 'absolute', width: '1rem', height: '1rem', top: '50%', right: '3.2rem', transform: 'translateY(-50%) rotateZ(-45deg)', borderRight: '.5rem solid white', borderBottom: '.5rem solid white'}}
                                _hover={{opacity: '.7', transition: 'all .3s ease-in-out'}}>
                                SES事業
                            </Link>
                        </NextLink>

                        <NextLink href='#service03' passHref>
                            <Link fontSize='2rem' color='white' textAlign='center' w='30%' p='6.4rem 0'  background='#2B519B' position='relative' transition='all .2s ease-in-out'
                                _before={{content: '""', position: 'absolute', width: '1rem', height: '1rem', top: '50%', right: '3.2rem', transform: 'translateY(-50%) rotateZ(-45deg)', borderRight: '.5rem solid white', borderBottom: '.5rem solid white'}}
                                _hover={{opacity: '.7', transition: 'all .3s ease-in-out'}}>
                                クリエイター育成
                            </Link>
                        </NextLink>
                    </Flex>

                    <Image className='pc_only' src='/service/service_img.jpg' alt='事業内容' w='100%'/>
                </Center>

                <Image src='/service/service_img_sp.jpg' alt='事業内容' className='sp_only' m='-6rem auto 0' w='85.33%'/>

                <Flex id='service01' className={styles.content} w='66.66%' m='-17.6rem auto 0' pt='17.6rem'>
                    <Center flexDirection='column' w='50%' h='34rem' background='url(/service/service01_bg.jpg) no-repeat center center/cover' p='3.6rem 4.8rem' position='relative'
                        _before={{position: 'absolute', content: '""', w: 'calc(100% - 4.8rem)', h: 'calc(100% - 3.6rem)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', border: 'solid .2rem white'}}>
                        <Image src='/service/service01.svg' alt='人材派遣・人材紹介' w='9rem'/>
                        <Heading as='h3' fontSize='3.8rem' color='white' mt='1.6rem'>人材派遣・人材紹介</Heading>
                    </Center>

                    <Center w='50%' pl='1rem' flexDirection='column'>
                        <Text align='center' mb='4.8rem'>
                            20代を中心とした、成長したい意欲が高い<br/>
                            若手人員が多く在籍しております。<br/>
                            また、常に安定した人数を確保することが<br/>
                            可能であることが、<br className='sp_only'/>私たちの最大の強みとも言えます。<br/>
                            <br/>
                            IT技術を要する専門職から<br className='sp_only'/>営業代行まで幅広く対応でき、<br/>
                            お客様の「人材不足解消」と更なる発展への<br className='sp_only'/>サポートが私たちの目的です。
                        </Text>

                        <NextLink href='/contact' passHref>
                            <Link className='entry_button'>お問い合わせ</Link>
                        </NextLink>
                    </Center>
                </Flex>

                <Flex id='service02' className={styles.content} w='66.66%' m='0 auto' pt='17.6rem' direction='row-reverse'>
                    <Center flexDirection='column' w='50%' h='34rem' background='url(/service/service02_bg.jpg) no-repeat center center/cover' p='3.6rem 4.8rem' position='relative'
                        _before={{position: 'absolute', content: '""', w: 'calc(100% - 4.8rem)', h: 'calc(100% - 3.6rem)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', border: 'solid .2rem white'}}>
                        <Image src='/service/service02.svg' alt='SES事業' w='8.8rem'/>
                        <Heading as='h3' fontSize='3.8rem' color='white' mt='1.6rem'>SES事業</Heading>
                    </Center>

                    <Center w='50%' flexDirection='column'>
                        <Text align='center' mb='4.8rem'>
                            システムエンジニアリングサービス（SES）は<br/>
                            技術力を求めている企業に向けて、<br/>
                            弊社でゼロから育成したプロ人員を<br className='sp_only'/>アテンドしていきます。<br/>
                            <br/>
                            お客様が必要とする人材を判断し<br className='sp_only'/>最適なご提案を致します。
                        </Text>

                        <NextLink href='/contact' passHref>
                            <Link className='entry_button'>お問い合わせ</Link>
                        </NextLink>
                    </Center>
                </Flex>

                <Flex id='service03' className={styles.content} w='66.66%' m='0 auto 14.7rem' pt='17.6rem'>
                    <Center flexDirection='column' w='50%' h='34rem' background='url(/service/service03_bg.jpg) no-repeat center center/cover' p='3.6rem 4.8rem' position='relative'
                        _before={{position: 'absolute', content: '""', w: 'calc(100% - 4.8rem)', h: 'calc(100% - 3.6rem)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', border: 'solid .2rem white'}}>
                        <Image src='/service/service03.svg' alt='クリエイター育成' w='8.8rem'/>
                        <Heading as='h3' fontSize='3.8rem' color='white' mt='1.6rem'>クリエイター育成</Heading>
                    </Center>

                    <Center w='50%' flexDirection='column'>
                        <Text align='center' mb='4.8rem'>
                            弊社では、未来ある20代若手人員の<br className='sp_only'/>クリエイター育成に力を入れています。<br/>
                            実際の現場に近い実技課題を通して未経験からでも<br/>
                            市場で通用するプロを創出しています。<br/>
                            <br/>
                            制作業界の20代若手が少ない市場課題に対して<br/>
                            クライアント様の未来も一緒に育てていきたいと<br className='sp_only'/>考えております。
                        </Text>

                        <NextLink href='/contact' passHref>
                            <Link className='entry_button'>お問い合わせ</Link>
                        </NextLink>
                    </Center>
                </Flex>
            </Box>

            <Slider/>
        </main>
    );
}