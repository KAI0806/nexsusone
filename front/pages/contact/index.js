import { Box, Button, Center, Flex, Heading, Input, Select, Text, Textarea } from "@chakra-ui/react";

export default function Contact() {
    return (
        <main>
            <Box as="section" h='56rem' position='relative' background='url(/contact/kv_bg.jpg) no-repeat center center/cover'>
                <Heading className="hansans" color='white' fontSize='6.8rem' position='absolute' top='50%' left='24rem' transform='translate(0, -50%)'
                    _before={{position: 'absolute', content: '""', top: '50%', left: '50%', width: '36rem', height: '38rem', transform: 'translate(-50%, -40%)', blendMode: 'screen', zIndex: '-1',  background: 'url(/company/kv_txt.svg) no-repeat center center/contain'}}>
                    CONTACT
                </Heading>
            </Box>

            <Box as="section">
                <Center flexDirection='column' w='66.66%' m='0 auto -11.2rem' p='3.2rem 0 8.8rem' background='white' boxShadow='0 .3rem .6rem rgba(0,0,0,16%)' transform='translateY(-11.2rem)'>
                    <Heading as='h2' className="hansans" w='36.8rem' pb='1.6rem' mb='5.6rem' color='#2B519B' textAlign='center' fontSize='3.6rem' borderBottom='solid .1rem #A9A9A9'>
                        お問い合わせ
                    </Heading>

                    <Text align='center'>
                        ご興味をお持ちいただきありがとうございます。<br/>
                        ご質問、応募等は下記のメールフォームより記入してください。
                    </Text>
                </Center>

                <form>
                    <Flex direction='column' justify='center' align='flex-start' pt='7.2rem' m='auto' w='66.66%'>
                        <label className="select_wrap">
                            <select>
                                <option disabled defaultValue>*お問合せ内容の選択</option>
                                <option value='採用について'>採用について</option>
                                <option value='事業内容について'>事業内容について</option>
                                <option value='その他'>その他</option>
                            </select>
                        </label>

                        <Input mb='4.8rem' p='1.6rem 3.6rem' w='100%' fontSize='2.2rem' border='solid .1rem #707070' borderRadius='.3rem' type='text' name="会社名" placeholder="会社名" _placeholder={{color: '#2E2E2E'}}/>

                        <Input mb='4.8rem' p='1.6rem 3.6rem' w='100%' fontSize='2.2rem' border='solid .1rem #707070' borderRadius='.3rem' type='text' name="お名前" placeholder="お名前" _placeholder={{color: '#2E2E2E'}}/>

                        <Input mb='4.8rem' p='1.6rem 3.6rem' w='100%' fontSize='2.2rem' border='solid .1rem #707070' borderRadius='.3rem' type='tel' name="電話番号" placeholder="電話番号" _placeholder={{color: '#2E2E2E'}}/>

                        <Input mb='4.8rem' p='1.6rem 3.6rem' w='100%' fontSize='2.2rem' border='solid .1rem #707070' borderRadius='.3rem' type='email' name="メールアドレス" placeholder="*メールアドレス" _placeholder={{color: '#2E2E2E'}}/>

                        <Textarea w='100%' p='1.6rem 3.6rem' h='39.2rem' fontSize='2.2rem' border='solid .1rem #707070' borderRadius='.3rem' placeholder="*お問い合わせ内容" _placeholder={{color: '#2E2E2E'}}/>

                        <Center w='100%' m='8.8rem 0'>
                            <Button w='52.4rem' p='1.8rem 0' fontSize='2.2rem' color='white' border='none' borderRadius='.3rem' background='#2B519B'
                                _hover={{opacity: '.7'}}
                                _active={{opacity: '.7'}}>
                                送信する
                            </Button>
                        </Center>
                    </Flex>
                </form>
            </Box>
        </main>
    );
}