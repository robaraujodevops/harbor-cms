import React from "react";
import {
  Grid,
  GridItem,
  TextInput,
  ToggleInput,
  Tooltip,
} from "@strapi/design-system";
import slugify from "../../utils/slugify";
import { useMenuContext } from "../../context/menu";

export default function MenuModalTopSection({ getError }) {
  const { menu, setMenu } = useMenuContext();

  return (
    <Grid gap={6} gridCols={12}>
      <GridItem padding={2} col={5}>
        <TextInput
          placeholder="What will be the menu title?"
          label="Title"
          name="title"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e: any) =>
            setMenu({
              ...menu,
              title: e.target.value,
              slug: slugify(e.target.value),
            })
          }
          value={menu.title}
        />
      </GridItem>
      <GridItem padding={2} col={5}>
        <TextInput
          placeholder="Check the menu slug?"
          label="Slug"
          name="slug"
          value={menu.slug}
        />
      </GridItem>
      <GridItem padding={2} col={2}>
        <ToggleInput
          label="Is Active"
          name="isActive"
          onChange={(e: any) =>
            setMenu({ ...menu, isActive: Boolean(!menu.isActive) })
          }
          labelAction={
            <Tooltip description="Content of the tooltip">
              <button
                aria-label="Is active?"
                style={{
                  border: "none",
                  padding: 0,
                  background: "transparent",
                }}
              ></button>
            </Tooltip>
          }
          onLabel="yes"
          offLabel="no"
          checked={menu.isActive}
        />
      </GridItem>
    </Grid>
  );
}
