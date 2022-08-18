import NextLink from 'next/link';
import { Box, Heading, Center, Link, Text, Flex, Image, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react";

import EntryButton from '../../components/entryButton';

export default function Recruit() {
    return (
        <main>
            <Box as="section" h='56rem' position='relative' background='url(/recruit/kv_bg.jpg) no-repeat center center/cover'>
                <Heading className="hansans" color='white' fontSize='6.8rem' position='absolute' top='50%' left='24rem' transform='translate(0, -50%)'
                    _before={{position: 'absolute', content: '""', top: '50%', left: '50%', width: '36rem', height: '38rem', transform: 'translate(-50%, -40%)', blendMode: 'screen', zIndex: '-1',  background: 'url(/company/kv_txt.svg) no-repeat center center/contain'}}>
                    RECRUIT
                </Heading>
            </Box>

            <Box as='section'>
                <Center flexDirection='column' w='66.66%' m='0 auto -11.2rem' p='3.2rem 0 8.8rem' background='white' boxShadow='0 .3rem .6rem rgba(0,0,0,16%)' transform='translateY(-11.2rem)'>
                    <Heading as='h2' className="hansans" w='36.8rem' pb='1.6rem' mb='5.6rem' color='#2B519B' textAlign='center' fontSize='3.6rem' borderBottom='solid .1rem #A9A9A9'>
                        現在募集中の職種
                    </Heading>

                    <Box w='67.6rem'>
                        <NextLink href='#recruit01'  passHref>
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

                        <NextLink href='#recruit02'  passHref>
                            <Link w='100%' h='15rem' display='flex' justifyContent='flex-start' alignItems='stretch' boxShadow='0 .3rem .6rem rgba(0, 0, 0, 16%)'
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
                </Center>

                <Box id='recruit01' w='66.66%' m='auto' pt='3rem'>
                    <Flex justify='space-between' align='center' mb='3.6rem'>
                        <Center flexDirection='column' w='50%' h='34rem' background='url(/recruit/recruit01_bg.jpg) no-repeat center center/cover' p='3.6rem 4.8rem' position='relative'
                            _before={{position: 'absolute', content: '""', w: 'calc(100% - 4.8rem)', h: 'calc(100% - 3.6rem)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', border: 'solid .2rem white'}}>
                            <Image src='/recruit/recruit01.svg' alt='Webクリエイター' w='6.4rem'/>
                            <Heading as='h3' fontSize='3.2rem' color='white' mt='1.6rem'>
                                Webクリエイター
                            </Heading>
                        </Center>
                        <Text fontSize='2.4rem' textAlign='center' ml='1rem'>
                            未経験歓迎！WEB動画の撮影・WEBデザイン！<br/>
                            業界高水準の収入を得る人材にイチから成長できます！<br/>
                            一緒に成長できる環境でゼロからステップアップを♪
                        </Text>
                    </Flex>

                    <Accordion defaultIndex={[0]} allowToggle mb='7.2rem'>
                        <AccordionItem borderTop='solid .2rem #2B519B' borderBottom='solid .2rem #2B519B'>
                            <Heading as='h4'>
                                <AccordionButton border='none' background='#E2FAFF'>
                                    <Box flex='1' textAlign='left' p='2.4rem 3.6rem' fontSize='2.4rem' color='#3B4043'>
                                        応募要項
                                    </Box>
                                    <AccordionIcon w='3.2rem' h='3.2rem' color='#98A6B5'/>
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel>
                                <Box borderTop='solid .2rem #707070' borderBottom='solid .2rem #707070'>
                                    <Heading as='h5' fontSize='2rem' color='#2B519B' p='2.4rem 0' borderBottom='solid .1rem #707070'>
                                        仕事内容
                                    </Heading>
                                    <Text color='#243452' p='1.6rem 0 6.4rem'>
                                        ◆Web動画の撮影・制作 ◆YouTube動画の撮影・制作 ◆動画用のCG制作（エフェクトなど）◆WEBデザイン・編集
                                    </Text>
                                </Box>

                                <Box borderBottom='solid .2rem #707070'>
                                    <Heading as='h5' fontSize='2rem' color='#2B519B' p='2.4rem 0' borderBottom='solid .1rem #707070'>
                                        雇用形態
                                    </Heading>
                                    <Text color='#243452' p='1.6rem 0 6.4rem'>
                                        正社員
                                    </Text>
                                </Box>

                                <Box borderBottom='solid .2rem #707070'>
                                    <Heading as='h5' fontSize='2rem' color='#2B519B' p='2.4rem 0' borderBottom='solid .1rem #707070'>
                                        就業時間
                                    </Heading>
                                    <Text color='#243452' p='1.6rem 0 6.4rem'>
                                        10：00～19：00 （所定労働時間8時間　休憩60分）
                                    </Text>
                                </Box>

                                <Box borderBottom='solid .2rem #707070'>
                                    <Heading as='h5' fontSize='2rem' color='#2B519B' p='2.4rem 0' borderBottom='solid .1rem #707070'>
                                        就業場所
                                    </Heading>
                                    <Text color='#243452' p='1.6rem 0 6.4rem'>
                                        東京都（浜松町または渋谷または新宿）<br/>
                                        ＊都心部に拠点多数あり
                                    </Text>
                                </Box>

                                <Box>
                                    <Heading as='h5' fontSize='2rem' color='#2B519B' p='2.4rem 0' borderBottom='solid .1rem #707070'>
                                        給与
                                    </Heading>
                                    <Text color='#243452' p='1.6rem 0 6.4rem'>
                                        月給 200,000円〜<br/>
                                        ※経験・スキルを考慮して決定いたします。<br/>
                                        <br/>
                                        〇手当<br/>
                                        ・交通費支給<br/>
                                        ・残業代支給<br/>
                                        <br/>
                                        〇昇給<br/>
                                        ・年に１回<br/>
                                        <br/>
                                        〇年収例<br/>
                                        400万円/入社2年目/20代（月給約33万円）<br/>
                                        500万円/入社3年目/20代（月給約45万円）<br/>
                                        <br/>
                                        〇試用期間<br/>
                                        6カ月以上<br/>
                                        ※雇用形態は契約社員となりますが労働条件は本採用と同じです。
                                    </Text>
                                </Box>

                                <Center mb='7.2rem'>
                                    <EntryButton path='/contact' txt='応募する'/>
                                </Center>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem borderBottom='solid .2rem #2B519B'>
                            <Heading as='h4'>
                                <AccordionButton border='none' background='#D3F1FF'>
                                    <Box flex='1' textAlign='left' p='2.4rem 3.6rem' fontSize='2.4rem' color='#3B4043'>
                                        待遇・研修内容
                                    </Box>
                                    <AccordionIcon w='3.2rem' h='3.2rem' color='#98A6B5'/>
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel>
                                <Box borderTop='solid .2rem #707070' borderBottom='solid .2rem #707070'>
                                    <Heading as='h5' fontSize='2rem' color='#2B519B' p='2.4rem 0' borderBottom='solid .1rem #707070'>
                                        休日・休暇
                                    </Heading>
                                    <Text color='#243452' p='1.6rem 0 6.4rem'>
                                        土日祝休み
                                    </Text>
                                </Box>

                                <Box borderBottom='solid .2rem #707070'>
                                    <Heading as='h5' fontSize='2rem' color='#2B519B' p='2.4rem 0' borderBottom='solid .1rem #707070'>
                                        待遇
                                    </Heading>
                                    <Text color='#243452' p='1.6rem 0 6.4rem'>
                                        ・交通費支給<br/>
                                        ・残業代支給<br/>
                                        ・年に１回昇給
                                    </Text>
                                </Box>

                                <Box>
                                    <Heading as='h5' fontSize='2rem' color='#2B519B' p='2.4rem 0' borderBottom='solid .1rem #707070'>
                                        研修内容
                                    </Heading>
                                    <Text color='#243452' p='1.6rem 0 6.4rem'>
                                        【STEP1】<br/>
                                        動画の撮影方法や制作の研修 デザインの業務に使うIllustrator、Photoshopの研修からスタート<br/>
                                        特に最初は不安かと思いますが、一人ひとりに合わせて 研修を行っていきますのでご安心ください！<br/>
                                        <br/>
                                        【STEP2】<br/>
                                        動画制作に必要なツール操作の研修 Unity/Affter Effectsのツールの操作方法や理解度を高める研修を行います。<br/>
                                        横文字が多く難しそうと感じるかもしれませんが、やってみれば意外とスムーズに理解をする事が出来ます！ <br/>
                                        <br/>
                                        【STEP3】<br/>
                                        映像制作研修今まで研修で培ったスキルを用いて作品を作り上げる実践の研修を実施！<br/>
                                        実際に映画や遊技機に使える動画を作成していくので、非常に楽しく実感が湧くと思います。<br/>
                                        上記研修後は、実際にプロジェクトへ参画し制作業務に従事して頂きます！
                                    </Text>
                                </Box>

                                <Center mb='7.2rem'>
                                    <EntryButton path='/contact' txt='応募する'/>
                                </Center>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem borderBottom='solid .2rem #2B519B'>
                            <Heading as='h4'>
                                <AccordionButton border='none' background='#B6E8FF'>
                                    <Box flex='1' textAlign='left' p='2.4rem 3.6rem' fontSize='2.4rem' color='#3B4043'>
                                        アピールポイント
                                    </Box>
                                    <AccordionIcon w='3.2rem' h='3.2rem' color='#98A6B5'/>
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel>
                                <Box borderTop='solid .2rem #707070'>
                                    <Heading as='h5' fontSize='2rem' color='#2B519B' p='2.4rem 0' borderBottom='solid .1rem #707070'>
                                        アピールポイント
                                    </Heading>
                                    <Text color='#243452' p='1.6rem 0 6.4rem'>
                                        ・未経験からデザイナーとして成長したい！ 動画制作の仕事をしてみたい！ <br/>
                                        作品を世に送り出したい！ 当社はあなたのその「やってみたい」 という熱い想いを全力でバックアップします！ <br/>
                                        『PCの電源の付け方がわからない』 そんなレベルの方でも問題ナシ。 入社前にスキルチェックを実施して あなたに合わせた研修をご用意します。 <br/>
                                        <br/>
                                        自信とスキルを手に入れて 憧れの仕事にチャレンジしていきましょう！
                                    </Text>
                                </Box>

                                <Center mb='5.6rem'>
                                    <EntryButton path='/contact' txt='応募する'/>
                                </Center>

                                <Box borderTop='solid .2rem #707070'>
                                    <Heading as='h5' fontSize='2rem' color='#2B519B' p='2.4rem 0' borderBottom='solid .1rem #707070'>
                                        先輩インタビュー
                                    </Heading>
                                    <Flex m='3.6rem auto 9.6rem'>
                                        <Box w='50%'>
                                            <Box w='88.75%' pb='3.2rem' mb='2.8rem' position='relative'>
                                                <Image src='/recruit/interview01.jpg' alt='社員インタビュー' w='100%'/>
                                                <Center w='55%' p='1.6rem 0' color='white' fontSize='2.3rem' position='absolute' bottom='0' left='0' background='linear-gradient(to left, #55E1FF, #2B519B)'>
                                                    Tさん(20代男性)
                                                </Center>
                                            </Box>

                                            <Text>
                                                飲食店から未経験で当社に入社したので、<br/>
                                                今から挑戦しようと考えている方々の不安な気持ちも<br/>
                                                良くわかります。<br/>
                                                当社では「基礎中の基礎」から丁寧に教えてくれます。<br/>
                                                そんな環境なので不安もスグに払拭できますよ！
                                            </Text>
                                        </Box>

                                        <Box w='50%'>
                                            <Box w='88.75%' pb='3.2rem' mb='2.8rem' position='relative'>
                                                <Image src='/recruit/interview01.jpg' alt='社員インタビュー' w='100%'/>
                                                <Center w='55%' p='1.6rem 0' color='white' fontSize='2.3rem' position='absolute' bottom='0' left='0' background='linear-gradient(to left, #55E1FF, #2B519B)'>
                                                    Iさん(20代女性)
                                                </Center>
                                            </Box>

                                            <Text>
                                                動画鑑賞が趣味で、いつか作る側に立ち、誰かに見てもらえる作品を作ってみたいという想いを抱いていましたがスキルもなく挑戦することを諦めていました。<br/>
                                                当社を知り、もう迷うことなくスグに応募しました。
                                            </Text>
                                        </Box>
                                    </Flex>
                                </Box>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                    <Center mb='5.6rem'>
                        <EntryButton path='/contact' txt='応募する'/>
                    </Center>
                </Box>

                {/* creater */}
                <Box id='recruit02' w='66.66%' m='auto' pt='3rem'>
                    <Flex direction='row-reverse' justify='space-between' align='center' mb='3.6rem'>
                        <Center flexDirection='column' w='50%' h='34rem' background='url(/recruit/recruit02_bg.jpg) no-repeat center center/cover' p='3.6rem 4.8rem' position='relative'
                            _before={{position: 'absolute', content: '""', w: 'calc(100% - 4.8rem)', h: 'calc(100% - 3.6rem)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', border: 'solid .2rem white'}}>
                            <Image src='/recruit/recruit02.svg' alt='Webクリエイター' w='6.4rem'/>
                            <Heading as='h3' fontSize='3.2rem' color='white' textAlign='center' mt='1.6rem'>
                                映像クリエイター<br/>
                                ゲームCG・エフェクトデザイナー
                            </Heading>
                        </Center>
                        <Text fontSize='2.4rem' textAlign='center' mr='1rem'>
                            ゼロから映像制作・CG制作にチャレンジ！<br/>
                            未経験者でも、<br/>
                            しっかりとした研修でスキルを身に付けられます。<br/>
                            IT業界に興味がある方、<br/>
                            映像制作の仕事がしたい方大歓迎です！
                        </Text>
                    </Flex>

                    <Accordion defaultIndex={[0]} allowToggle mb='7.2rem'>
                        <AccordionItem borderTop='solid .2rem #2B519B' borderBottom='solid .2rem #2B519B'>
                            <Heading as='h4'>
                                <AccordionButton border='none' background='#E2FAFF'>
                                    <Box flex='1' textAlign='left' p='2.4rem 3.6rem' fontSize='2.4rem' color='#3B4043'>
                                        応募要項
                                    </Box>
                                    <AccordionIcon w='3.2rem' h='3.2rem' color='#98A6B5'/>
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel>
                                <Box borderTop='solid .2rem #707070' borderBottom='solid .2rem #707070'>
                                    <Heading as='h5' fontSize='2rem' color='#2B519B' p='2.4rem 0' borderBottom='solid .1rem #707070'>
                                        仕事内容
                                    </Heading>
                                    <Text color='#243452' p='1.6rem 0 6.4rem'>
                                        ◆Web動画の撮影・制作 ◆YouTube動画の撮影・制作 ◆動画用のCG制作（エフェクトなど）◆WEBデザイン・編集
                                    </Text>
                                </Box>

                                <Box borderBottom='solid .2rem #707070'>
                                    <Heading as='h5' fontSize='2rem' color='#2B519B' p='2.4rem 0' borderBottom='solid .1rem #707070'>
                                        雇用形態
                                    </Heading>
                                    <Text color='#243452' p='1.6rem 0 6.4rem'>
                                        正社員
                                    </Text>
                                </Box>

                                <Box borderBottom='solid .2rem #707070'>
                                    <Heading as='h5' fontSize='2rem' color='#2B519B' p='2.4rem 0' borderBottom='solid .1rem #707070'>
                                        就業時間
                                    </Heading>
                                    <Text color='#243452' p='1.6rem 0 6.4rem'>
                                        10：00～19：00 （所定労働時間8時間　休憩60分）
                                    </Text>
                                </Box>

                                <Box borderBottom='solid .2rem #707070'>
                                    <Heading as='h5' fontSize='2rem' color='#2B519B' p='2.4rem 0' borderBottom='solid .1rem #707070'>
                                        就業場所
                                    </Heading>
                                    <Text color='#243452' p='1.6rem 0 6.4rem'>
                                        東京都（浜松町または渋谷または新宿）<br/>
                                        ＊都心部に拠点多数あり
                                    </Text>
                                </Box>

                                <Box>
                                    <Heading as='h5' fontSize='2rem' color='#2B519B' p='2.4rem 0' borderBottom='solid .1rem #707070'>
                                        給与
                                    </Heading>
                                    <Text color='#243452' p='1.6rem 0 6.4rem'>
                                        月給 200,000円〜<br/>
                                        ※経験・スキルを考慮して決定いたします。<br/>
                                        <br/>
                                        〇手当<br/>
                                        ・交通費支給<br/>
                                        ・残業代支給<br/>
                                        <br/>
                                        〇昇給<br/>
                                        ・年に１回<br/>
                                        <br/>
                                        〇年収例<br/>
                                        400万円/入社2年目/20代（月給約33万円）<br/>
                                        500万円/入社3年目/20代（月給約45万円）<br/>
                                        <br/>
                                        〇試用期間<br/>
                                        6カ月以上<br/>
                                        ※雇用形態は契約社員となりますが労働条件は本採用と同じです。
                                    </Text>
                                </Box>

                                <Center mb='7.2rem'>
                                    <EntryButton path='/contact' txt='応募する'/>
                                </Center>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem borderBottom='solid .2rem #2B519B'>
                            <Heading as='h4'>
                                <AccordionButton border='none' background='#D3F1FF'>
                                    <Box flex='1' textAlign='left' p='2.4rem 3.6rem' fontSize='2.4rem' color='#3B4043'>
                                        待遇・研修内容
                                    </Box>
                                    <AccordionIcon w='3.2rem' h='3.2rem' color='#98A6B5'/>
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel>
                                <Box borderTop='solid .2rem #707070' borderBottom='solid .2rem #707070'>
                                    <Heading as='h5' fontSize='2rem' color='#2B519B' p='2.4rem 0' borderBottom='solid .1rem #707070'>
                                        休日・休暇
                                    </Heading>
                                    <Text color='#243452' p='1.6rem 0 6.4rem'>
                                        土日祝休み
                                    </Text>
                                </Box>

                                <Box borderBottom='solid .2rem #707070'>
                                    <Heading as='h5' fontSize='2rem' color='#2B519B' p='2.4rem 0' borderBottom='solid .1rem #707070'>
                                        待遇
                                    </Heading>
                                    <Text color='#243452' p='1.6rem 0 6.4rem'>
                                        ・交通費支給<br/>
                                        ・残業代支給<br/>
                                        ・年に１回昇給
                                    </Text>
                                </Box>

                                <Box>
                                    <Heading as='h5' fontSize='2rem' color='#2B519B' p='2.4rem 0' borderBottom='solid .1rem #707070'>
                                        研修内容
                                    </Heading>
                                    <Text color='#243452' p='1.6rem 0 6.4rem'>
                                        【STEP1】<br/>
                                        パソコンの基礎を学ぶ課題からまずはスタートして頂きます。<br/>
                                        特に最初は不安かと思いますが、不安な点があればすぐにサポーターや先輩に相談ができて安心！ <br/>
                                        <br/>
                                        【STEP2】<br/>
                                        動画制作に必要なツール操作の研修 Unity/Affter Effectsのツールの操作方法や理解度を高める研修を行います。<br/>
                                        横文字が多く難しそうと感じるかもしれませんが、やってみれば意外とスムーズに理解をする事が出来ます！ <br/>
                                        <br/>
                                        【STEP3】<br/>
                                        映像制作研修今まで研修で培ったスキルを用いて作品を作り上げる実践の研修を実施！<br/>
                                        実際に映画や遊技機に使える動画を作成していくので、非常に楽しく実感が湧くと思います。<br/>
                                        上記研修後は、実際にプロジェクトへ参画し制作業務に従事して頂きます！
                                    </Text>
                                </Box>

                                <Center mb='7.2rem'>
                                    <EntryButton path='/contact' txt='応募する'/>
                                </Center>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem borderBottom='solid .2rem #2B519B'>
                            <Heading as='h4'>
                                <AccordionButton border='none' background='#B6E8FF'>
                                    <Box flex='1' textAlign='left' p='2.4rem 3.6rem' fontSize='2.4rem' color='#3B4043'>
                                        アピールポイント
                                    </Box>
                                    <AccordionIcon w='3.2rem' h='3.2rem' color='#98A6B5'/>
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel>
                                <Box borderTop='solid .2rem #707070'>
                                    <Heading as='h5' fontSize='2rem' color='#2B519B' p='2.4rem 0' borderBottom='solid .1rem #707070'>
                                        アピールポイント
                                    </Heading>
                                    <Text color='#243452' p='1.6rem 0 6.4rem'>
                                        ・未経験から動画制作の仕事をしてみたい！ 作品を世に送り出したい！<br/>
                                        当社はあなたのその「やってみたい」 という熱い想いを全力でバックアップします！  <br/>
                                        詰め込むだけではなく実務に必要なスキルや感覚を身に付けられる”課題演習型”の研修です。 <br/>
                                        今、自信がない方でも大丈夫です！先輩がイチから丁寧に研修を行いますので安心してご応募ください。
                                    </Text>
                                </Box>

                                <Center mb='5.6rem'>
                                    <EntryButton path='/contact' txt='応募する'/>
                                </Center>

                                <Box borderTop='solid .2rem #707070'>
                                    <Heading as='h5' fontSize='2rem' color='#2B519B' p='2.4rem 0' borderBottom='solid .1rem #707070'>
                                        先輩インタビュー
                                    </Heading>
                                    <Flex m='3.6rem auto 9.6rem'>
                                        <Box w='50%'>
                                            <Box w='88.75%' pb='3.2rem' mb='2.8rem' position='relative'>
                                                <Image src='/recruit/interview03.jpg' alt='社員インタビュー' w='100%'/>
                                                <Center w='55%' p='1.6rem 0' color='white' fontSize='2.3rem' position='absolute' bottom='0' left='0' background='linear-gradient(to left, #55E1FF, #2B519B)'>
                                                    Kさん(20代男性)
                                                </Center>
                                            </Box>

                                            <Text>
                                                大好きなゲームのエフェクトが作れるという仕事<br/>
                                                ということだったので、応募しました。<br/>
                                                知らないことだらけで、研修についていくことで精一杯でしたが、<br/>
                                                頑張ったから今のスキルがあるんだなと思います。
                                            </Text>
                                        </Box>

                                        <Box w='50%'>
                                            <Box w='88.75%' pb='3.2rem' mb='2.8rem' position='relative'>
                                                <Image src='/recruit/interview04.jpg' alt='社員インタビュー' w='100%'/>
                                                <Center w='55%' p='1.6rem 0' color='white' fontSize='2.3rem' position='absolute' bottom='0' left='0' background='linear-gradient(to left, #55E1FF, #2B519B)'>
                                                    Oさん(20代女性)
                                                </Center>
                                            </Box>

                                            <Text>
                                                YouTubeやTikTokを見ることがもともと好きで、<br/>
                                                自分も作ってみたいと思い、この業界に入りました。<br/>
                                                流行を上手く映像にまとめるのは大変ですが、充実しています。
                                            </Text>
                                        </Box>
                                    </Flex>
                                </Box>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                    <Center mb='5.6rem'>
                        <EntryButton path='/contact' txt='応募する'/>
                    </Center>
                </Box>
            </Box>
        </main>
    );
}