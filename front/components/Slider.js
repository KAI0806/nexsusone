import Slick from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image } from '@chakra-ui/react';

export default function Slider() {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 12000,
        autoplaySpeed: .1,
        slidesToShow: 2,
        slidesToScroll: 1,
        pauseOnHover: false,
        cssEase: "linear",
      };
      return (
        <Box as='ul' className='slider' mb='-.5rem'>
            <Slick {...settings}>
                <Box as='li' className='slide'>
                    <Image src='/common/slide01.jpg' alt='スライダー１'/>
                </Box>
                <Box as='li' className='slide'>
                    <Image src='/common/slide02.jpg' alt='スライダー２'/>
                </Box>
                <Box as='li' className='slide'>
                    <Image src='/common/slide03.jpg' alt='スライダー３'/>
                </Box>
                <Box as='li' className='slide'>
                    <Image src='/common/slide04.jpg' alt='スライダー４'/>
                </Box>
                <Box as='li' className='slide'>
                    <Image src='/common/slide05.jpg' alt='スライダー５'/>
                </Box>
                <Box as='li' className='slide'>
                    <Image src='/common/slide06.jpg' alt='スライダー６'/>
                </Box>
            </Slick>
        </Box>

      );
}