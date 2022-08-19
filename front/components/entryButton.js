import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

export default function EntryButton ({txt, path}) {
    const pathName = `${path}`
    const descript = txt
    
    return (
        <NextLink href={`${pathName}`} passHref>
            <Link className='entry_button'>{descript}</Link>
        </NextLink>
    );
}