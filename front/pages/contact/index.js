import { Box, Center, Flex, Heading, Text, } from "@chakra-ui/react";

import styles from '../../styles/contact.module.css'

export default function Contact() {
    return (
        <main>
            <Box as="section" id={styles.kv} className="kv" h='56rem' position='relative' background='url(/contact/kv_bg.jpg) no-repeat center center/cover'>
                <Heading className="hansans" color='white' fontSize='6.8rem' position='absolute' top='50%' left='24rem' transform='translate(0, -50%)'
                    _before={{position: 'absolute', content: '""', top: '50%', left: '50%', width: '36rem', height: '38rem', transform: 'translate(-50%, -40%)', blendMode: 'screen', zIndex: '-1',  background: 'url(/company/kv_txt.svg) no-repeat center center/contain'}}>
                    CONTACT
                </Heading>
            </Box>

            <Box as="section" id={styles.contact}>
                <Center className={styles.wrap} flexDirection='column' w='66.66%' m='0 auto -11.2rem' p='3.2rem 0 8.8rem' background='white' boxShadow='0 .3rem .6rem rgba(0,0,0,16%)' transform='translateY(-11.2rem)'>
                    <Heading as='h2' className="hansans" w='36.8rem' pb='1.6rem' mb='5.6rem' color='#2B519B' textAlign='center' fontSize='3.6rem' borderBottom='solid .1rem #A9A9A9'>
                        お問い合わせ
                    </Heading>

                    <Text align='center'>
                        ご興味をお持ちいただきありがとうございます。<br/>
                        ご質問、応募等は下記のメールフォームより<br className="sp_only"/>記入してください。
                    </Text>
                </Center>

                <form className="formrun" action="https://form.run/api/v1/r/cmflflx7n2ocb7k87rfc3b2q" method="post">
                    <Flex className={styles.content} direction='column' justify='center' align='flex-start' pt='7.2rem' m='auto' w='66.66%'>
                        <label className="select_wrap">
                            <select data-formrun-required>
                                <option disabled defaultValue>*お問合せ内容の選択</option>
                                <option value='採用について'>採用について</option>
                                <option value='事業内容について'>事業内容について</option>
                                <option value='その他'>その他</option>
                            </select>
                        </label>

                        <input type='text' name="会社名" placeholder="会社名"/>

                        <input type='text' name="お名前" placeholder="お名前"/>

                        <input type='tel' name="電話番号" placeholder="電話番号" data-formrun-type="tel"/>

                        <input type='email' name="メールアドレス" placeholder="*メールアドレス" data-formrun-type="email" data-formrun-required/>

                        <textarea placeholder="*お問い合わせ内容" data-formrun-required/>

                        <Center className={styles.submit} w='100%' m='8.8rem 0'>
                            <button type="submit" data-formrun-error-text="未入力の項目があります" data-formrun-submitting-text="送信中...">
                                送信する
                            </button>
                        </Center>
                    </Flex>
                </form>
            </Box>
        </main>
    );
}