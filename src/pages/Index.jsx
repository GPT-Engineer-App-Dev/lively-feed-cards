import { Box, Flex, Text, Image, VStack, Heading } from '@chakra-ui/react';
import { FaClock, FaUser } from 'react-icons/fa';

const activities = [
  {
    id: 1,
    username: 'JohnDoe92',
    timestamp: '2023-09-15T14:48:00',
    description: 'Uploaded a new photo',
    imageUrl: '/images/activity1.jpg'
  },
  {
    id: 2,
    username: 'AnnaSmith',
    timestamp: '2023-09-15T15:20:00',
    description: 'Started a new project',
    imageUrl: '/images/activity2.jpg'
  },
  {
    id: 3,
    username: 'MikeBrown',
    timestamp: '2023-09-15T16:05:00',
    description: 'Commented on a post',
    imageUrl: '/images/activity3.jpg'
  }
];

const ActivityCard = ({ activity }) => (
  <Box bg="gray.700" p={4} borderRadius="lg" boxShadow="xl" mb={4}>
    <Flex alignItems="center" mb={2}>
      <FaUser color="white" />
      <Text fontWeight="bold" color="cyan.400" ml={2}>{activity.username}</Text>
      <FaClock color="white" ml={4} />
      <Text fontSize="sm" color="gray.300" ml={2}>{activity.timestamp}</Text>
    </Flex>
    <Text color="white" fontSize="lg">{activity.description}</Text>
    <Image src={activity.imageUrl} borderRadius="md" mt={3} />
  </Box>
);

const Index = () => {
  return (
    <VStack spacing={4} p={5} align="stretch">
      <Heading color="white" mb={4}>Live Activity Feed</Heading>
      {activities.map(activity => (
        <ActivityCard key={activity.id} activity={activity} />
      ))}
    </VStack>
  );
};

export default Index;