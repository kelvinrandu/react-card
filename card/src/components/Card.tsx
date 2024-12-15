// import { StarIcon } from '@chakra-ui/icons'
import { Box, Image, Badge } from '@chakra-ui/react'

export function Card() {
    const property = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Chill Spot',
        formattedPrice: '1km',
        reviewCount: 34,
        rating: 4,
    }

    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image h={100} width={'100%'} src={property.imageUrl} alt={property.imageAlt} />

            <Box p='4'>
                <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                        Restaurants
                    </Badge>

                </Box>

                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'

                >
                    {property.title}
                </Box>

                <Box>

                    <Box as='span' fontSize='xs' color='gray.600' >
                        1 km away
                    </Box>
                </Box>

                <Box display='flex' mt='2' alignItems='center'>
                    {/* {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? 'teal.500' : 'gray.300'}
                />
              ))} */}
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                        {property.reviewCount} reviews
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}