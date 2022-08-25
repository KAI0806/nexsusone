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
        autoplaySpeed: 0,
        slidesToShow: 2.8,
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
        <Box as='ul' className='slider' mb='-.5rem'>
            <Slick {...settings}>
                <Box as='li' className='slide'>
                    <Image className='pc_only' src='/common/slide01.jpg' alt='スライダー１'/>
                    <Image className='sp_only' src='/common/slide01_sp.jpg' alt='スライダー２'/>
                </Box>
                <Box as='li' className='slide'>
                    <Image className='pc_only' src='/common/slide02.jpg' alt='スライダー２'/>
                    <Image className='sp_only' src='/common/slide02_sp.jpg' alt='スライダー２'/>
                </Box>
                <Box as='li' className='slide'>
                    <Image className='pc_only' src='/common/slide03.jpg' alt='スライダー３'/>
                    <Image className='sp_only' src='/common/slide03_sp.jpg' alt='スライダー3'/>
                </Box>
                <Box as='li' className='slide'>
                    <Image className='pc_only' src='/common/slide04.jpg' alt='スライダー４'/>
                    <Image className='sp_only' src='/common/slide04_sp.jpg' alt='スライダー4'/>
                </Box>
                <Box as='li' className='slide'>
                    <Image className='pc_only' src='/common/slide05.jpg' alt='スライダー５'/>
                    <Image className='sp_only' src='/common/slide05_sp.jpg' alt='スライダー5'/>
                </Box>
                <Box as='li' className='slide'>
                    <Image className='pc_only' src='/common/slide06.jpg' alt='スライダー６'/>
                    <Image className='sp_only' src='/common/slide06_sp.jpg' alt='スライダー6'/>
                </Box>
            </Slick>
        </Box>

      );
}