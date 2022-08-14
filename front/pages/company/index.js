import { Box,Heading } from "@chakra-ui/react";

export default function Company() {
    return (
        <main>
            <Box as="section" h='56rem' position='relative' background='url(/company/kv_bg.jpg) no-repeat center center/cover'>
                <Heading className="hansans" color='white' fontSize='6.8rem' position='absolute' top='50%' left='24rem' transform='translate(0, -50%)'
                    _before={{position: 'absolute', content: '""', top: '50%', left: '50%', width: '36rem', height: '38rem', transform: 'translate(-50%, -40%)', blendMode: 'screen', zIndex: '-1',  background: 'url(/company/kv_txt.svg) no-repeat center center/contain'}}>
                    COMPANY
                </Heading>
            </Box>
        </main>
    );
}