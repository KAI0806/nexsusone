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
        responsive:[
            {
              breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  speed: 10000,
              }
            },
        ],
      };
      return (
        <Box as='ul' className='slider' mb='-.5rem' h='35rem'>
            <Slick {...settings}>
                <Box as='li' className='slide'>
                    <Image src='/common/slide01.jpg' alt='スライダー１' h='35rem'/>
                </Box>
                <Box as='li' className='slide'>
                    <Image src='/common/slide02.jpg' alt='スライダー２' h='35rem'/>
                </Box>
                <Box as='li' className='slide'>
                    <Image src='/common/slide03.jpg' alt='スライダー３' h='35rem'/>
                </Box>
                <Box as='li' className='slide'>
                    <Image src='/common/slide04.jpg' alt='スライダー４' h='35rem'/>
                </Box>
                <Box as='li' className='slide'>
                    <Image src='/common/slide05.jpg' alt='スライダー５' h='35rem'/>
                </Box>
                <Box as='li' className='slide'>
                    <Image src='/common/slide06.jpg' alt='スライダー６'/>
                </Box>
            </Slick>
        </Box>

      );
}