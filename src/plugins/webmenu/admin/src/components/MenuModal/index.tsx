import React, { useState } from "react";

import {
  ModalLayout,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Typography,
  Button,
  TextInput,
  Grid,
  Box,
  ToggleInput,
  Tooltip,
  Information,
} from "@strapi/design-system";

import Slugify from "../../utils/slugify";
import slugify from "../../utils/slugify";

export default function MenuModal({ setShowModal, addMenu }) {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");

  const handleSubmit = async (e) => {
    // Prevent submitting parent form
    e.preventDefault();
    e.stopPropagation();

    try {
      await addMenu({ title: title });
      setShowModal(false);
    } catch (e) {
      console.log("error", e);
    }
  };

  const getError = () => {
    if (title.length > 40) {
      return "Content is too long";
    }

    return null;
  };

  const slugTitleBase = (value: string) => {
    setTitle(value);
    setSlug(slugify(value))
  }

  return (
    <ModalLayout
      onClose={() => setShowModal(false)}
      labelledBy="title"
      as="form"
      onSubmit={handleSubmit}
      width="100%"
    >
      <ModalHeader>
        <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title">
          Creates a new menu
        </Typography>
      </ModalHeader>

      <ModalBody>
        <Grid gap={6} gridCols={3}>
          <Box padding={4} hasRadius>
          <TextInput
            placeholder="What will be the menu title?"
            label="Title"
            name="title"
            hint="Max 40 characters"
            error={getError()}
            onChange={(e) => slugTitleBase(e.target.value)}
            value={title}
          /></Box>
          <Box padding={4} hasRadius>
          <TextInput
            placeholder="Check the menu slug?"
            label="Slug"
            name="slug"
            error={getError()}
            value={slug}
          /></Box>
          <Box padding={4} hasRadius>
          <ToggleInput
            label="Is Active"
            name="text"
            error={getError()}
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            labelAction={
              <Tooltip description="Content of the tooltip">
                <button aria-label="Is active?" style={{
                  border: 'none',
                  padding: 0,
                  background: 'transparent'}}>
                </button>
              </Tooltip>}
            onLabel="on"
            offLabel="off"
            checked={true}
            /></Box>
        </Grid>
        <Grid gap={6} gridCols={2}>
          <Box padding={4} hasRadius>
          <TextInput
            placeholder="What do you need to do?"
            label="Title"
            name="text"
            hint="Max 40 characters"
            error={getError()}
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          /></Box>
        </Grid>
      </ModalBody>

      <ModalFooter
        startActions={
          <Button onClick={() => setShowModal(false)} variant="tertiary">
            Cancel
          </Button>
        }
        endActions={<Button type="submit">Add menu</Button>}
      />
    </ModalLayout>
  );
}
