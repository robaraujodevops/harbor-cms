import React, { createContext, useContext, useState } from "react";

import {
  ModalLayout,
  ModalBody,
  ModalFooter,
  Button,
} from "@strapi/design-system";

import MenuModalHeader from "./MenuModalHeader";
import MenuModalTopSection from "./MenuModalTopSection";
import MenuModalDataSection from "./MenuModalDataSection";

import { useMenuContext } from "../../context/menu";


export default function MenuModal({ setShowModal, addMenu }: any) {
  const { menu, setMenu } = useMenuContext();
  const handleSubmit = async (e) => {
    // Prevent submitting parent form
    e.preventDefault();
    e.stopPropagation();

    try {
      await addMenu({ title: menu.title });
      setShowModal(false);
    } catch (e) {
      console.log("error", e);
    }
  };

  const getError = () => {
    if (menu.title.length > 40) {
      return "Content is too long";
    }

    return null;
  };

  return (
    <ModalLayout
      onClose={() => setShowModal(false)}
      labelledBy="title"
      as="form"
      onSubmit={handleSubmit}
      width="100em"
    >
      <MenuModalHeader />
      <ModalBody>
        <MenuModalTopSection getError={getError} />
        <MenuModalDataSection getError={getError} />
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
