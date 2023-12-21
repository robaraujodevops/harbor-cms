import React, {
  createContext,
  useContext,
  useState,
} from "react";

// Typing menu data
type MenuType = {
  title: string;
  slug: string;
  isActive: boolean;
};

const MenuContext = createContext({
  menu: {title: "", slug: "", isActive: false,},
  setMenu: (menu: MenuType) => {},
});

interface MenuProviderProps{
  children: React.ReactNode
}

const MenuProvider = ({ children }: MenuProviderProps) => {
  const [menu, setMenu] = useState<MenuType>({title: "", slug: "", isActive: false});

  return (
    <MenuContext.Provider
      value={{
        menu,
        setMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

const useMenuContext = () => {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error("useMenuContext must be used inside the MenuProvider");
  }

  return context;
};

export { MenuProvider, useMenuContext };
export default MenuContext;
