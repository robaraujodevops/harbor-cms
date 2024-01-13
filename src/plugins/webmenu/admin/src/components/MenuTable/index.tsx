import React, { useState } from "react";
import {
  Table,
  Thead,
  TFooter,
  Tbody,
  Tr,
  Td,
  Th,
} from "@strapi/design-system";
import { Box, Flex, Button, Typography, IconButton, VisuallyHidden, BaseCheckbox, TextInput } from "@strapi/design-system";
import { Pencil, Trash, Plus } from "@strapi/icons";

function MenuCheckbox({ value, checkboxID, callback, disabled }) {
  const [isChecked, setIsChecked] = useState(value);

  function handleChange() {
    setIsChecked(!isChecked);
    {
      callback && callback({ id: checkboxID, value: !isChecked });
    }
  }

  return (
    <BaseCheckbox
      checked={isChecked}
      onChange={handleChange}
      disabled={disabled}
    />
  );
}

function MenuInput({ value, onChange }) {
  return (
    <TextInput
      type="text"
      aria-label="todo-input"
      name="todo-input"
      error={value.length > 40 ? "Text should be less than 40 characters" : ""}
      onChange={onChange}
      value={value}
    />
  );
}

export default function MenuTable({
  menuData,
  toggleMenu,
  deleteMenu,
  editMenu,
  setShowModal,
}) {
  return (
    <Box
      background="neutral0"
      hasRadius={true}
      shadow="filterShadow"
      padding={8}
      style={{ marginTop: "10px" }}
    >
      <Table
        colCount={4}
        rowCount={10}
        footer={
          <TFooter onClick={() => setShowModal(true)} icon={<Plus />}>
            Add a new menu
          </TFooter>
        }
      >
        <Thead>
          <Tr>
            <Th>
              <Typography variant="sigma">ID</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Menu</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Is Active</Typography>
            </Th>

            <Th>
              <VisuallyHidden>Actions</VisuallyHidden>
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {menuData.map((menu) => {
            const [inputValue, setInputValue] = useState(menu.name);

            const [isEdit, setIsEdit] = useState(false);

            return (
              <Tr key={menu.id}>
                <Td>
                  <Typography textColor="neutral800">{menu.id}</Typography>
                </Td>

                <Td>
                  {isEdit ? (
                    <MenuInput
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                  ) : (
                    <Typography textColor="neutral800">{menu.name}</Typography>
                  )}
                </Td>

                <Td>
                  <MenuCheckbox
                    value={menu.isActive}
                    checkboxID={menu.id}
                    callback={toggleMenu}
                    disabled={isEdit}
                  />
                </Td>

                <Td>
                  {isEdit ? (
                    <Flex style={{ justifyContent: "end" }}>
                      <Button
                        onClick={() => editMenu(menu.id, { name: inputValue })}
                      >
                        Save
                      </Button>
                    </Flex>
                  ) : (
                    <Flex style={{ justifyContent: "end" }}>
                      <IconButton
                        onClick={() => setIsEdit(true)}
                        label="Edit"
                        noBorder
                        icon={<Pencil />}
                      />

                      <Box paddingLeft={1}>
                        <IconButton
                          onClick={() => deleteMenu(menu)}
                          label="Delete"
                          noBorder
                          icon={<Trash />}
                        />
                      </Box>
                    </Flex>
                  )}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
}
