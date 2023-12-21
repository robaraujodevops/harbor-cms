/*
 *
 * HomePage
 *
 */

import React, { useState, createContext } from 'react';

import {
  HeaderLayout,
  BaseHeaderLayout,
  ContentLayout,
  EmptyStateLayout,
  Button,
  Layout,
  Box,
} from "@strapi/design-system";

import { Plus } from "@strapi/icons";
import { Illo } from "../../components/Illo";

import MenuCount from "../../components/MenuCount";
import MenuModal from "../../components/MenuModal";
import MenuTable from "../../components/MenuTable";

const HomePage = () => {

  const [menuData, setMenuData] = useState([] as string[]);
  const [showModal, setShowModal] = useState(false);

  async function addMenu(data: any) {
    // await webMenuRequests.addMenu(data);
    // await fetchData();
  }

  async function toggleMenu(data: any) {
    // await webMenuRequests.toggleMenu(data.id);
  }

  async function deleteMenu(data: any) {
    // await webMenuRequests.deleteMenu(data.id);
    // await fetchData();
  }

  async function editMenu(id: number, data: any) {
    // await webMenuRequests.editMenu(id, data);
    // await fetchData();
  }

  return (
    <Layout>
      <BaseHeaderLayout title="Web Menus Plugin" subtitle="Create your own navigation menus for wonderful websites" as="h2" />
      {showModal && <MenuModal setShowModal={setShowModal} addMenu={addMenu} /> }
      <ContentLayout>
        {
          menuData.length === 0 ? (
            <EmptyStateLayout
              icon={<Illo />}
              content="You don't have any menu yet..."
              action={
                <Button
                  onClick={() => setShowModal(true)}
                  variant="secondary"
                  startIcon={<Plus />}
                >
                  Add your first menu here
                </Button>
              }
            />
          ) : (
            <>
            <MenuCount count={menuData.length} />
              <MenuTable
                menuData={menuData}
                setShowModal={setShowModal}
                toggleMenu={toggleMenu}
                deleteMenu={deleteMenu}
                editMenu={editMenu}
              />
            </>
          )
        }
      </ContentLayout>
    </Layout>
  );
};

export default HomePage;
