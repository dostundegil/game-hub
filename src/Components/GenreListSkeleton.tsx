import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <ListItem paddingY="5px">
      <HStack spacing="4px">
        <Skeleton boxSize="32px" borderRadius={8} />
        <SkeletonText minWidth="100px" noOfLines={1} skeletonHeight="2" />
      </HStack>
    </ListItem>
  );
};

export default GenreListSkeleton;
