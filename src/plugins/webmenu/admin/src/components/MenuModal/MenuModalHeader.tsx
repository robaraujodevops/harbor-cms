import React, { useState } from "react";

import {
  ModalHeader,
  Typography,
} from "@strapi/design-system";

export default function MenuModalHeader() {

  return (
      <ModalHeader>
        <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title">
          Creates a new menu
        </Typography>
      </ModalHeader>
  )
}
