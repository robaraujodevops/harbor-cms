import React, { useState } from "react";
import {
  Grid,
  GridItem,
  TextInput,
  ToggleInput,
  Tooltip,
  CardHeader,
  Box,
  Card,
  CardBody,
  CardContent,
  Flex,
  TextButton,
  Accordion,
  AccordionGroup,
  AccordionToggle,
  IconButton,
  AccordionContent,
  Stack,
  Tab,
  Tabs,
  TabGroup,
  TabPanel,
  TabPanels,
} from "@strapi/design-system";
import { User, Pencil, Plus, Trash } from "@strapi/icons";
import { useMenuContext } from "../../context/menu";
import styled from "styled-components";

const CardHeaderExtended = styled(CardHeader)`
  color: #fff;
`;
export default function MenuModalDataSection({ getError }) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const { menu, setMenu } = useMenuContext();

  return (
    <Grid gap={6} col={12}>
      <GridItem padding={2} col={6}>
        <Card id="third">
          <CardHeaderExtended>
            <Box padding={3}>Create your menu data</Box>
          </CardHeaderExtended>
          <CardBody>
            <CardContent width={"100%"}>
              <Box padding={8} background="neutral0">
                <AccordionGroup
                  footer={
                    <Flex
                      justifyContent="center"
                      height="48px"
                      background="neutral150"
                    >
                      <TextButton startIcon={<Plus />}>Add an entry</TextButton>
                    </Flex>
                  }
                  labelAction={
                    <Tooltip description="Content of the tooltip">
                      <button
                        aria-label="Information about the email"
                        style={{
                          border: "none",
                          padding: 0,
                          background: "transparent",
                        }}
                      ></button>
                    </Tooltip>
                  }
                >
                  <Accordion
                    expanded={expanded}
                    toggle={() => setExpanded((s) => !s)}
                    id="acc-1"
                    size="S"
                    sartIcon={<User aria-hidden={true} />}
                  >
                    <AccordionToggle
                      action={
                        <Stack horizontal size={0}>
                          <IconButton
                            noBorder
                            onClick={() => console.log("edit")}
                            label="Edit"
                            icon={<Pencil />}
                          />
                          <IconButton
                            noBorder
                            onClick={() => console.log("delete")}
                            label="Delete"
                            icon={<Trash />}
                          />
                        </Stack>
                      }
                      title="User informations"
                      togglePosition="left"
                    />
                    <AccordionContent>
                      <AccordionGroup
                        error="The components contain error(s)"
                        footer={
                          <Flex
                            justifyContent="center"
                            height="48px"
                            background="neutral150"
                          >
                            <TextButton startIcon={<Plus />}>
                              Add an entry
                            </TextButton>
                          </Flex>
                        }
                        labelAction={
                          <Tooltip description="Content of the tooltip">
                            <button
                              aria-label="Information about the email"
                              style={{
                                border: "none",
                                padding: 0,
                                background: "transparent",
                              }}
                            ></button>
                          </Tooltip>
                        }
                      >
                        <Accordion
                          error="The components contain error(s)"
                          expanded={expanded}
                          toggle={() => setExpanded((s) => !s)}
                          id="acc-1"
                          size="S"
                          sartIcon={<User aria-hidden={true} />}
                        >
                          <AccordionToggle
                            action={
                              <Stack horizontal size={0}>
                                <IconButton
                                  noBorder
                                  onClick={() => console.log("edit")}
                                  label="Edit"
                                  icon={<Pencil />}
                                />
                                <IconButton
                                  noBorder
                                  onClick={() => console.log("delete")}
                                  label="Delete"
                                  icon={<Trash />}
                                />
                              </Stack>
                            }
                            title="User informations"
                            togglePosition="left"
                          />
                          <AccordionContent>
                            <Box padding={3}>My name is John Duff</Box>
                          </AccordionContent>
                        </Accordion>
                      </AccordionGroup>
                    </AccordionContent>
                  </Accordion>
                  <Accordion
                    expanded={expanded}
                    toggle={() => setExpanded((s) => !s)}
                    id="acc-1"
                    size="S"
                    sartIcon={<User aria-hidden={true} />}
                  >
                    <AccordionToggle
                      action={
                        <Stack horizontal size={0}>
                          <IconButton
                            noBorder
                            onClick={() => console.log("edit")}
                            label="Edit"
                            icon={<Pencil />}
                          />
                          <IconButton
                            noBorder
                            onClick={() => console.log("delete")}
                            label="Delete"
                            icon={<Trash />}
                          />
                        </Stack>
                      }
                      title="User informations"
                      togglePosition="left"
                    />
                    <AccordionContent>
                      <AccordionGroup
                        error="The components contain error(s)"
                        footer={
                          <Flex
                            justifyContent="center"
                            height="48px"
                            background="neutral150"
                          >
                            <TextButton startIcon={<Plus />}>
                              Add an entry
                            </TextButton>
                          </Flex>
                        }
                        labelAction={
                          <Tooltip description="Content of the tooltip">
                            <button
                              aria-label="Information about the email"
                              style={{
                                border: "none",
                                padding: 0,
                                background: "transparent",
                              }}
                            ></button>
                          </Tooltip>
                        }
                      >
                        <Accordion
                          error="The components contain error(s)"
                          expanded={expanded}
                          toggle={() => setExpanded((s) => !s)}
                          id="acc-1"
                          size="S"
                          sartIcon={<User aria-hidden={true} />}
                        >
                          <AccordionToggle
                            action={
                              <Stack horizontal size={0}>
                                <IconButton
                                  noBorder
                                  onClick={() => console.log("edit")}
                                  label="Edit"
                                  icon={<Pencil />}
                                />
                                <IconButton
                                  noBorder
                                  onClick={() => console.log("delete")}
                                  label="Delete"
                                  icon={<Trash />}
                                />
                              </Stack>
                            }
                            title="User informations"
                            togglePosition="left"
                          />
                          <AccordionContent>
                            <Box padding={3}>My name is John Duff</Box>
                          </AccordionContent>
                        </Accordion>
                      </AccordionGroup>
                    </AccordionContent>
                  </Accordion>
                </AccordionGroup>
              </Box>
            </CardContent>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem padding={2} col={6}>
        <Card id="third">
          <CardHeaderExtended>
            <Box padding={3}>Configure datatypes for your menu data</Box>
          </CardHeaderExtended>
          <CardBody>
            <CardContent width={"100%"}>
              <TabGroup
                label="Some stuff for the label"
                id="tabs"
                onTabChange={(selected) => console.log(selected)}
              >
                <Tabs>
                  <Tab>First</Tab>
                  <Tab>Second</Tab>
                  <Tab>Third</Tab>
                </Tabs>
                <TabPanels>
                  <TabPanel>
                    <Box padding={4} background="neutral0">
                      First panel
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Box padding={4} background="neutral0">
                      Second panel
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Box padding={4} background="neutral0">
                      Third panel
                    </Box>
                  </TabPanel>
                </TabPanels>
              </TabGroup>
            </CardContent>
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
  );
}
