import Image from 'next/image'
import {Box, Text, LinkBox, LinkOverlay} from '@chakra-ui/react'
import { Global} from '@emotion/react'
import Link from 'next/link'

export const GridItem =({ children, href, title, thumbnail}) => (
    <Box w="100%" align="center">
        <LinkBox cursor="pointer">
            <Image src={thumbnail} alt={title} className="grid-item-thumbnail" placeholder= "blur" loading="lazy"/>
            <LinkOverlay href={href} target="_blank">
                <Text mt={2}>{tttle}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)

export const WorkGridItem =({children, id , title , thumbnail}) =>(
    <Box w="100%" align="center">
        <Link href={id}>
            <LinkBox cursor="pointer">
                <Image src={thumbnail} alt={title} className="grid-item-thumbnail" placeholder='blur'/>
                <Link href={id}>
                    <Text mt={2} fontSize={20}>
                        {title}
                    </Text>
                </Link>
                <Text fontSize={14}>{children}</Text>
            </LinkBox>
        </Link>
    </Box>
)

export const GridItemStyle = () =>(
    <Global styles={`
    .grid-item-thumbnail {
        border-radius:12px;
    }
        `
    }
/>
)