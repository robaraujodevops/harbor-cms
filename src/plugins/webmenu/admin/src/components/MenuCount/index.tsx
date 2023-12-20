import React from "react";
import { Box, Flex, Typography } from "@strapi/design-system";

export default function MenuCount({ count }: any) {
  return (
    <Box background="neutral0" hasRadius={true} shadow="filterShadow">
      <Flex justifyContent="center" padding={8}>
        <Typography variant="alpha">
          You have a total of {count} menu 🚀
        </Typography>
      </Flex>
    </Box>
  );
}
